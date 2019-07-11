'use strict';
var request = require('request');
/**
 * @description Create a Snapcode with a username
 * @param {string} username
 * @param {string} imageType
 * @return {Snapcode IMAGE|undefined} Return a image, or a SVG object
 */
async function create(name, type, callback){
    if(name.length > 0) {
        let propertiesObject = {
            username: name,
            type: type
        };
        let url = "https://feelinsonice-hrd.appspot.com/web/deeplink/snapcode";
        await request({
            url: url,
            qs: propertiesObject
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                callback(body);
            }
        });
    } else {
        return undefined;
    }
}
module.exports = {
    create: create
};
