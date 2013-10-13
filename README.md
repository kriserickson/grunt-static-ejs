-static-ejs
================

Grunt Static EJS is designed to convert single static ejs files.

usage:

    static_ejs: {
        test_simple : {
            src: 'test/source/test_simple.ejs',
            dest: 'test//results/test_simple.html',
            options: { }
        }
    }

to convert multiple files

     static_ejs: {
        test_simple : [{
            src: 'test/source/test_simple.ejs',
            dest: 'test//results/test_simple.html',
            options: { }
        }, {
  			src: 'test/source/test_simple2.ejs',
            dest: 'test//results/test_simple2.html',
            options: { content: 'This is content' }
        }]
    }
