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
    if(requestType == "post"){
      vueComponent.$http.post(httpUrl,params, options).then(function (res) {
        if (successCallback) {
          successCallback(res.body.data)
        }
      }, function (err) {
        if (errCallback) {
          errCallback(err)
        }
      })
    }else{
      vueComponent.$http.get(httpUrl, params,options).then(function (res) {
        if (successCallback) {
          successCallback(res.body.data)
        }
      }, function (err) {
        if (errCallback) {
          errCallback(err)
        }
      })
    }

  }

};

export default httpHelper;
