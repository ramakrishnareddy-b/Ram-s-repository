// Guatemala
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.mem.gob.gt/2015/06/10/realizan-cumbre-de-inversion-para-la-construccion-de-gasoducto/",
    function(){
        var b = $(".content p");
        $(".content p img, .content p a").remove();
        return {
            title:$(".content .title h1").text().trim(),
            body: b.text(),
            url: document.location.href
        }; //returns object with title,body and url properties.
    }
);
