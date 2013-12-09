class Map
  constructor: ->
    @mapObj = null
    @canvasArray = {}
    @initMap()
    @initCanvas()
    @bindMapEvents()

  maxx = (a, b)->
    if a > b then a else b

  minn = (a, b)->
    if a < b then a else b

  insidePolygon = (d, x, y)->
    p1x = d[0]
    p1y = d[1]
    N = d.length / 2
    counter = 0
    for i in [0..N]
      p2x = d[2 * (i % N)]
      p2y = d[2 * (i % N) + 1]
      if y > minn p1y, p2y
        if y <= maxx p1y, p2y
          if x <= maxx p1x, p2x
            if p1y != p2y
              xinters = (y - p1y) * (p2x - p1x) / (p2y - p1y) + p1x
              if p1x is p2x or x <= xinters
                counter++
      p1x = p2x
      p1y = p2y

    if counter % 2 is 0
      0
    else
      1

  initMap: ->
    @mapObj = new AMap.Map 'map',
      level: 6
      center: new AMap.LngLat 46.296387, -19.497664

  initCanvas: ->
    @canvasObj = new AMap.TileLayer.Canvas
      unloadInvisibleTiles: true
      zIndex: 15

    @canvasObj.on 'canvastileload', (canvas)=>
      @canvasArray["#{canvas.x}:#{canvas.y}"] = canvas.tile
      @getCanvasData canvas.x, canvas.y

    @canvasObj.setMap @mapObj

  getCanvasData: (x, y)->
    z = @mapObj.getZoom()
    el = @canvasArray["#{x}:#{y}"] or null

    return if not el

    $.getJSON "http://www.giscloud.com/t/1375444038/map7022/layer28098/#{z}/#{x}/#{y}.json", (obj)=>
      if obj.geom
        el._geom = obj.geom
      if obj.tile and obj.tile.pixels
        el._pixels = obj.tile._pixels

      @drawCanvas el

  drawCanvas: (el)->
    if el._pixels
      @drawPixels el
    if el._geom
      @drawGeom el

  drawPixels: (el)->
    return if not el._pixels
    px = el._pixels

    tmpCanvas = document.createElement 'canvas'
    tmpCanvas.width = 256
    tmpCanvas.height = 256

    ctx = tmpCanvas.getContext '2d'
    imgd = ctx.createImageData 256, 256
    pix = imgd.data

    slen = px.length
    c = 0
    r = g = b = k = 0

    for i in [1...slen]
      if px[i] < 0
        k = px[i]
        if px[i + 1] is 0
          i++
          r = px[++i]
          g = px[++i]
          b = px[++i]
        while k++
          pix[c * 4] = r
          pix[c * 4 + 1] = g
          pix[c * 4 + 2] = b
          pix[c * 4 + 3] = 255
          c++
      else
        c += px[i]

    ctx = el.getContext '2d'
    ctx.putImageData imgd, 0, 0

  drawGeom: (el)->
    if not el or not el._geom
      return

    geom = el._geom
    ctx = el.getContext '2d'
    len = geom.length

    for i in [(len - 1)..0]
      object = geom[i]
      sindex = object.s
      if sindex isnt -1
        s = styles["s#{sindex}"]
      object.curs = s
      @drawCanvasPolygon el, object, s, sindex
    @finishPolygon el

  drawCanvasPolygon: (el, object, s, sindex)->
    ctx = el.getContext '2d'
    d = object.p

    if el.last_s and el.last_sindex isnt sindex
      @finishPolygon el

    if not el._path
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.beginPath()
      el._path = 1
      el.last_s = s
      el.last_sindex = sindex

    len = d.length
    ctx.moveTo d[0], d[1]

    for j in [2...len] by 2
      ctx.lineTo d[j], d[j + 1]

  finishPolygon: (el)->
    s = el.last_s
    ctx = el.getContext '2d'

    if s.fillColor
      ctx.fillStyle = s.fillColor
      ctx.fill()

    if s.strokeColor and s.lineWidth > 0
      ctx.lineWidth = s.lineWidth
      ctx.strokeStyle = s.strokeColor
      ctx.stroke()

    el.last_s = null
    el.last_sindex = null
    el._path = 0

  bindMapEvents: ->
    z = @mapObj.getZoom()

    AMap.event.addListener @mapObj, 'mousemove', (e)=>
      pixel = @mapObj.lnglatToPixel e.lnglat, z
      layerX = Math.floor pixel.x / 256
      layerY = Math.floor pixel.y / 256
      el = @canvasArray["#{layerX}:#{layerY}"]

      if not el or not el._geom
        return

      x = pixel.x % 256
      y = pixel.y % 256
      geom = el._geom
      found = false

      for i in [0...geom.length]
        if insidePolygon geom[i].p, x, y
          found = true
          @lastHover = geom[i].c
          break
        else
          @lastHover = ''

      @clearHover()

      if found
        for key, canvas of @canvasArray
          @drawUseModifier canvas

  clearHover: ->
    for key, el of @canvasArray
      if el._hoverElement isnt @lastHover and el._modified and el._origin
        ctx = el.getContext '2d'
        ctx.drawImage el._origin, 0, 0, 256, 256
        el._modified = false
        el.style.cursor = 'default'

  drawUseModifier: (el)->
    return if not el._geom

    geom = el._geom

    for i in [0...geom.length]
      if geom[i].c is @lastHover
        el._hoverElement = @lastHover
        if not el._origin
          el._origin = document.createElement 'canvas'
          el._origin.width = 256
          el._origin.height = 256
          ctx = el._origin.getContext '2d'
          ctx.drawImage el, 0, 0, 256, 256

        s =
          fillColor: '#fff'
          strokeColor: '#000'
          lineWidth: 1

        el.style.cursor = 'pointer'
        el._modified = true
        @drawCanvasPolygon el, geom[i], s, geom[i].s
        @finishPolygon el

new Map