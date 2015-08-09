var urls = ['https://www.cairnindia.com/media'];

var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(urls, function() {
  var selector = '.media_box1 li > a';

  var links = [];
  Array.prototype.forEach.call(document.querySelectorAll(selector), function(a) {
    links.push(a.href);
  });

  return links;
});
