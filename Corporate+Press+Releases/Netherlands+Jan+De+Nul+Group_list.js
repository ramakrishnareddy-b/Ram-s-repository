//http://www.jandenul.com/en/press/press-releases
var main=require(require('system').env['NL_HOME']+'main.js');

main.linksEvaluate(["http://www.jandenul.com/en/press/press-releases"],function(){
    var urls =[];
    jQuery('.views-field span.field-content a').each(function(idx,el){
        urls.push(el.href);
    });
    return urls;
});