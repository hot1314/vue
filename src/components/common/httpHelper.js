/**
 * Created by lan on 2018/6/6.
 */
var httpHelper = {
    get: function (config) {
        config.type = "get";
        this._getConfig(config);
    },
    post: function (config) {
        config.type = "post";
        this._getConfig(config);
    },
    _getConfig: function (config) {
        var vueComponent, httpUrl, params, successCallback, errCallback;
        vueComponent = config.obj;
        httpUrl = config.url;
        params = config.data;
        successCallback = config.success;
        errCallback = config.error;
        if (!params) {
            params = {}
        }
        var options = {};
        options.headers = {};
        options.emulateJSON = true;
        var requestType = config.type;
        if (requestType == "post") {
            vueComponent.$http.post(httpUrl, params, options).then(function (res) {
                var result = res.body;
                if (result.code == 1) {
                    if (successCallback) {
                        successCallback(result);
                    }
                } else {
                    if (errCallback) {
                        errCallback(result);
                    }
                }
            }, function (err) {
                if (errCallback) {
                    var re = {code: "httpError", message: "网络不给力，请稍后"};
                    errCallback(re);
                }
            });
        } else {
            vueComponent.$http.get(httpUrl, {params: params}, options).then(function (res) {
                var result = res.body;
                if (result.code == 1) {
                    if (successCallback) {
                        successCallback(result);
                    }
                } else {
                    if (errCallback) {
                        errCallback(result);
                    }
                }
            }, function (err) {
                if (errCallback) {
                    var re = {code: "httpError", message: "网络不给力，请稍后"};
                    errCallback(re);
                }
            });
        }

    }

};

export default httpHelper;
