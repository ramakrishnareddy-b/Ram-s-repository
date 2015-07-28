/* Moving from -> Corporate Press Releases/USA Freeport-McMoRan Inc_list.js */ 
// Freeport-McMoRan Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://investors.fcx.com/investor-center/news-releases/news-release-details/2015/Freeport-McMoRan-Reports-Second-Quarter-and-Six-Month-2015-Results/default.aspx",
    function () {
        return {
            title: $(".ModuleDetailsContainer .ModuleDetailHeadline")[0].innerText.trim(),
            published_s: $(".ModuleDetailsContainer .ModuleDateContainer")[0].innerText.trim().replace(/\//g,'-'),
            body: $(".ModuleDetailsContainer .ModuleBody")[0].innerText.trim(),
            links: $(".ModuleDetailsContainer .ModuleLinks a").attr("href"),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);