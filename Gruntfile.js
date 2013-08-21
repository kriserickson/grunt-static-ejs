/*
 * static_ejs
 * https://github.com/kriserickson/grunt-static-ejs
 *
 * Copyright (c) 2013 Kris Erickson
 * Licensed under the MIT license.
 */


module.exports = function (grunt) {

    'use strict';

    grunt.loadTasks('tasks');


    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');


    grunt.initConfig({

        clean: {
            test: ['test/results/*']
        },
        static_ejs: {
            test_simple : {
                src: 'test/source/test_simple.ejs',
                dest: 'test/results/test_simple.html',
                options: { }
            },
            test_different_open_close: {
                src: 'test/source/test_different_open_close.ejs',
                dest: 'test/results/test_different_open_close.html',
                options: { development: false, open: '[%', close: '%]', content: 'Test Content', date: '2013-08-21' }
            }
        },

        nodeunit: {
            tests: ['test/static_ejs_test.js']
        }

    });



    // test
    grunt.registerTask('test', [
        'clean:test',
        'static_ejs:test_simple',
        'static_ejs:test_different_open_close',
        'nodeunit'
    ]);

};
