module.exports = ->

  # init the config
  @initConfig

    # pkg info
    pkg: @file.readJSON 'package.json'

    # coffeelint
    coffeelint:
      options:
        max_line_length:
          level: 'ignore'
      main:
        files:
          src: ['src/**/*.coffee']

    # compile coffee to js files
    coffee:
      main:
        options:
          join: true # first concat all files into one, then compile that file to .js
          separator: '\n\n'
        files:
          'js/main.js': ['src/style.coffee', 'src/main.coffee']

    # watch all coffee files change
    watch:
      main:
        files: ['src/**/*.coffee']
        tasks: ['coffeelint', 'coffee']

  @loadNpmTasks 'grunt-contrib-coffee'
  @loadNpmTasks 'grunt-contrib-watch'
  @loadNpmTasks 'grunt-coffeelint'

  @registerTask 'default', ['coffeelint', 'coffee']
  @registerTask 'dev', ['coffeelint', 'coffee', 'watch']
