//http://www.b2i.us/profiles/investor/ResLibrary2.asp?BzID=844&g=539&to=rl&Nav=0&LangID=1&s=0&Category=145
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.b2i.us/profiles/investor/ResLibrary2.asp?BzID=844&g=539&to=rl&Nav=0&LangID=1&s=0&Category=145"], function () {
    var urls = [];
    jQuery(".b2iNewsListContent .b2iNewsItemHeadline a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});