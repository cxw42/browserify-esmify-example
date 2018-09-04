var gulp = require("gulp"),
    browserify = require("browserify"),
    source = require("vinyl-source-stream"),
    esmify = require('esmify')
;

gulp.task('default',['build']);

gulp.task("build", function(){

    return browserify({
        entries: ["./main.js"],
        plugin: [ esmify ],         // support ES6 import syntax
        paths: [ './node_modules', './lib' ],
            // paths syntax thanks to https://github.com/stample/gulp-browserify-react-phonegap-starter/blob/master/gulp/tasks/browserify.js
    })
    .bundle()
    .pipe(source("main-packed.js"))     // give the bundle a name
    .pipe(gulp.dest('build'));          // write it to ./build
});
