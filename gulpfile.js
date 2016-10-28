// gulp
var gulp = require('gulp');

// plugins
//Reload page automatic
var connect = require('gulp-connect');
//JSHint, a JavaScript Code Quality Tool
var jshint = require('gulp-jshint');
//Minify JavaScript.
var uglify = require('gulp-uglify');
//Minify CSS with.
var minifyCSS = require('gulp-clean-css');
//Apagar pasta deploy
var clean = require('gulp-clean');
//Run a series of dependent gulp tasks in order
var runSequence = require('run-sequence');
//Vulcanize e crisper faz o capeta!
var vulcanize = require('gulp-vulcanize');
var crisper = require('gulp-crisper');


//===========DEV==============/
gulp.task('html', function() {
    gulp.src(['app/*.html', 'app/**/*.html','app/**/*.js','app/**/*.css'])
        .pipe(connect.reload());
});

gulp.task('watch', function() {
    gulp.watch(['app/*.html'], ['html']);
});

//Inicia a aplicação e aguarda modificações
gulp.task('serve', ['watch'], function() {
    connect.server({
        root: 'app',
        host: '0.0.0.0',
        port: 3000,
        livereload:{
            port:9005
        }
    });
});

// Comando para start da aplicacao = gulp or gulp serve
gulp.task('default', ['serve']);
//===============================/

//===========DEPLOY==============/

// tasks
gulp.task('lint', function() {
    gulp.src(['app/**/*.js', '!app/bower_components/**'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('clean', function() {
    gulp.src('dist/*')
        .pipe(clean({ force: true }));
});

gulp.task('minify-css', function() {
    var opts = { comments: false, spare: true };
    gulp.src(['app/**/*.css', '!./app/bower_components/**'])
        .pipe(minifyCSS(opts))
        .pipe(gulp.dest('./dist/'))
});

// Optimize images
gulp.task('images', function() {
    return gulp.src('app/assets/images/**/*')
        .pipe($.imagemin({
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest('dist/assets/images'))
        .pipe($.size({ title: 'Copy optimized images to dist/assets/images dir:' }));
});

gulp.task('minify-js', function() {
    gulp.src(['app/*.js', 'app/**/*.js', '!./app/bower_components/**'])
        .pipe(uglify({
            // inSourceMap:
            // outSourceMap: "app.js.map"
        }))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-html-files', function() {
    gulp.src('app/**/*.html')
        .pipe(vulcanize({
            abspath: '',
            excludes: [],
            stripExcludes: false,
            inlineScripts: false
        }))
        .pipe(crisper({
            scriptInHead: false, // true is default
            onlySplit: false
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('copy-bower-components', function() {
    gulp.src(['app/bower_components/**/*.{css,html,js}',
            '!app/bower_components/**/index.html',
            '!app/bower_components/**/{demo,test}/**/*'
        ])
        .pipe(gulp.dest('./dist/bower_components'));
});

gulp.task('connectDist', function() {
    connect.server({
        root: 'dist/',
        port: 9999
    });
});

gulp.task('build', function() {
    runSequence(
        ['clean'], ['lint', 'minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'connectDist']
    );
});

gulp.task("vulcanize", function() {
    return gulp.src('app/**/*.html')
        .pipe(vulcanize({
            inlineScripts: true,
            stripComments: true
        }))
        .pipe(crisper())
        .pipe(gulp.dest("dist"));
});

gulp.task('vulcano', function() {
    runSequence(
        ['clean'], ['minify-css', 'minify-js',  'vulcanize', 'connectDist']
    );
});

//===========DEPLOY END==============/