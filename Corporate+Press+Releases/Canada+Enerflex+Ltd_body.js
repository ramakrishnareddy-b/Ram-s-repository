// Enerflex Ltd
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.enerflex.com/Investors/Press-Releases/news.php?year=2015&xml=http%253A%252F%252Fenerflex.mwnewsroom.com%252Farticle%252Fxml%253Fid%253D1972452",
    function () {
        return {
            title: $("#newsContent .news-headline")[0].innerText.trim(),
            published_s: $("#newsContent .news-date")[0].innerText.trim(),
            body: $("#newsContent .mw_release")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);