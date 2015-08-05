//http://www.xjgjsy.com/Html/xwzx.asp?SortID=10&SortPath=0,10,
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.xjgjsy.com/Html/xwzx.asp?SortID=10&SortPath=0,10,"], function () {
    var urls = [];
    $("#table1 a[target='_blank']").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});