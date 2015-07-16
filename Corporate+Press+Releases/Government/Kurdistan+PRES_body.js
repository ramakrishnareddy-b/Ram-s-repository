// Kurdistan
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://presidency.krd/english/articledisplay.aspx?id=GEgz/y/PYCQ=",
    function () {
        $("#ctl00_main_grid2 strong.red_text_small").remove();
        return {
            title: $("#ctl00_main_grid2 .text_boldh1")[0].innerText.trim(),
            published_s: $("#ctl00_main_grid2 .red_text_small")[0].innerText.trim().replace(/\//g, '-'),
            body: $("#ctl00_main_grid2 .content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);