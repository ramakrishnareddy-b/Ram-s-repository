//http://www.denbury.com/investor-relations/press-releases/default.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.denbury.com/investor-relations/press-releases/default.aspx"], function () {
    var urls = [];
    $(".NewsListContainer .ModuleHeadlineLink").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});