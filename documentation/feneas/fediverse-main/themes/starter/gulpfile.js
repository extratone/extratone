'use strict';

  const autoprefixer   = require('../../node_modules/gulp-autoprefixer'),
        babel          = require('../../node_modules/gulp-babel'),
        concat         = require('../../node_modules/gulp-concat'),
        cleancss       = require('../../node_modules/gulp-clean-css'),
        del            = require('../../node_modules/del'),
        eslint         = require('../../node_modules/gulp-eslint'),
        gulp           = require('../../node_modules/gulp'),
        notify         = require('../../node_modules/gulp-notify'),
        plumber        = require('../../node_modules/gulp-plumber'),
        rename         = require('../../node_modules/gulp-rename'),
        sass           = require('../../node_modules/gulp-sass'),
        sourcemaps     = require('../../node_modules/gulp-sourcemaps'),
        stylelint      = require('../../node_modules/gulp-stylelint'),
        uglify         = require('../../node_modules/gulp-uglify'),
        webpack        = require('../../node_modules/webpack-stream');

  function customPlumber (errTitle) {
    return plumber({
      errorHandler: notify.onError({
        title: errTitle || "Ouch! Error running Gulp",
        message: "Error: <%= error.message %>"
      })
    });
  }

   // Styles
  gulp.task('styles:lint', function() {
    return gulp.src('source/assets/scss/**/*.scss')
               .pipe(customPlumber('Ouch! Error Running StyleLint'))
               .pipe(stylelint({
                  failAfterError: false,
                  reporters: [
                    {formatter: 'verbose', console: true}
                  ]
                }));
  });

  gulp.task('styles:serve', function() {
    return gulp.src('source/assets/scss/main.scss')
               .pipe(sourcemaps.init())
               .pipe(customPlumber('Ouch! Error Running Sass'))
               .pipe(sass({errLogToConsole: true}))
               .pipe(autoprefixer(['last 3 versions', 'IE 10', 'iOS 9', 'Android 4']))
               .pipe(rename({ suffix: '.min' })) // for using in dev mode
               .pipe(sourcemaps.write('./'))
               .pipe(gulp.dest('source/css'));
  });

  gulp.task('styles:build', function() {
    return gulp.src('source/assets/scss/main.scss')
               .pipe(customPlumber('Ouch! Error Running Sass'))
               .pipe(sass({errLogToConsole: true}))
               .pipe(autoprefixer(['last 3 versions', 'IE 10', 'iOS 9', 'Android 4']))
               .pipe(rename({ suffix: '.min' }))
               .pipe(cleancss({level: 2}))
               .pipe(gulp.dest('source/css/'))
  });

  gulp.task('webpack', function() {
    return gulp.src('source/assets/scripts/crystalball.js')
               .pipe(webpack( require('./webpack.config.js') ))
               .pipe(gulp.dest('source/js/'));
  });

  // Scripts
  gulp.task('scripts:serve', function() {
    return gulp.src(['source/assets/scripts/*.js', '!source/assets/scripts/*ball.js'])
               .pipe(sourcemaps.init())
               .pipe(babel({
                  presets: ["@babel/preset-env"]
                }))
               .pipe(customPlumber('Ouch! Error Running Scripts'))
               .pipe(eslint())
               .pipe(eslint.format())
               //.pipe(concat('main.js'))
               .pipe(rename({ suffix: '.min' }))
               .pipe(sourcemaps.write('./'))
               .pipe(gulp.dest('source/js/'));
  });

  gulp.task('scripts:build', function() {
    return gulp.src(['source/assets/scripts/*.js', '!source/assets/scripts/*ball.js'])
               .pipe(babel({
                  presets: ["@babel/preset-env"]
                }))
               .pipe(customPlumber('Ouch! Error Running Scripts'))
               //.pipe(concat('main.js'))
               .pipe(rename({suffix: '.min'}) )
               .pipe(uglify())
               .pipe(gulp.dest('source/js/'))
  });

  // Clean
  gulp.task('clean', function () {
    return del(['source/js/*', 'source/css/*']);
  });

  // Watch
  gulp.task('watch', function() {
    gulp.watch('./source/assets/scss/**/*.scss', gulp.series('styles:serve'));
    gulp.watch('./source/assets/scripts/**/*.js', gulp.series('scripts:serve'));
  });

  // Development Mode
  gulp.task('default', gulp.series('styles:lint', 'styles:serve', 'webpack', 'scripts:serve', 'watch'));

  // Production Mode
  gulp.task('build', gulp.series('clean', gulp.parallel('styles:build', 'webpack', 'scripts:build')));
