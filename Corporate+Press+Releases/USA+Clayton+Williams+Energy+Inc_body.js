// Clayton Williams Energy Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.b2i.us/profiles/investor/ResLibraryView.asp?ResLibraryID=78071&GoTopage=1&Category=145&BzID=844&G=539",
    function () {
        return {
            title: jQuery(".b2iNewsStoryTable .b2iNewsStoryHeadline")[0].innerText.trim(),
            body: jQuery(".b2iNewsStoryTable .b2iNewsItemBodyDiv")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);