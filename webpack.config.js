// webpack.config.js

var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  plugins: [
    new LiveReloadPlugin({
      //  protocol - (Default: protocol of the page, either http or https) Protocol for livereload <script> src attribute value
      port: 35729 // The desired port for the livereload server
      hostname:'localhost',// - (Default: hostname of the page, like localhost or 10.0.2.2) The desired hostname for the appended <script> (if present) to point to
      appendScriptTag :false,//(Default: false) Append livereload <script> automatically to <head>.
      ignore :null,// (Default: null) RegExp of files to ignore. Null value means ignore nothing.
      delay :0,/// (Default: 0) amount of milliseconds by which to delay the live reload (in case build takes longer)

    })
  ]
}
