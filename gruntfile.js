module.exports = function(grunt) {

  'use strict';

  var config;

  config = {

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/images/',
          src: ['*.{png,jpg,gif}'],
          dest: 'assets/images/optimized/'
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/css',
          ext: '.min.css'
        }]
      }
    },
    uglify: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'assets/js',
          src: '**/*.js',
          dest: 'assets/js',
          ext: '.min.js'
        }]
      }
    },
    bower: {
      dev: {
        dest: 'assets/',
        js_dest: 'assets/js/',
        css_dest: 'assets/css/',
        fonts_dest: 'assets/fonts/', //covers font types ['svg','eot', 'ttf', 'woff', 'woff2', 'otf'] 
        images_dest: 'assets/images/', //covers image types ['jpeg', 'jpg', 'gif', 'png'] 
        options: {
          expand: true
        }
      }
    }
  }

  //Init
  grunt.initConfig(config);

  //Load Tasks
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower');

  //Register Tasks
  grunt.registerTask('default', []);
  grunt.registerTask('run-imagemin', ['imagemin']);
  grunt.registerTask('run-cssmin', ['cssmin']);
  grunt.registerTask('run-jsmin', ['uglify']);
  grunt.registerTask('run-bower-copy', ['bower']);

};