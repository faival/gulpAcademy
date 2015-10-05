var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;

// consts
const PLUGIN_NAME = 'gulp-prefix-timestamp';

function prefixStream(timestampText) {
  var stream = through();
  stream.write(timestampText);
  return stream;
}

// plugin level function (dealing with files)
function gulpPrefixTimestamp(timestampText) {

  if (!timestampText) {
    throw new PluginError(PLUGIN_NAME, 'Missing timestamp text!');
  }

  prefixText = new Buffer(timestampText); // allocate ahead of time

  // creating a stream through which each file will pass
  var stream = through.obj(function(file, enc, cb) {

    gutil.log('Appending timestamp and author tag to: ' + gutil.colors.green(file.path));

    if (file.isBuffer()) {
      this.emit('error', new PluginError(PLUGIN_NAME, 'Buffers not supported!'));
      return cb();
    }

    if (file.isStream()) {

      // define the streamer that will transform the content
      var streamer = prefixStream(prefixText);

      // catch errors from the streamer and emit a gulp plugin error
      streamer.on('error', this.emit.bind(this, 'error'));
      // start the transformation
      file.contents = file.contents.pipe(streamer);
    }

    // make sure the file goes through the next gulp plugin
    this.push(file);
    // tell the stream engine that we are done with this file
    cb();
  });

  // returning the file stream
  return stream;
}

// exporting the plugin main function
module.exports = gulpPrefixTimestamp;