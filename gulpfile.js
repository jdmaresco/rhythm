var gulp = require('gulp');

var bowerFiles = require('main-bower-files'),
    inject = require('gulp-inject'),
    sass = require('gulp-sass'),
    es = require('event-stream'),
    notify = require('gulp-notify');

var config = {
  sassDir: './scss',
  bowerDir: './bower_components' 
}

gulp.task('js', function() {
  var jsFiles = gulp.src('./js/*.js', { read: false });
  var bowerJSFiles = gulp.src(bowerFiles('.js'), { read: false });

  gulp.src('./index.html')
    .pipe(
      inject(bowerJSFiles, {
        addRootSlash: false
      }),
      { name: 'bower' }
    )
    .pipe(inject(jsFiles, {
      addRootSlash: false
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('css', function() {
  var cssFiles = gulp.src('./css/*.css');
  var bowerCSSFiles = gulp.src(bowerFiles('.css'), { read: false });

  gulp.src('./index.html')
    .pipe(inject(bowerCSSFiles),
    { name:'bower' }
  )
  .pipe(inject(cssFiles, {
    addRootSlash: false
  }))
  .pipe(gulp.dest('.'));
});

gulp.task('sass', function() { 
  return gulp.src(config.sassDir + '/*.scss')
  .pipe(sass() 
  .on("error", notify.onError(function (error) {
    return "Error: " + error.message;
  }))) 
  .pipe(gulp.dest('./css')); 
});

gulp.task('default', function() {
  var sassWatcher = gulp.watch('scss/**/*.scss', ['sass']);
  sassWatcher.on('change', function(event) {
    console.log('Sass file ' + event.path + ' was ' + event.type + ', running tasks...');
  });

  var jsWatcher = gulp.watch('js/**/*.js', ['js']);
  jsWatcher.on('change', function(event) {
    console.log('JS file ' + event.path + ' was ' + event.type + ', running tasks...');
  });

  var cssWatcher = gulp.watch('css/**/*.css', ['css']);
  cssWatcher.on('change', function(event) {
    console.log('CSS file ' + event.path + ' was ' + event.type + ', running tasks...');
  });
})
