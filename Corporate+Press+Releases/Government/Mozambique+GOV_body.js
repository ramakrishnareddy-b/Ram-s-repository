// Mozambique
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.minec.gov.mz/index.php?option=com_content&task=view&id=799&Itemid=1",
    function () {
        var t = $("#ja-content .contentheading")[0].innerText.trim();
        $("#ja-content .pathway, #ja-content .contentheading, #ja-content .buttonheading, #ja-content .pagenav_prev, #ja-content .pagenav_next, #ja-content .back_button").remove();
        return {
            title: t,
            body: $("#ja-content")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);