//http://www.woodside.com.au/Investors-Media/announcements/Pages/Announcements-CurrentYear.aspx#.VUCVyL6zBFI
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.woodside.com.au/Investors-Media/announcements/Pages/Announcements-CurrentYear.aspx#.VUCVyL6zBFI"], function () {
    var urls = [];
    $(".Announcements_CurrentYear .month li").each(function (idx, el) {
        var anc = $(el).find("a");
        var obj={link:anc[0].href,title:anc.find(".title")[0].innerText,published_s:anc.find(".date")[0].innerText.trim().replace(/\./g,'-'),content:'pdf'};
        urls.push(obj);
    });
    return urls;
});