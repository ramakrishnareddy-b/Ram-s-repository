/* Moving from -> Corporate Press Releases/USA Denbury Resources Inc_list.js */ 
// Denbury Resources Inc
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.denbury.com/investor-relations/press-releases/press-release-details/2015/Denbury-Announces-Release-Date-for-Second-Quarter-2015-Results-and-Conference-Call/default.aspx",
    function () {
        return {
            title: $(".ModuleDetailsContainer .ModuleDetailHeadline")[0].innerText.trim(),
            published_s: $(".ModuleDetailsContainer .ModuleDateContainer")[0].innerText.trim().replace(/\./g,'-'),
            body: $(".ModuleDetailsContainer .ModuleContainerInner .q4default")[0].innerText.trim(),
            links: $(".ModuleDetailsContainer .ModuleContainerInner .ModuleLinks a").attr("href"),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);