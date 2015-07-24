// Osx Brasil Sa
var main=require(require('system').env['NL_HOME']+'main.js');

main.contentEvaluate("http://www.osx.com.br/cgi/cgilua.exe/sys/start.htm?infoid=441&lng=us&sid=115&tpl=view_ultimas_noticias",
    function(){
        $(".materia .breadcrumb, .materia .botao_voltar").remove();
        var t = $(".materia b")[0].innerText.trim();
        $(".materia b").remove();
        return {
            title: t,
            body: $(".materia")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);