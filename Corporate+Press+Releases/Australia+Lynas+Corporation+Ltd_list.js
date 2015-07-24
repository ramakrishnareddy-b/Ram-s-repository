//https://www.lynascorp.com/Pages/Media-Centre.aspx
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["https://www.lynascorp.com/Pages/Media-Centre.aspx"], function () {
    var urls = [];
    $("#ctl00_m_g_1fa7d93b_e539_4179_a523_1899d2560d6d_ctl00_ctl00_Lists a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});