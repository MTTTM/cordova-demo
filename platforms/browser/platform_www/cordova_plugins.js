cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-webserver/webserver.js",
        "id": "cordova-plugin-webserver.webserver",
        "pluginId": "cordova-plugin-webserver",
        "clobbers": [
            "webserver"
        ]
    },
    {
        "file": "plugins/com.rjfun.cordova.httpd/www/CorHttpd.js",
        "id": "com.rjfun.cordova.httpd.CorHttpd",
        "pluginId": "com.rjfun.cordova.httpd",
        "clobbers": [
            "cordova.plugins.CorHttpd"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-plugin-webserver": "1.1.0",
    "com.rjfun.cordova.httpd": "0.9.2"
}
// BOTTOM OF METADATA
});