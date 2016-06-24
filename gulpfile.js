/**
 * 
 * @type Module gulp|Module gulp
 * 
 * 
 * gulp dev --production
 * gulp release --production
 * will contingently minify js, no flag leaves js assembled.
 * 
 */


var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var uglifycss = require('gulp-uglifycss');
var del = require('del');
var reactify = require('reactify');
var browserify = require('browserify');
var watch = require('gulp-watch');
var tap = require('gulp-tap');
var gutil = require('gulp-util');
var server = require('gulp-server-livereload');
var livereload = require('gulp-livereload');
var gulpsync = require('gulp-sync')(gulp);
var gulpif = require("gulp-if");
var argv = require('yargs').argv;
var rename = require("gulp-rename");
var envify = require('envify');

 
 var notify = require("./build_utils/build_utils").notify;
 
 
 
var targetLocation = './target/'
if (argv.production)
{

    targetLocation = './public_html/'
}

console.log("compiling to '"+targetLocation+"'")


/* livereload loads this page you only get one  
 * 
 * the chrome livereload plugin needs to be installed
 * 
 */
var pageURL = 'http://localhost:8080';

var SASS_FILES = './sass/**/*.scss';
var WATCH_JS = ['./src/**/*.js','./src/**/*.jsx'];
var MAIN_HTML_FILE = ['./src/html/index.html'];

function Bundle() {

    var envType = 'development';
    var debugType = true;
    if (argv.production)
    {
        envType = 'production';
        debugType = false;
    }
    console.log("envType "+envType);
    
    var Bundler = browserify({
        entries: './src/index.js',
        transform: ['reactify',["envify",{NODE_ENV: envType,'global': true, '_': 'purge', }]],
        extensions: ['.js'],
        debug: debugType,
        cache: {},
        packageCache: {},
        fullPaths: true
    });  
    return Bundler
            .bundle()
            .on('error', notify);
}

gulp.task('copy-html', function () {


    // base allows to copy the folders above the file
    // return gulp.src(MAIN_HTML_FILE,{'cwd': './src/html','base':'./..'} )
    return gulp.src(MAIN_HTML_FILE).pipe(gulp.dest(targetLocation))
            .on('finish', function ( ) {
                gutil.log("processing change in html");
                livereload.reload(pageURL);
               // cb();
            });
 

});

gulp.task('clean', function (  ) {

    del(['target','public_html']);

});

gulp.task('build', function () {
    Bundle()
            .pipe(source('main.js'))
            .pipe(gulpif(argv.production, streamify(uglify())))
       //     .pipe(gulpif(argv.production, rename({suffix: '.min'})))
            .pipe(gulp.dest(targetLocation))
            .on('finish', function ( ) {
                gutil.log("build bundle end");
                 livereload.reload(pageURL);
            });
    ;
});
var sassProcess =
        function () {

            return gulp.src(SASS_FILES)
                    .pipe(sass().on('error', sass.logError))
                    .pipe(concat('style.css'))
                  //  .pipe(uglifycss())
                    .pipe(gulp.dest(targetLocation));
        };

gulp.task('sass', function () {
    sassProcess();

});

gulp.task('copy-assets', function () {
    
      gulp.src(['./src/html/css/**/*'] )
              .pipe(gulp.dest(targetLocation+'/css'));

            
 
    
    
});


gulp.task('watch', function () {

    watch(SASS_FILES, function (events, done) {

        sassProcess()
                .on('finish', function ( ) {
                    gutil.log("processing change in css");
                    livereload.reload(pageURL);
                });

    });

    watch(WATCH_JS, function (events, done) {

        gulp.start('build');
    });

    watch(MAIN_HTML_FILE, function (events, done) {
        gutil.log("starting html change");
        gulp.start('copy-html');
    });

});

gulp.task('serve', function (done) {
    livereload.listen();
    gulp.src('target')
            .pipe(server({
                livereload: {
                    enable: true
                },
                host: '127.0.0.1',
                port: 8080,
                defaultFile: 'index.html',
                directoryListing: false,
                open: true
            }));
});
gulp.task('release', gulpsync.sync(['clean','build', 'copy-assets',  'copy-html','sass']));
gulp.task('dev', gulpsync.sync(['clean', 'build', 'sass', 'copy-assets',  'copy-html', 'watch', 'serve']));