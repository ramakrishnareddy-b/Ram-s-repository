//https://www.gov.uk/government/announcements?keywords=&announcement_filter_option=all&topics%5B%5D=all&departments%5B%5D=all&world_locations%5B%5D=burma&from_date=&to_date=
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["https://www.gov.uk/government/announcements?keywords=&announcement_filter_option=all&topics%5B%5D=all&departments%5B%5D=all&world_locations%5B%5D=burma&from_date=&to_date="], function () {
    var urls = [];
    $(".filter-results > ol > li > h3 > a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});