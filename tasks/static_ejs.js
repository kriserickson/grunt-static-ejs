/*
 * grunt-static-ejs
 */

module.exports = function (grunt) {
    'use strict';



    // Please see the grunt documentation for more information regarding task and
    // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

    // ==========================================================================
    // TASKS
    // ==========================================================================

    grunt.registerMultiTask('static_ejs', 'static_ejs', function () {
        if (!this.data) {
            return false;
        }

        if (Object.prototype.toString.call(this.data) === '[object Array]') {
            for (var i = 0; i < this.data.length; i++) {
                staticEjs(this.data[i]); 
            }
        } else if (typeof this.data === 'object' && this.data.src && this.data.dest) {
            staticEjs(this.data);
        } else {
            grunt.log.writeln("ejs accepts multiple targets");
            grunt.log.writeln("    ejs : {");
            grunt.log.writeln("        src :  'path/to/src',");
            grunt.log.writeln("        dest : 'path/to/dest',");
            grunt.log.writeln("        options : {}");
            grunt.log.writeln("    }");
        }
        return true;
    });

    function staticEjs(data) {

        if (typeof data.src !== 'string') {
            grunt.log.writeln('WARN: src must be a string');
            return;
        }
        if (typeof data.dest !== 'string') {
            grunt.log.writeln('WARN: dest must be a string');
            return;
        }

        var fs = require('fs'),
            path = require('path'),
            ejs = require('ejs'),
            src = path.resolve(data.src),
            dest = path.resolve(data.dest),
            options = data.options || {},
            done = grunt.task.current.async();

        options['filename'] = data.src;

        fs.readFile(src, 'utf-8', function (err, text) {
            if (err) {
                grunt.log.writeln('WARN: error reading ' + data.src);
                done(false);
            } else {
                var result = ejs.render(text, options);
                if (result) {
                    fs.writeFile(dest, result, function (err) {
                        if (err) {
                            grunt.log.writeln('WARN: saving to ' + data.dest);
                            done(false);
                        } else {
                            done(true);
                        }
                    });
                } else {
                    grunt.log.writeln('WARN: error transforming ' + data.src);
                    done(false);
                }
            }

        });


    }

};
