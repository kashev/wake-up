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
  
  var css_files = {'deploy/css/main.css' : 'src/css/main.scss'};
  grunt.initConfig({
    // JS Hint Options
    jshint: {                                  // task
      src: ['Gruntfile.js', 'src/js/**/*.js'],
      options: {
        curly : true,
        eqeqeq : true,
        immed : true,
        latedef : true,
        newcap : true,
        noarg : true,
        sub : true,
        undef : true,
        boss : true,
        eqnull : true,
        browser : true,
        globals : {
          require : true,
          define : true,
          requirejs : true,
          describe : true,
          expect : true,
          it : true,
          module  : true
        }
      }
    },
    // Sass options
    sass: {                              // Task
      dev : {                            // Target
        options : {                      // Target options
          style : 'expanded',
          trace : true,
          unixNewlines : true
        },
        files : css_files
      },
      dist : {
        options : {
          style : 'compressed',
          trace : true,
          unixNewlines : true
        },
        files : css_files
      }
    }
  });
  /* Load Tasks */
  // Load JSHint task
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Load Sass Compilation task
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task.
  grunt.registerTask('default', ['jshint', 'sass:dev']);
  grunt.registerTask('dist',    ['jshint', 'sass:dist']);

};