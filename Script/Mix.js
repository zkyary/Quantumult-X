/*
转自越南老哥作品 

* MIX解锁
=======Quantumult X=======

^https:\/\/bmall\.camera360\.com\/api\/mix\/recovery$ url script-response-body https://raw.githubusercontent.com/githubdulong/Script/master/mix.js
========Surge==========
camera360-Mix = requires-body=1,script-path= https://raw.githubusercontent.com/githubdulong/Script/master/mix.js,type=http-response,pattern= ^https:\/\/bmall\.camera360\.com\/api\/mix\/recovery$

[MITM]
hostname = bmall.camera360.com
*/

let body= $response.body;
var obj = JSON.parse(body);
if (body.indexOf("expires") !=-1) {;
  obj["data"]["orderList"][0]["expires_date"] = "2099-10-19 05:14:18 Etc/GMT";
  obj["data"]["orderList"][0]["expires_date_pst"] = "2099-10-18 22:14:18 America/Los_Angeles";
  obj["data"]["orderList"][0]["expires_date_ms"] = "4096019658000";
  }
$done({body: JSON.stringify(obj)});
