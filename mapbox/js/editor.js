(function() {

if (!App) throw new Error('Global App object required');
if (!Views) throw new Error('Global Views object required');

var Editor = Backbone.View.extend({});

Editor.prototype.events = (function() {
    var events = {};
    events['click #project a.revert']           = 'revert';
    events['click #project-settings a.save']    = 'save';
    events['click #map-actions a.project-save'] = 'save';
    events['click .readonly']                   = 'inputselect';
    events['click #project-data-browse a']      = 'layersSet';
    events['click #project-layers .close']      = 'layersSet';
    events['click #project-layers a']           = 'layersView';
    events['click #project a.book']             = 'layersRender';
    events['click .app .tabs a']                = 'tabs';
    events['click .app .switch a']              = 'tabs';
    events['click .app .color-tabs a']          = 'tabs';
    events['click .app .pager a']               = 'pager';
    events['keyup #project-settings input[type=text]'] = 'set';
    events['keyup #project-settings textarea']  = 'set';
    events['click #private']                    = 'set';
    events['click #map-help .message.forward']  = 'helpClose';
    events['click #marker-tray a']              = 'markerEdit';
    events['click #marker-tray .trash']         = 'markerDel';
    events['keyup #marker-edit input']          = 'markerSet';
    events['keyup #marker-edit textarea']       = 'markerSet';
    events['click #marker-edit input[type=radio]'] = 'markerSet';
    events['click #style-type input']           = 'styleSet';
    events['click #style-l10n input']           = 'styleSet';
    events['click #style-2x']                   = 'style2x';
    events['click #style-swatches input']       = 'styleSwatch';
    events['click #style a.palette']            = 'stylePalette';
    events['mousedown .color-picker .color-h']  = 'colorH';
    events['mousemove .color-picker .color-h']  = 'hoverColorH';
    events['mouseup .color-picker .color-h']    = 'clearSelectMode';
    events['mousedown .color-picker .color-sl'] = 'colorSL';
    events['mousemove .color-picker .color-sl'] = 'hoverColorSL';
    events['mouseup .color-picker .color-sl']   = 'clearSelectMode';
    events['keyup .color-picker .color-hex']    = 'colorHex';
    events['change input.clamp']                = 'colorClamp';
    events['click #style-tint .disable']        = 'colorOn';
    events['click #style-tint .enable']         = 'colorOn';
    events['click .color-picker .invert']       = 'colorInv';
    events['click #search-results input']       = 'searchSet';
    events['mousedown #map-app']                = 'placeClear';
    events['click .app.modes > a']              = 'placeClear';
    events['click a.project-share']             = 'placeClear';
    events['click a.project-info']              = 'placeClear';
    events['click .module *']                   = 'placeClear';
    events['click .share']                      = 'share';
    events['click #share-simple a']             = 'sharemethod';
    events['click #share-simple .popup']        = 'sharepopup';
    events['click #share .readonly']            = 'shareselect';
    events['click .set-center']                 = 'setcenter';
    events['click .module > .close']            = 'reset';
    return events;
})();

Editor.prototype.renderName = function(model, val) {
    $('.project-name').text(val);
};

Editor.prototype.renderShare = function(model, val) {
    if (model.id.split('.')[0] === 'tmp') return;
    var current = ($('#share-content .sliding').attr('class')||'').match(/active[0-9]+/);
    var options = _(model.attributes).clone();
    if (current) options.activetab = current[0];
    $('#share-content').html(App.template('template-share')(options));
};

Editor.prototype.set = function(ev) {
    var el = $(ev.currentTarget);
    var attr = {};
    if (el.is('input[type=checkbox]') || el.is('input[type=radio]')) {
        attr[el.attr('name')] = el.is(':checked');
    } else {
        attr[el.attr('name')] = el.val();
    }
    this.model.set(attr);
};

Editor.prototype.saved = function(ev) {
    this.changes = false;
    $('#project').removeClass('changed');
    $('#map-saveshare').removeClass('active1 active2').addClass('active1');
    App.storage('editor.stash', null);
    analytics.track('Saved a Map');
};

Editor.prototype.changed = function(ev) {
    this.changes = true;
    $('#project').addClass('changed');
    $('#map-saveshare').removeClass('active1 active2').addClass('active2');
    if (this.map) App.storage('editor.stash', JSON.stringify({
        id: this.model.id,
        model: this.model.toJSON(),
        markers: this.markers.model && this.markers.model.toJSON(),
        mapview: [this.map.getCenter(), this.map.getZoom()]
    }));
};

Editor.prototype.reset = function(ev) {
    window.location.href = '#app';
    this.place.clear();
    this.markers.clear();
    this.map.closePopup();

    // Clear the set center option
    $('#set-center').toggleClass('set active', false);
};

Editor.prototype.tabs = App.tabs;

Editor.prototype.inputselect = function(ev) {
    $(ev.currentTarget).select();
};

Editor.prototype.pager = function(ev) {
    var el = $(ev.currentTarget);
    var dir = el.is('.up') ? -1 : 1;
    var parent = $('#' + el.attr('href').split('#').pop());

    // Pager requires the target to be a sliding container.
    if (!parent.is('.sliding')) return;

    // Bail on empty containers.
    var size = parent.children().size();
    if (size <= 0) return;

    // Search for a .activeN class and nuke it.
    var current = parent.attr('class').match(/active[0-9]+/);
    // Add the new appropriate active class.
    if (current) {
        var index = parseInt(current[0].split('active')[1],10) - 1;
        index = index + dir;
        if (index >= 0 && index < size) {
            parent.removeClass(current[0]);
            parent.addClass('active' + (index+1));
        }
    } else {
        parent.addClass('active1');
    }
    return false;
};

Editor.prototype.helpClose = function(ev) {
    this.help.done(this.help.current.key);
    $(ev.currentTarget).addClass('closed');
    return false;
};

Editor.prototype.styleSet = function(ev) {
    var el = $(ev.currentTarget);
    this.style[ev.currentTarget.name](ev.currentTarget.value);
    this.style.refresh();
    this.style.make();
    if (el.is('#style-type input')) {
        this.help.done('style.baselayer');
    } else if (el.is('#style-l10n input')) {
        this.help.done('style.labels');
    }
};

Editor.prototype.style2x = function(ev) {
    var on = $(ev.currentTarget).prop('checked');
    this.style.scale(on ? 2 : 1);
    this.style.refresh();
    this.style.make();
};

Editor.prototype.markerDel = function(ev) {
    this.markers.del($(ev.currentTarget).parent().attr('id'));
    analytics.track('Deleted a Marker');
    return false;
};

Editor.prototype.markerEdit = function(ev) {
    this.markers.edit($(ev.currentTarget).attr('id'));
    analytics.track('Edited a Marker');
    return false;
};

Editor.prototype.markerSet = _(function(ev) {
    if (!this.markers.editing) throw new Error('Nothing to edit');
    var el = $(ev.currentTarget);
    var key = ev.currentTarget.name;
    var val = ev.currentTarget.value;

    // Validation for marker-color.
    if (key === 'marker-color' && !(/^#[0-9a-f]{6}$/i).test(val)) return;

    $('#' + key).val(val);
    $('#' + this.markers.editing.id + ' .' + key).text(val);
    this.markers.editing[key] = val;
    this.markers.refresh(this.markers.editing.id);
    this.changed();
    if (el.is('input[type=radio]')) {
        this.help.done('marker.style');
    } else {
        this.help.done('marker.popup');
    }
}).throttle(50);

Editor.prototype.hoverColorH = function(ev) {
    if (this.colorSelectMode) this.colorH(ev);
};

Editor.prototype.hoverColorSL = function(ev) {
    if (this.colorSelectMode) this.colorSL(ev);
};

Editor.prototype.clearSelectMode = function() {
    this.colorSelectMode = false;
};

Editor.prototype.colorH = _(function(ev) {
    if (!ev.which) return;
    this.colorSelectMode = true;
    var id = this.style.id(ev);
    var x = (ev.offsetX || ev.clientX - $(ev.currentTarget).offset().left + window.pageXOffset);
    var y = (ev.offsetY || ev.clientY - $(ev.currentTarget).offset().top + window.pageYOffset);
    this.style.styles[id].h = x/$(ev.currentTarget).width();
    this.style.render(id);
    ev.preventDefault();
}).throttle(20);

Editor.prototype.colorSL = _(function(ev) {
    if (!ev.which) return;
    this.colorSelectMode = true;
    var id = this.style.id(ev);
    var x = (ev.offsetX || ev.clientX - $(ev.currentTarget).offset().left + window.pageXOffset);
    var y = (ev.offsetY || ev.clientY - $(ev.currentTarget).offset().top + window.pageYOffset);
    this.style.styles[id].s = x/$(ev.currentTarget).width();
    this.style.styles[id].l = (1-(this.style.styles[id].s*0.5)) * (1-y/120);
    this.style.render(id);
    ev.preventDefault();
}).throttle(20);

Editor.prototype.colorHex = _(function(ev) {
    var id = this.style.id(ev);
    var hex = $(ev.currentTarget).val();

    if ((/^#?([0-9a-f]{6})$/i).test(hex)) {
        var hsl = Streets.parseTintString(hex);
        this.style.styles[id].h = Streets.avg(hsl.h);
        this.style.styles[id].s = Streets.avg(hsl.s);
        this.style.styles[id].l = Streets.avg(hsl.l);
        this.style.render(id, true);
    }
}).throttle(20);

Editor.prototype.styleSwatch = function(ev) {
    var hsl = Streets.parseTintString(ev.currentTarget.value);
    this.style.styles.whiz.h = Streets.avg(hsl.h);
    this.style.styles.whiz.s = Streets.avg(hsl.s);
    this.style.styles.whiz.l = Streets.avg(hsl.l);
    this.style.render('whiz');
};

Editor.prototype.stylePalette = function(ev) {
    var id = $(ev.currentTarget).attr('id').split('palette-').pop();
    if (id === 'custom') {
        $(this.$('#style-tint .color-tabs a').get(2)).click();
    } else {
        this.style.palette(id);
    }
    $(ev.currentTarget).addClass('active').siblings().removeClass('active');
    this.help.done('style.details');
    return false;
};

Editor.prototype.colorClamp = _(function(ev) {
    var id = this.style.id(ev);
    var v = +$(ev.currentTarget).val();
    if ($(ev.currentTarget).attr('name') === 'a') {
        this.style.styles[id].a = +v;
    } else {
        this.style.styles[id][$(ev.currentTarget).attr('name')] = 0.5 - v;
    }
    this.style.render(id, true);
}).throttle(20);

Editor.prototype.colorOn = function(ev) {
    var id = $('input[name=id]', $(ev.currentTarget).parent().attr('href')).val();
    this.style.styles[id].on = !this.style.styles[id].on;
    this.style.styles[id].a = this.style.styles[id].on ?
        (this.style.styles[id].a || 1) :
        this.style.styles[id].a;
    this.style.render(id);
    return false;
};

Editor.prototype.colorInv = function(ev) {
    var id = this.style.id(ev);
    this.style.styles[id].inv = !this.style.styles[id].inv;
    this.style.render(id);
    return false;
};

Editor.prototype.layersSet = function(ev) {
    var el = $(ev.currentTarget).is('a') ? $(ev.currentTarget) : $(ev.currentTarget).parents('a');
    this.layers.toggle(el.data('id'));
    return false;
};

Editor.prototype.layersRender = function(ev) {
    this.layers.render();
};

Editor.prototype.layersView = function(ev) {
    var el = $(ev.currentTarget).is('a') ? $(ev.currentTarget) : $(ev.currentTarget).parents('a');
    this.layers.setview(el.data('id'));
    return false;
};

Editor.prototype.searchSet = function(ev) {
    this.search.setview();
};

Editor.prototype.placeClear = function(ev) {
    this.place.clear();
};

// Called from global App keydown.
Editor.prototype.keydown = function(ev) {
    if (!(/#(app|search|style|markers|share|project)/).test(window.location.hash)) return;

    var key = ev.which;

    switch (window.location.hash) {
    case '#search':
        switch (key) {
        case 27: // esc
            this.help.done('esc');
            return this.reset();
        case 38: // up
            ev.preventDefault();
            return this.search.select(-1) && false;
        case 40: // down
            ev.preventDefault();
            return this.search.select(1) && false;
        case 13: // return
            ev.preventDefault();
            return this.search.setview();
        default:
            this.search.focus(ev);
            return this.search.search(this.search.input.value);
        }
        break;
    case '#project':
    case '#style':
    case '#markers':
        switch (key) {
        case 13: // return
            if (!ev.shiftKey) {
                ev.preventDefault();
                return ev.target.blur();
            }
            break;
        case 27: // esc
            if (_.contains(['input', 'textarea'], ev.target.tagName.toLowerCase())) {
                ev.preventDefault();
                return ev.target.blur();
            } else if (this.map.hasLayer(this.place.layer)) {
                return this.place.cancel();
            }
            break;
        }
        break;
    // Any state
    default:
        // 0-9a-z => start a new search.
        if (!ev.ctrlKey && !ev.metaKey && !ev.altKey && key >= 48 && key <= 90) {
            window.location.hash = '#search';
            this.search.input.value = '';
            this.search.focus(ev);
        }
        break;
    }

    // ESC: return to app default state
    if (key === 27) {
        this.help.done('esc');
        return this.reset();
    }
};

// Called from global App keyup.
Editor.prototype.keyup = function(ev) {
    if (!(/#(app|search|style|markers|share|project)/).test(window.location.hash)) return;

    var key = ev.which;

    switch (window.location.hash) {
    case '#search':
        switch (key) {
        case 38:
        case 40:
        case 13:
            break;
        default:
            this.search.focus(ev);
            return this.search.search(this.search.input.value);
        }
        break;
    }
};

Editor.prototype.revert = function() {
    var msg = 'Revert all unsaved changes to <strong>' +
        (this.model.escape('name') || 'Untitled map') +
        '</strong>?';
    Views.modal.show('confirm', msg, function(err) {
        if (err) return;
        App.storage('editor.stash', null);
        window.location.hash = '#app';
        window.location.reload();
    });
    return false;
};

Editor.prototype.save = function() {
    this.help.done('project');
    var editor = this;
    var attr = {};
    attr.created = +new Date();
    if ($('#save-center').is(':checked')) {
        var center = this.map.getCenter();
        var zoom = this.map.getZoom();
        attr.center = [center.lng, center.lat, zoom];
    }
    this.model.set(attr);
    $('#app').addClass('loading');
    App.save(this.model, function(err) {
        if (err) {
            $('#app').removeClass('loading');
            return err.code !== 'closed' && Views.modal.show('err', err);
        }
        editor.markers.save(function(err) {
            if (err) {
                $('#app').removeClass('loading');
                return Views.modal.show('err', err);
            }
            $('#app').removeClass('loading');
            App.editing(editor.model.id);
            editor.saved();
            editor.reset();
        });
    });
    return false;
};

Editor.prototype.share = function() {
    var view = this;
    var center = this.model.get('center');
    this.map.setView([center[1], center[0]], center[2]);
    this.help.done('share');
    analytics.track('Pressed Publish Button');
};

Editor.prototype.sharemethod = function(ev) {
    analytics.track('Shared a Map', {
        method: $(ev.currentTarget).data('type')
    });
};

Editor.prototype.shareselect = function(ev) {
    analytics.track('Shared a Map', {
        method: $(ev.currentTarget).data('type')
    });
};

Editor.prototype.sharepopup = function(ev) {
    window.open(
        $(ev.currentTarget).attr('href'),
        'sharebox',
        'menubar=no,scrollbars=no,top=20,left=20,resizable=no,width=550,height=300'
    );
    return false;
};

Editor.prototype.setCenterOption = function() {
    var view = this; // `this` is the map object
    if (window.location.hash === '#share') {
        $('#set-center')
            .removeClass('set')
            .addClass('active')
            .html(App.template('template-setcenter')({
                lng: view.getCenter().lng.toFixed(2),
                lat: view.getCenter().lng.toFixed(2),
                zoom: view.getZoom()
            }));
    } else {
        $('#set-center').toggleClass('set active', false);
    }
};

Editor.prototype.setcenter = function(ev) {
    this.model.set({
        center: [
            this.map.getCenter().lng,
            this.map.getCenter().lat,
            this.map.getZoom()
        ]
    });

    // Commit the new saved map position
    App.save(this.model, function(err) {
        if (err) Views.modal.show('err', err);
        $(ev.currentTarget).addClass('set');
    });

    return false;
};

Editor.prototype.render = function() {
    $('#project input[name=name]').val(this.model.get('name'));
    $('#project textarea[name=description]').val(this.model.get('description'));
    $('#project input[name=private]').attr('checked', !!this.model.get('private'));

    // If project is new, set center by default
    if(!this.model.get('_rev')) {
        $('#save-center').prop('checked', true);
        this.changed();
    }

    this.renderName(this.model, this.model.get('name'));
    this.renderShare(this.model, this.model.id);
};

Editor.prototype.redraw = function() {
    if (!this.map) return;
    var layers = this.model.attributes.layers;
    var baseurl = this.model.attributes.tiles[0].split('/v3/')[0];
    var updated = _(layers).reduce(function(memo, l) {
        return memo || (l.indexOf('base.') === -1 ? '?update=' + (+new Date()).toString(36).substr(0,5) : '');
    }, '');
    this.model.attributes.thumb = baseurl + '/v3/' + layers.join(',') + '/thumb.png' + updated;
    this.model.attributes.tiles = [baseurl + '/v3/' + layers.join(',') + '/{z}/{x}/{y}.png' + updated];
    this.map.tileLayer._setTileJSON(this.model.toJSON());
    this.map.tileLayer.redraw();

    // Model attributes have been updated.
    this.changed();

    // Clear out stale values.
    var view = this;
    delete this.model.attributes.grids;
    delete this.model.attributes.legend;
    delete this.model.attributes.attribution;
    if (this.map.gridLayer) {
        this.map.removeLayer(this.map.gridLayer);
        delete this.map.gridLayer;
    }
    if (this.map.gridControl) {
        this.map.removeControl(this.map.gridControl);
        delete this.map.gridControl;
    }
    if (this.map.legendControl) _(this.map.legendControl._legends).each(function(i,t) {
        view.map.legendControl.removeLegend(t);
    });

    // Update remaining layers/controls.
    // Let the API do the hard work of compositing here.
    $.ajax({
        url: baseurl + '/v3/' + layers.join(',') + '.json',
        type: 'GET',
        contentType: 'application/json',
        processData: false,
        dataType: 'json',
        success: function(json) {
            // Update min/max/bounds of tileLayer.
            view.model.attributes.minzoom = json.minzoom;
            view.model.attributes.maxzoom = json.maxzoom;
            view.model.attributes.bounds = json.bounds;
            view.map.tileLayer.options.minZoom = json.minzoom;
            view.map.tileLayer.options.maxZoom = json.maxzoom;
            view.map.tileLayer.options.bounds = new L.LatLngBounds(
                new L.LatLng(json.bounds[1], json.bounds[0]),
                new L.LatLng(json.bounds[3], json.bounds[2])
            );
            view.map._updateZoomLevels();
            // Update grids/templates.
            if (json.template) {
                view.model.attributes.grids = [baseurl + '/v3/' + layers.join(',') + '/{z}/{x}/{y}.grid.json' + updated];
                view.map.gridLayer = L.mapbox.gridLayer({
                    grids: view.model.attributes.grids,
                    minzoom: json.minzoom,
                    maxzoom: json.maxzoom
                });
                view.map.addLayer(view.map.gridLayer);
                view.map.gridControl = L.mapbox.gridControl(view.map.gridLayer, {template:json.template});
                view.map.addControl(view.map.gridControl);
            }
            // Update legend.
            if (json.legend) {
                view.model.attributes.legend = json.legend;
                view.map.legendControl.addLegend(json.legend);
            }
            // Update attribution.
            if (json.attribution) {
                view.model.attributes.attribution = json.attribution;
            }
            view.changed();
        },
        error: function(err) {}
    });
};

Editor.prototype.initialize = function(options) {
    if (!this.model) throw new Error('Editor requires loaded model instance');

    // Load stashed state. Not attached to view as this should only be used
    // and exposed to initialize.
    var stash = {};
    if (App.storage('editor.stash')) try {
        stash = JSON.parse(App.storage('editor.stash'));
        if (stash.id !== this.model.id) {
            stash = {};
            App.storage('editor.stash', null);
        } else {
            if (typeof stash.model !== 'object') delete stash.model;
            if (typeof stash.markers !== 'object') delete stash.markers;
            if (stash.mapview.length !== 2) delete stash.mapview;
            if (stash.model) stash.model = App.revless(stash.model);
            if (stash.markers) stash.markers = App.revless(stash.markers);
        }
    } catch(err) {}

    this.redraw = _(this.redraw).bind(this);
    this.changed = _(this.changed).bind(this);
    this.model.on('change', _(this.changed).throttle(50));
    this.model.on('change:id', _(this.renderShare).throttle(50));
    this.model.on('change:center', _(this.renderShare).throttle(50));
    this.model.on('change:name', _(this.renderName).throttle(50));
    this.model.on('change:layers', _(this.redraw).throttle(500));

    // Set model attributes from stash.
    if (stash.model && !_(stash.model).isEqual(App.revless(this.model.attributes)))
        this.model.set(stash.model);

    this.render();

    var editor = this;

    // Omit the data key when instantiating the map.
    // Markers are loaded separately from the API by the marker module.
    var map = L.mapbox.map('map-app', _(this.model.toJSON()).omit('data'), { zoomControl: false });

    if (stash.mapview) map.setView(stash.mapview[0], stash.mapview[1]);

    // Contextual help
    //
    // Register a new message for a given task with:
    //
    //     help.hint('Welcome to MapBox', 'startevent');
    //
    // Mark the task as done with:
    //
    //     help.done('startevent');
    var help = (function() {
        var exports = {};
        exports.messageHTML = App.template('map-help-message');
        exports.help = $('#map-help');
        exports.queue = [];
        exports.tasks = App.storage('editor.help') && !App.param('resethelp') ? JSON.parse(App.storage('editor.help')) : {};
        exports.current = false;
        exports.clearing = false;

        // Mark a given task as complete.
        function set(key) {
            exports.tasks[key] = true;
            App.storage('editor.help', JSON.stringify(exports.tasks));
        }

        // Timed clear.
        function slow() {
            var el = $('.message', exports.help).addClass('done');
            exports.clearing = true;
            setTimeout(function() {
                if (!exports.clearing) return;
                $('#map-actions').removeClass('active1').addClass('active2');
                el.remove();
                setTimeout(function() {
                    exports.current = false;
                    exports.clearing = false;
                    display();
                }, 2000);
            }, 1500);
        }

        // Immediate clear.
        function clear() {
            $('.message', exports.help).remove();
            $('#map-actions').removeClass('active1').addClass('active2');
            exports.current = false;
            exports.clearing = false;
        }

        // Rollback the currently displayed message to make room for a higher
        // priority (flash/confirm) message.
        function rollback(force) {
            if (exports.clearing && !force) return;
            if (!exports.clearing && exports.current) exports.queue.unshift(exports.current);
            clear();
            display();
        }

        // Core display function. Grabs next task in queue and displays.
        function display() {
            if (exports.current) return;
            if (!exports.queue.length) return;

            // Queue has items but none match the current hash.
            // Try again in 2000ms.
            if (!_(exports.queue).filter(function(task) {
                return !task.hash || task.hash.test(window.location.hash);
            }).length) return setTimeout(display, 2000);

            var task = _(exports.queue).find(function(task) {
                return !task.hash || task.hash.test(window.location.hash);
            });
            exports.queue = _(exports.queue).filter(function(t) {
                return t !== task;
            });

            // Task is not complete. Display message.
            if (!exports.tasks[task.key]) {
                exports.current = task;
                exports.help.prepend(exports.messageHTML(exports.current));
                $('#map-actions').removeClass('active2').addClass('active1');
            // Recurse until we hit an incompleted task.
            } else {
                display();
            }
        }

        // External API method. Call when the given task has been completed.
        // If the task in question is being displayed will show a completion
        // state to user and move on to the next task.
        exports.done = function(key) {
            set(key);
            if (exports.current && exports.current.key === key && !exports.clearing) {
                slow();
            } else {
                display();
            }
        };

        // External API method. Clear current task immediately and move on to
        // the next task.
        exports.clear = function() {
            if (exports.current) {
                set(exports.current.key);
                clear();
            }
            display();
        };

        // Show a hint task.
        exports.hint = function(message, key, hash) {
            if (!message) throw new Error('message required');
            if (!key) throw new Error('key required');
            exports.queue.push({ message: message, key: key, hash: new RegExp(hash) });
            display();
        };

        map.on('dragend', function() { exports.done('mapmove') });
        if ('onhashchange' in window) window.onhashchange = function() {
            var hash = window.location.hash;
            var mapping = { '#app': 'esc', '#style': 'style', '#project': 'project', '#search': 'search' };
            if (mapping[hash]) exports.done(mapping[hash]);
            if (exports.current && exports.current.hash && !exports.current.hash.test(hash)) rollback();
        };
        $('a[href=#share-developers]').click(function() { exports.done('share.developers') });
        $('a[href=#project-data]').click(function() { exports.done('project.data') });
        $('a.mb-logo-app').click(function() { exports.done('escape') });
        return exports;
    })();

    // Style
    var style = (function() {
        var exports = {};

        // Work on styles get stashed here if the map `type` is switched so
        // that they can be restored later if the type is switched back.
        exports.stash = {};

        // The current set of styles being edited.
        exports.styles = null;

        // Return the parent color picker for a given event.
        exports.id = function(ev) {
            return $('input[name=id]', $(ev.currentTarget).parents('.color-picker')).val();
        };

        // Refresh the current map layer to reflect style changes.
        // @TODO should the _setTileJSON method be public upstream?
        exports.refresh = _(function() {
            var plus = _(editor.model.get('layers')).filter(function(id) { return id.indexOf('base.') === -1 });
            var layers = Streets.styles2layers(exports.styles).concat(plus);
            if (_(editor.model.get('layers')).isEqual(layers)) return;
            help.done('style.colors');
            editor.model.set({layers:layers});
        }).debounce(500);

        // Set/get the abstract "type" represented by a combination of styles.
        exports.type = function(val) {
            if (val && !(/^(streets|satellite|terrain)$/).test(val))
                throw new Error('style: type must be one of streets, terrain, satellite');

            // A stash for this type exists. Switch to it.
            // @TODO handling other layers this way? Or do they exist in
            // some other hash/management config entirely?
            if (val && exports.stash[val]) {
                exports.styles = exports.stash[val];
            } else if (val) {
                exports.styles = exports.stash[val] = Streets.styles({
                    streets: ['base.mapbox-streets+bg-e8e0d8_landuse_water_buildings_streets'],
                    terrain: ['base.live-land-tr','base.live-landuse-tr','base.mapbox-streets+bg-e8e0d8_landuse_water_buildings_streets'],
                    satellite: ['base.live-satellite','base.mapbox-streets+streets-0.00x0.00;0.00x0.00;1.00x0.00;0x1.00']
                }[val]);
            }
            return Streets.type(exports.styles);
        };

        // Set/get the l10n option of base.mapbox-streets.
        exports.l10n = function(val) {
            if (typeof val === 'string') {
                exports.styles.l10n = val;
                help.done('style.labels');
            }
            return exports.styles.l10n || '';
        };

        // Set/get the scale option of base.mapbox-streets.
        exports.scale = function(val) {
            if (val) exports.styles.scale = val;
            return exports.styles.scale;
        };

        // Set/get the active whiz palette.
        exports.palette = function(id, skiprefresh) {
            if (!exports.styles.whiz) throw new Error('No whiz style found.');
            if (id) {
                $('#palette-' + id).addClass('active').siblings().removeClass('active');
                $('#style-tint .sliding.v')
                    .removeClass('active1 active2 active3 active4 active5 active6 active7')
                    .addClass(Streets.recipes[id].swatches ? 'active1' : 'active2');
                var palette = exports.palettes(exports.styles.whiz)[id];
                _(palette).each(function(hsl, i) {
                    if (!exports.styles[i]) return;
                    exports.styles[i].h = hsl.h;
                    exports.styles[i].s = hsl.s;
                    exports.styles[i].l = hsl.l;
                    exports.styles[i].a = hsl.a;
                    exports.styles[i].hd = hsl.hd;
                    exports.styles[i].sd = hsl.sd;
                    exports.styles[i].ld = hsl.ld;
                    exports.styles[i].on = hsl.on;
                    exports.styles[i].inv = !!hsl.inv;
                    exports.render(i, null, skiprefresh);
                });
                if (palette.swatch) $('#style-swatches-' + palette.swatch).prop('checked', true);
                exports.styles.whiz.palette = id;
            }
            return exports.styles.whiz.palette;
        };

        // Generate palette data from an HSL.
        exports.palettes = function(hsl) {
            return _(Streets.recipes).reduce(function(memo, op, id) {
                memo[id] = op.hsl(hsl, exports.type());
                return memo;
            }, {});
        };

        // Render results of alterations to form and map display.
        exports.render = function(id, skipinput, skiprefresh) {
            // Bail if requested id has no style.
            if (typeof exports.styles[id] !== 'object') return;

            var s = exports.styles[id];
            var p = $(document.getElementById('style-tint-' + id.replace('.','-')));
            var tab = $(document.getElementById('style-tab-' + id.replace('.','-')));
            $('div.color-h > a',p).css({'left':s.h*100+'%'});
            $('div.color-sl',p).css({'background-color':'#'+Streets.style2hue(s)});
            $('div.color-sl > a',p).css({'left':s.s*100+'%', 'bottom':Math.min(1, s.l / (1-(s.s*0.5)))*100+'%'});
            $('input.color-hex',p).css({'background-color':Streets.style2rgba(s)});
            tab.css({'background-color':Streets.hsl2rgba(Streets.style2swatch(s, id))});
            if (s.l > 0.5) {
                $('fieldset.hex',p).addClass('light');
                tab.addClass('light');
            } else {
                $('fieldset.hex',p).removeClass('light');
                tab.removeClass('light');
            }
            p[s.inv?'addClass':'removeClass']('inverted');
            p[s.on?'removeClass':'addClass']('disabled');
            tab[s.on?'removeClass':'addClass']('disabled');
            if (!skipinput) {
                $('input[name="hd"]', p).val(0.5 - s.hd);
                $('input[name="sd"]', p).val(0.5 - s.sd);
                $('input[name="ld"]', p).val(0.5 - s.ld);
                $('input[name="a"]', p).val(s.a);
                $('input.color-hex',p).val(Streets.style2hex(s));
            }
            if (id === 'whiz' && !skiprefresh && exports.palette()) {
                exports.palette(exports.palette());
            } else if (!skiprefresh) {
                exports.refresh();
            }
        };

        // Template and setup markup for coloring interface. Needs to be re-run
        // whenever the baselayer type is changed.
        exports.make = function() {
            $('#style-tint').html(App.template('template-style-tint')({
                type:exports.type()
            }));
            _(exports.styles).each(function(style, id) {
                exports.render(id, false, true);
            });
            if (exports.palette()) exports.palette(exports.palette(), true);
        };

        // Init sequence.
        exports.styles = Streets.styles(editor.model.get('layers'));
        exports.stash[exports.type()] = exports.styles;
        exports.make();
        $('#style-type-' + exports.type()).prop('checked', true);
        $('#style-l10n-' + exports.l10n()).prop('checked', true);
        $('#style-2x').prop('checked', exports.scale() === 2);
        return exports;
    })();

    // Markers
    var markers = (function() {
        var exports = {};
        exports.layer = null;
        exports.model = null;
        exports.editing = null;
        exports.geojson = null;
        exports.markers = {};
        exports.defaults = {
            title: '',
            description: '',
            'marker-size': 'medium',
            'marker-color': '#1087bf',
            'marker-symbol': ''
        };
        // Overrides element type created by Leaflet.
        // div allows :before/:after CSS selectors to be used with marker
        // elements when highlighting what's edited.
        // @TODO decide what to do with this...
        L.Icon.prototype._createImg = function(src, el) {
            if (!el) el = document.createElement('div');
            el.style.backgroundImage = 'url("' + src + '")';
            return el;
        };

        // Create a new marker @ ll
        exports.newmarker = function(data) {
            if (!('lng' in data)) throw new Error('No value for lng in new marker data');
            if (!('lat' in data)) throw new Error('No value for lat in new marker data');

            var feature = {
                type: 'Feature',
                properties: _({
                    id: 'marker-' + (+new Date()).toString(36),
                    title: data.title,
                    description: data.description
                }).defaults(exports.defaults),
                geometry: {
                    type: 'Point',
                    coordinates: [ data.lng, data.lat, map.getZoom() ]
                }
            };
            var marker = L.GeoJSON.geometryToLayer(feature, L.mapbox.marker.style);
            marker.feature = feature;
            exports.augment(marker);
            exports.layer.addLayer(marker);
            exports.geojson.features.push(feature);
            $('#marker-tray').append(App.template('marker-template-tray')(feature.properties));
            $('#marker-tray').sortable('destroy').sortable();
            exports.edit(feature.properties.id);
            editor.changed();

            analytics.track('Placed a Marker');
        };

        // Clear active editing state.
        exports.clear = function() {
            _(exports.markers).each(function(l, layerid) {
                l._icon.className = l._icon.className.replace(/ marker-editing/g, '');
                l.dragging.disable();
            });
            $('#marker-edit').empty();
            $('#marker-tray a').removeClass('active');
            delete exports.editing;
        };

        // Edit the given marker.
        exports.edit = function(id) {
            place.cancel(id);

            // Don't re-initialize edit interface when clicking on current marker.
            if (exports.editing && exports.editing.id === id) return;

            var f = _(exports.layer.getGeoJSON().features).find(function(f) {
                return f.properties.id === id;
            });
            exports.editing = f.properties;

            // Enable dragging only on active marker
            _(exports.markers).each(function(l, layerid) {
                if (layerid === id) {
                    l._icon.className += ' marker-editing';
                    l.dragging.enable();
                    l.openPopup();
                } else {
                    l._icon.className = l._icon.className.replace(/ marker-editing/g, '');
                    l.dragging.disable();
                    l.closePopup();
                }
            });

            $('#' + id).addClass('active').siblings().removeClass('active');
            $('#marker-edit').html(App.template('marker-template-edit')(exports.editing));

            // If current map zoom differs by > 3 zoom levels,
            // change zoom levels to the marker being edited.
            if (f.geometry.coordinates[2] &&
                Math.abs(map.getZoom() - f.geometry.coordinates[2]) > 3) {
                map.setView([f.geometry.coordinates[1], f.geometry.coordinates[0]], f.geometry.coordinates[2]);
            // Otherwise just pan to feature.
            } else {
                map.panTo([f.geometry.coordinates[1], f.geometry.coordinates[0]]);
            }
        };

        // Delete the given marker.
        exports.del = function(id) {
            if (!exports.layer) throw new Error('No layer to edit');
            if (!exports.editing) throw new Error('No marker currently being edited');
            if (exports.editing.id !== id) throw new Error('Currently edited marker does not match ID');

            exports.clear();

            $('#' + id).remove();
            $('#marker-tray').sortable('destroy').sortable();
            var f = _(exports.layer.getGeoJSON().features).find(function(f) {
                return f.properties.id === id;
            });
            var idx = exports.layer.getGeoJSON().features.indexOf(f);
            exports.layer.getGeoJSON().features.splice(idx, 1);
            exports.layer.removeLayer(exports.markers[id]);
            delete exports.markers[id];
            editor.changed();
        };

        // Save the markers.
        exports.save = function(callback) {
            if (!exports.model) return callback();
            App.save(exports.model, callback);
        };

        // Additional handlers/adjustments to standard L.Marker
        // created by mapbox MarkerLayer.
        exports.augment = function(l) {
            if (!l.feature.properties.id) return;
            exports.markers[l.feature.properties.id] = l;
            l.options.draggable = true;
            l.on('click', function(ev) {
                if (App.canedit) {
                    window.location.hash = '#markers';
                    exports.edit(ev.target.feature.properties.id);
                }
            });
            l.on('dragend', function(ev) {
                var latlng = ev.target._latlng;
                var feature = ev.target.feature;
                feature.geometry.coordinates[0] = latlng.lng;
                feature.geometry.coordinates[1] = latlng.lat;
                feature.geometry.coordinates[2] = map.getZoom();
                editor.changed();
            });
            exports.refresh(l.feature.properties.id);
        };

        // Refresh the icon, popup on a given feature.
        exports.refresh = function(id) {
            if (!exports.markers[id]) return;
            var l = exports.markers[id];
            // Refresh icon.
            l.setIcon(L.mapbox.marker.icon(l.feature.properties));
            // Set editing class + set the new default marker template.
            if (exports.editing && exports.editing.id === id) {
                l._icon.className += ' marker-editing';
                exports.defaults = _(exports.editing).reduce(function(memo, val, key) {
                    if ((/marker-(color|symbol|size)/).test(key)) memo[key] = val;
                    return memo;
                }, { title:'', description:'' });
            }
            // Refresh popup, disable fading for re-rendering.
            var fade = map.options.fadeAnimation;
            if (l._popup) map.options.fadeAnimation = false;

            var props = l.feature.properties;
            var popup = (props.title || props.description) &&
                L.mapbox.marker.createPopup(l.feature);

            if (popup) {
                l.unbindPopup();
                l.bindPopup(popup, { closeButton: false });
                l.openPopup();
            } else {
                l.closePopup();
                l.unbindPopup();
            }

            map.options.fadeAnimation = fade;
        };

        // Initialize.
        // Only fetch if tilejson _data property is set. Otherwise no-op to
        // avoid an extra request and a 404 error in the console.
        var fetch = editor.model.get('_data') ? App.fetch : function(url,cb) { return cb() };
        fetch('/api/Markers/' + editor.model.id, function(err, model) {
            if (err && err.status !== 404) return Views.modal.show('err', err);
            if (!model) {
                exports.model = new Backbone.Model({ id: App.map, features: [] });
                exports.model.url = App.api + '/api/Markers/' + App.map;
            } else {
                exports.model = model;
            }
            if (stash.markers && !_(stash.markers).isEqual(App.revless(exports.model.attributes))) {
                exports.model.set(stash.markers);
                editor.changed();
            }
            exports.geojson = exports.model.toJSON();

            var tray = _(exports.geojson.features).map(function(f) {
                return f.properties ? App.template('marker-template-tray')(f.properties) : '';
            }).join('');
            $('#marker-tray').html(tray);
            $('#marker-tray').sortable();
            $('#marker-tray').bind('sortupdate', function(ev, ui) {
                var order = _($('#marker-tray a')).pluck('id');
                exports.geojson.features.sort(function(a, b) {
                    var ai = order.indexOf(a.properties.id);
                    var bi = order.indexOf(b.properties.id);
                    return ai < bi ? -1 : ai > bi ? 1 : 0;
                });
                editor.changed();
                help.done('marker.listdrag');
            });

            exports.layer = new L.mapbox.markerLayer(exports.geojson);
            _(exports.layer._layers).each(exports.augment);
            exports.layer.addTo(map);
            // @TODO done currently to set dragging to disabled on init.
            exports.clear();
        });

        return exports;
    })();

    // Place
    var place = (function() {
        var exports = {};
        exports.layer = null;

        exports.clear = function() {
            if (exports.layer) map.removeLayer(exports.layer);
        };

        exports.cancel = function(id) {
            id = id || (markers.editing && markers.editing.id);
            if (id) markers.markers[id].openPopup();
            exports.clear();
        };

        exports.popup = function(data) {
            if (!('lng' in data)) throw new Error('No value for lng in new marker data');
            if (!('lat' in data)) throw new Error('No value for lat in new marker data');

            help.done('place');

            exports.clear();
            exports.layer = L.marker(data, {
                icon: L.divIcon({className: 'place-tmp'}),
                id: 'place-tmp'
            });
            exports.layer.bindPopup(App.template('place-template-popup')(data), {
                closeButton: false,
                minWidth: 159,
                maxWidth: 159
            });
            exports.layer.addTo(map);
            exports.layer.openPopup();
            $('#place-marker').click(function() {
                markers.newmarker(data);
                exports.clear();
                help.done('search.marker');
            });
        };

        map.on('click', function(ev) {
            var excluded = ['#project','#share'];
            if (excluded.indexOf(location.hash) === -1 && App.canedit) {
                exports.popup(ev.latlng);
            }
        });

        return exports;
    })();

    // Geocoder
    var search = (function() {
        var exports = {};
        exports.results = [];
        exports.wait = 0;
        exports.last = 0;
        // @TODO the first URL here is a stopgap for local development because
        // of CORS request issues for geocoding endpoint.
        exports.carmen = L.mapbox.geocoder({
            geocoder: window.location.href.indexOf('http://') === 0 ?
                'https://api.tiles.mapbox.com/v3/examples.map-vyofok3q/geocode/{query}.json' :
                editor.model.attributes.tiles[0].split('/v3/')[0] + '/v3/base.mapbox-streets/geocode/{query}.json'
        });
        exports.field = $('#search input');
        exports.input = $('#search input').get(0);

        // Set the map view to the currently highlighted result.
        exports.setview = function() {
            var idx = $('#search-results input:checked').val();

            // No results, bail.
            if (idx === undefined) return;

            var data = _(exports.results[idx][0]).clone();
            data.lng = data.lon;
            data.title = data.name;
            if (data.bounds) {
                map.fitBounds([[data.bounds[1],data.bounds[0]], [data.bounds[3],data.bounds[2]]]);
            } else {
                map.panTo([data.lat, data.lon]);
            }
            place.popup(data);
        };

        // Update the current selected result.
        exports.select = function(dir) {
            var $results = $('#search-results input');
            var $result = $('#search-results input:checked');
            var index = $results.index($result);
            var size = $results.size();
            if (dir !== 1 && dir !== -1) throw new Error('dir must be either -1 or 1');
            if (size <= 0) return;

            index = index < 0 ? size : index;
            index = (index + dir) % size;
            index = index < 0 ? index + size : index;

            $result.removeAttr('checked');
            $results.eq(index).prop('checked', true);
            help.done('search.scroll');
        };

        // Focus search field.
        exports.focus = function(e) {
            if (exports.field.is(':focus')) return;
            exports.input.focus();
        };

        // Retrieve a search result.
        exports.search = function(query) {
            help.done('search');

            var $results = $('#search-results');

            // This query is empty or only whitespace.
            if (/^\s*$/.test(query)) return $results.empty() && null;

            // This query is too short. Wait for more input chars.
            if (query.length < 3) return;

            var count = ++exports.wait;
            exports.carmen.query(query, function(err, data) {
                // A more recent query finished before this one. Bail.
                if (count < exports.last) return;
                exports.last = count;
                exports.results = (data && data.results) ? data.results : [];
                $results.empty();
                if (err) {
                    $results.html('<label class="center">No Results</label>');
                } else {
                    $results.html(App.template('template-search-results')(exports.results));
                }
            });
        };

        return exports;
    })();

    // Data layers.
    var layers = (function() {
        var exports = {};
        var $layers = $('#project-layers');
        var $browse = $('#project-data-browse');
        exports.rendered = false;
        exports.infos = null;
        exports.layers = null;

        exports.toggle = function(id) {
            var b = _(exports.layers).find(function(m) { return m.id === id });
            return b ? exports.remove(id) : exports.add(id);
        };

        exports.add = function(id) {
            if (!exports.infos || !exports.layers) return;
            var a = _(exports.infos).find(function(m) { return m.id === id });
            var b = _(exports.layers).find(function(m) { return m.id === id });
            if (!a || b) return;
            exports.layers.push(a);
            exports.refresh();
        };

        exports.remove = function(id) {
            if (!exports.infos || !exports.layers) return;
            exports.layers = _(exports.layers).filter(function(m) { return m.id !== id });
            exports.refresh();
        };

        exports.setview = function(id) {
            if (!exports.infos || !exports.layers) return;
            var l = _(exports.layers).find(function(m) { return m.id === id });
            if (!l || !l.get('center')) return;
            var center = l.get('center');
            map.setView([center[1], center[0]], center[2]);
        };

        exports.refresh = function() {
            if (!exports.layers) return;
            var active = _(exports.layers).pluck('id');
            // Mark active layers in data browser.
            _($('a', $browse)).each(function(el) {
                if (active.indexOf($(el).data('id')) === -1) {
                    $(el).removeClass('active');
                } else {
                    $(el).addClass('active');
                }
            });
            // Reap unused.
            $('a:not(.active)', $layers).remove();
            // Mark unused layers.
            _($('a', $layers)).each(function(el) {
                if (active.indexOf($(el).data('id')) === -1) $(el).removeClass('active');
            });
            // Add active layers.
            _(exports.layers).each(function(l) {
                if ($('a:not(.removed)[data-id="' + l.id + '"]',$layers).size()) return;
                var el = $(App.template('template-project-layer')(l));
                if (/^base\./.test(l.id)) {
                    $('div.base', $layers).prepend(el);
                } else {
                    $('div.plus', $layers).prepend(el);
                }
                el.addClass('active');
            });
            $('div.plus', $layers).sortable('destroy').sortable();
            // Redraw map.
            exports.redraw();
        };

        exports.redraw = _(function() {
            // Set model layers preserving any base.* layers which
            // is the domain of the style editor (for now).
            var base = _(editor.model.get('layers'))
                .filter(function(id) { return id.indexOf('base.') === 0 });
            var plus = _(exports.layers).chain()
                .pluck('id')
                .filter(function(id) { return id.indexOf('base.') === -1 })
                .value();
            var layers = base.concat(plus);
            if (_(editor.model.get('layers')).isEqual(layers)) return;
            editor.model.set({layers:layers});
        }).throttle(500);

        exports.render = function() {
            if (exports.rendered) return;
            if (!App.user) return;
            exports.rendered = true;
            $browse.addClass('loading');
            var urls = _(editor.model.get('layers')).map(function(id) {
                return '/api/Map/' + id.split('+')[0];
            });
            urls.unshift('/api/Map?account=' + App.user.id + '&_type=tileset&private=1');
            App.fetchall(urls, function(err, loaded) {
                if (!(loaded[0] instanceof Backbone.Collection)) return Views.modal.show('err', err);
                exports.infos = loaded[0].models;
                exports.layers = loaded.slice(1);
                $browse.removeClass('loading');
                $browse.html(App.template('template-project-data')(exports.infos));
                $('div.plus', $layers).sortable();
                $('div.plus', $layers).bind('sortupdate', function(ev, ui) {
                    var order = _($('a',$layers)).map(function(el) { return $(el).data('id') });
                    exports.layers.sort(function(a, b) {
                        var ai = order.indexOf(a.id);
                        var bi = order.indexOf(b.id);
                        return ai < bi ? 1 : ai > bi ? -1 : 0;
                    });
                    exports.redraw();
                });
                exports.refresh();
            });
        };

        return exports;
    })();

    this.map = map;
    this.help = help;
    this.style = style;
    this.markers = markers;
    this.place = place;
    this.search = search;
    this.layers = layers;

    // Attach an event handler to the map when share is activated.
    this.map.on('drag', this.setCenterOption);
    this.map.on('zoomend', this.setCenterOption);

    help.hint('Click the <code><span class="sun icon"></span></code> button to style your map.', 'style', '#app');
    help.hint('Use the color picker to generate a custom map theme.', 'style.colors', '#style');
    help.hint('Click one of the <code><span class="sun icon"></span></code> tabs to switch styling modes.', 'style.details', '#style');
    help.hint('Click the <code>Baselayer</code> tab to switch to terrain or satellite.', 'style.baselayer', '#style');
    help.hint('Click the <code>Labels</code> tab to change the language of your labels.', 'style.labels', '#style');
    help.hint('Press <kbd>esc</kbd> key or the <code><span class="close icon"></span></code> icon to return to the map.', 'esc', '#style|#markers|#search');
    help.hint('Click on the map to place a marker.', 'place', '#app');
    help.hint('Add a title and description to your marker to create a tooltip.', 'marker.popup', '#markers');
    help.hint('Customize your marker\'s size and color under the <code>style</code> tab.', 'marker.style', '#markers');
    help.hint('Drag list items to re-order your markers.', 'marker.listdrag', '#markers');
    help.hint('Start typing to search.', 'search', '#app');
    help.hint('Press the <kbd>up</kbd> and <kbd>down</kbd> keys to navigate search results.', 'search.scroll', '#search');
    help.hint('Click the map popup to turn your search result into a marker.', 'search.marker', '#search');
    // help.hint('Save to share your map.', 'project', '#app');
    help.hint('Click the <code><span class="library icon"></span></code> icon to add layers to your map.', 'project.data', '#project');
    // help.hint('If your map is saved, publicize it by clicking the <code><span class="share icon"></span></code> icon.', 'share', '#app');
    help.hint('Are you a coder? Click the <code>developers</code> tab to get started.', 'share.developers', '#share');
    help.hint('Click the <a class="mapbox icon"></a> logo to move in and out of the editor.', 'escape', '#app');

    return this;
};

$(function load() {
    if (Views.editor) return;
    if (!window.location.hash && !$('#splash').size()) window.location.hash = '#app';

    Views.editor = true;
    (function getdata(opts) {
        if (!opts.model) return App.fetch('/api/Map/' + App.map + App.newmap, function(err, model) {
            if (!err && model.get('_type') !== 'composite') {
                err = new Error('Cannot edit project ' + model.escape('id'));
            }
            if (err) {
                App.storage('editor.map', null);
                return Views.modal.show('err', err);
            }
            opts.model = model;
            getdata(opts);
        });
        if (!App.param('layers') && !opts.model.get('_rev') && !opts.local) return App.local(function(err, local) {
            opts.local = local || opts.model.get('center');
            opts.model.set({center:opts.local});
            getdata(opts);
        });
        opts.el = $('body');
        Views.editor = new Editor(opts);
    })({});
});

})();
