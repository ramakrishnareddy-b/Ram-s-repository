//http://www.ecopetrol.com.co/wps/portal/web_es/ecopetrol-web/our-company/Press-Room/Press-Release/!ut/p/z1/hY-xDoIwEIafxYHR9gpBiVvFSIQFNUbsYsDUQgKUlGrj29sQBxMVb7vL9-X-HzOcYdbm90rkupJtXtv9xGbnICU02gBJYL7ygLqUxOvIp9uY4OMAwI-hgNm7H-0Ce3T3Vk3CZZj6L38EYP_-swEZSRD_y2BL0rbwAoGZ4leuuEI3ZbuXWnf9wgEHjDFISClqji6yQb1w4JtVyl7j7APGXXPIYMqKh6GTJ1Si_uk!/dz/d5/L2dBISEvZ0FBIS9nQSEh/
// URL changed to http://www.ecopetrol.com.co/wps/portal/web_es/ecopetrol-web/our-company/Press-Room/Press-Release/2015/!ut/p/z1/rVRNU8IwEP0tHnos2fSDBm9BtAgKKKKSC1PjUlDa1DaA8usNjKPjVxlmmkuym7dvdl82SwS5JyKNVvM40nOVRgtjj0V90ujTMGwPodtvnjnArwLW7DU55ZcBudsB4J_FgQhzzQaUh-dAu-E1M05nyK863ZPmycD_iC8BfIuHoOWaa047Z6FvMJTcEkGETHWmZ2SMUmWoc7WYYGHBp2VBusRC55GNSZZjEVmw3Qo7Vyr5POMCowItcID6W9JMzh_J2PNg2miwyI4ePGl7j3JqM1oPbGTUbUj0UMr6zyJ-Zyn2iSh2kDIZS4Rwzvv0J-C7kK1bpxywVbqzD2CagacPLouJyHGKOea1ZW56ZKZ1VhxbYMF6va7FSsULrEmV1IrYgr-iZqrQ5P4XmIyNjsG_Qp36ZHjgw5QTjryqCetVE7oVE1KomrDqkmnVr0yDignbh7dNZ98EMJ9k_vTyIrgZZirV-Gr-R3XTLEtGo4S5b_bzdXtzgXcmVwaun602N9MkmfR6X44Lzo-O3gH9VX6A/dz/d5/L2dBISEvZ0FBIS9nQSEh/
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.linksEvaluate(["http://www.ecopetrol.com.co/wps/portal/web_es/ecopetrol-web/our-company/Press-Room/Press-Release/2015/!ut/p/z1/rVRNU8IwEP0tHnos2fSDBm9BtAgKKKKSC1PjUlDa1DaA8usNjKPjVxlmmkuym7dvdl82SwS5JyKNVvM40nOVRgtjj0V90ujTMGwPodtvnjnArwLW7DU55ZcBudsB4J_FgQhzzQaUh-dAu-E1M05nyK863ZPmycD_iC8BfIuHoOWaa047Z6FvMJTcEkGETHWmZ2SMUmWoc7WYYGHBp2VBusRC55GNSZZjEVmw3Qo7Vyr5POMCowItcID6W9JMzh_J2PNg2miwyI4ePGl7j3JqM1oPbGTUbUj0UMr6zyJ-Zyn2iSh2kDIZS4Rwzvv0J-C7kK1bpxywVbqzD2CagacPLouJyHGKOea1ZW56ZKZ1VhxbYMF6va7FSsULrEmV1IrYgr-iZqrQ5P4XmIyNjsG_Qp36ZHjgw5QTjryqCetVE7oVE1KomrDqkmnVr0yDignbh7dNZ98EMJ9k_vTyIrgZZirV-Gr-R3XTLEtGo4S5b_bzdXtzgXcmVwaun602N9MkmfR6X44Lzo-O3gH9VX6A/dz/d5/L2dBISEvZ0FBIS9nQSEh/"], function () {
    var urls = [];
    $(".contentIndex .caption a").each(function (idx, el) {
        urls.push(el.href);
    });
    return urls;
});