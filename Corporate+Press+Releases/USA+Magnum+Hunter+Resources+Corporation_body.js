// Magnum Hunter Resources Corporation
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.b2i.us/profiles/investor/ResLibraryView.asp?ResLibraryID=78260&GoTopage=1&Category=1848&BzID=1969&G=202",
    function () {
        return {
            title: $(".b2iNewsStoryTable .b2iNewsStoryHeadline")[0].innerText.trim(),
            published_s: $(".b2iNewsStoryTable .b2iNewsStoryDate")[0].innerText.trim(),
            body: $(".b2iNewsStoryTable .b2iNewsStoryBody")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);