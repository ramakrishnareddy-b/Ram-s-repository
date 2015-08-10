//http://www.senexenergy.com.au/157/Investor-Centre/files?category=ASX+Announcements
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.senexenergy.com.au/157/Investor-Centre/files?category=ASX+Announcements"], function () {
    var urls = [];
    $(".wlNewsTable .headlineLink").each(function (idx, el) {
        var published_dt = cs.scanForDate($(el).parent().parent().parent().parent().parent().parent().text().trim(), "dd/MM/yyyy").replace(/\//g, '-');
        var obj = {link: el.href, title: $(el).text().trim(), published_s: published_dt, content: 'pdf'};
        urls.push(el.href);
    });
    return urls;
});