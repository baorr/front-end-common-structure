const request = require('request');

function genJson(error, response, body, resolve) {
  var json = {
    code: '500',
    message: ''
  }
  if(error){
  	 json.message = error.message;
  }

  if(!error && response.statusCode) {
      json.code = response.statusCode;
      json.message = body;
  }
  return json;
}



var postFormJson = function (parm) {
    let option = {
        url: 'https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth',
        method: "POST",
        json: true,
        body: parm
    };
    

    return new Promise(function (resolve, reject) {
        request(option, function (error, response, body) {
            resolve(genJson(error, response, body));
        });
    })
};

module.exports = postFormJson;