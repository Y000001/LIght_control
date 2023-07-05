

function getLightId() {
  var data = getNatureRemoData("appliances");
  var lightId = ""; // 空调设备的ID

  // 遍历设备信息，找到空调设备并提取ID
  for (var i = 0; i < data.length; i++) {
    var device = data[i];
    if (device.nickname === NICKNAME_LIGHT) {
      lightId = device.id;
      break; 
    }
  }
  return lightId;
}

function light_on(){
  const headers = {'Authorization': 'Bearer ' + ACCESS_TOKEN,}; 
  
  const url = 'https://api.nature.global/1/appliances/' + lightId + '/light';

  var options = {
      "method" : "post",
      "headers" : headers,
      "payload" : {"button": "on"}
    };
var reply = UrlFetchApp.fetch(url, options);
}

function light_off(){
  const headers = {'Authorization': 'Bearer ' + ACCESS_TOKEN,}; 
  
  const url = 'https://api.nature.global/1/appliances/' + lightId + '/light';

  var options = {
      "method" : "post",
      "headers" : headers,
      "payload" : {"button": "off"}
    };
var reply = UrlFetchApp.fetch(url, options);
}