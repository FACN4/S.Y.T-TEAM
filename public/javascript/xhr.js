
function XHR (method,url)
{
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {

  if (xhr.status === 200 && xhr.readyState === 4) {
    cb(JSON.parse(xhr.responseText));

  }
};

xhr.open(method, url, true);
xhr.send();
};
module.export=XHR;
