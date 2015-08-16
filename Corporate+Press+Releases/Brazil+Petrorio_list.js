//http://ir.hrt.com.br/petrorio/web/conteudo_en.asp?idioma=1&conta=44&tipo=32107
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://ir.hrt.com.br/petrorio/web/conteudo_en.asp?idioma=1&conta=44&tipo=32107"], function () {
    var urls = [];
    $(".arquivos .linkI").each(function (idx, el) {
        var published_dt = $(el).parent().find(".data")[0].innerText.trim().replace(/\//g, '-');
        var anc=$(el).find("a")[0];
        var obj = {link: anc.href, title: anc.innerText, published_s: published_dt, content: 'pdf'};
        urls.push(obj);
    });
    return urls;
});