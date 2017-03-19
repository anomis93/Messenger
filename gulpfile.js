
// declarations, dependencies
// ----------------------------------------------------------------------------
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var babelify = require('babelify');
var notifier = require('node-notifier');
var watchify = require('watchify');

// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
var dependencies = [
	'react',
  	'react-dom'
];

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('scripts', function () {
    bundleApp(true);
});

gulp.task('deploy', function (){
	bundleApp(true);
});

gulp.task('watch', function () {
	gulp.watch([
    './app/controller/*.js', './app/components/*.js'
  ], ['scripts']);
});


var notify = function(title, message) {
  notifier.notify({
    title: title,
    message: message
  });
  gutil.log(title + ': ' + message);
};

// When running 'gulp' on the terminal this task will fire.
// It will start watching for changes in every .js file.
// If there's a change, the task 'scripts' defined above will fire.
gulp.task('default', ['scripts','watch']);

var reactFiles = {
  path: [
    {
      from: ['app/components/Header.js'],
      to: 'Header.js'
    },
    {
      from: ['app/components/Home.js'],
      to: 'Home.js'
    },
		{
      from: ['app/controller/login-render.js'],
      to: 'login.js'
    }
  ],
  watchPath: ['web/controller/*.js']
};

// Private Functions
// ----------------------------------------------------------------------------
function bundleApp(isProduction) {
	// Browserify will bundle all our js files together in to one and will let
	// us use modules in the front end.
  var finished = 0;
  reactFiles.path.map(function(reactModuleEntry){
    var appBundler = browserify(reactModuleEntry.from)
    .transform(babelify, { presets: ['es2015', 'react'] })
    .bundle();

    appBundler.pipe(source(reactModuleEntry.to))
    .pipe(gulp.dest('./web/js/dist'))
    .on('finish', function() {
            finished++;
            if (finished === (reactFiles.path.length - 1)) {
              notify('Reactify', 'build: done')
              //done();
            }
          });
  });

}
