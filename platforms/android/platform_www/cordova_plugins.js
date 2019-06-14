cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.rjfun.cordova.httpd.CorHttpd",
      "file": "plugins/com.rjfun.cordova.httpd/www/CorHttpd.js",
      "pluginId": "com.rjfun.cordova.httpd",
      "clobbers": [
        "cordova.plugins.CorHttpd"
      ]
    },
    {
      "id": "cordova-plugin-webserver.webserver",
      "file": "plugins/cordova-plugin-webserver/webserver.js",
      "pluginId": "cordova-plugin-webserver",
      "clobbers": [
        "webserver"
      ]
    }
  ];
  module.exports.metadata = {
    "com.rjfun.cordova.httpd": "0.9.2",
    "cordova-plugin-webserver": "1.1.0",
    "cordova-plugin-whitelist": "1.3.3"
  };
});