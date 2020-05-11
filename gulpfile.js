const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");

// CSS processors
const autoprefixer = require('autoprefixer');
const discard = require('postcss-discard-comments');
const mqpacker = require('css-mqpacker');
const nano = require('cssnano');

// JS processors
const uglify = require('gulp-uglify-es').default;

// CSS tasks
gulp.task('css', () => {
    const processors = [
        autoprefixer,
        discard({ removeAll: true }),
        mqpacker,
        nano({ preset: 'default' })
    ];

    return gulp.src('./src/css/*.sass')
        .pipe(sass())                           // Compile SASS
        .pipe(gulp.dest('./dist/css')) // Output the raw CSS
        .pipe(postcss(processors))              // Postprocess it
        .pipe(rename({ suffix: '.min' }))       // Add .min suffix
        .pipe(gulp.dest('./dist/css')) // Output minified CSS
});

gulp.task('watch:css', () => gulp.watch('**/*.sass', gulp.series('css')));

// JS tasks
gulp.task('js', () => {
    return gulp.src(['./src/js/*.js', '!./**/*.min.js'])
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourcemaps.init())
        .pipe(uglify({mangle: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('watch:js', () => gulp.watch(['./src/js/**/*.js', '!./**/*.min.js'], gulp.series('js')));


// All tasks
gulp.task('all', gulp.parallel(['css', 'js']));
gulp.task('watch:all', gulp.parallel(['watch:css', 'watch:js']));
