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
                dest: 'test//results/test_simple.html',
                options: { }
            },
            debug: {
                src: 'RecipeFolder/app/mobileApp.ejs',
                dest: 'cordova/www/index.html',
                options: { development: true, open: '[%', close: '%]', platform: grunt.option('platform'), isPaid: grunt.option('is-paid') }
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
        'nodeunit'
    ]);

};
