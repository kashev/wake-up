/*
  Kashev Dalmia
  kashev.dalmia@gmail.com

  Everyone Needs to Wake Up
  A Project for ARTD 313 @ UIUC, Sp 2014
  proj1b - dalmia3

  Gruntfile.js
*/

/* GRUNT CONFIGURATION */
module.exports = function(grunt) {
  grunt.initConfig({
    // JS Hint Options
    jshint: {                                  // task
      src: ['Gruntfile.js', 'src/js/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          require: true,
          define: true,
          requirejs: true,
          describe: true,
          expect: true,
          it: true,
          module : true
        }
      }
    },
    // Sass options
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'src/css/main.css': 'src/css/main.scss'        // 'destination': 'source'
        }
      }
    }
  });
  /* Load Tasks */
  // Load JSHint task
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Load Sass Compilation task
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task.
  grunt.registerTask('default', ['jshint', 'sass']);


};