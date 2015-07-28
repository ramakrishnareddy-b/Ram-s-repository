/* Moving from -> Corporate Press Releases/Netherlands Van Oord_list.js */ 
// Netherlands
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.vanoord.com/news/2015-van-oord-installs-gemini-wind-projects-first-monopile",
    function(){
        var t = jQuery("h1.title")[0].innerText.trim();
        var urls =[];
        jQuery('.page .files .file a').each(function(idx,el){
            urls.push(el.href);
        });
        jQuery(".page .carousel, .page .search-news, .page .press-contact-info, .page .social-block, .page .more-link, .page .node-meta-wrapper").remove();
        return {
            title: t,
            body: jQuery(".page")[0].innerText.trim(),
            links: urls,
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);