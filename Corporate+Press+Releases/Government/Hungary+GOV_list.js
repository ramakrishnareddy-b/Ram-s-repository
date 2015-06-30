//http://www.kormany.hu/en/news
//http://www.kormany.hu/en/ministry-of-foreign-affairs-and-trade/news
//http://www.kormany.hu/en/the-prime-minister/news
//http://www.kormany.hu/en/ministry-of-national-development

var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.kormany.hu/en/news", "http://www.kormany.hu/en/ministry-of-foreign-affairs-and-trade/news", "http://www.kormany.hu/en/the-prime-minister/news", "http://www.kormany.hu/en/ministry-of-national-development"],function(){
    var urls =[];
    $("#ListArticles h2 a, .article-list .article h2 a").each(function(idx,el){
        urls.push(el.href);
    });
    return urls;
});