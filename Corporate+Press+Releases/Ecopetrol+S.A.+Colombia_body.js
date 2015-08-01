// Ecopetrol
var main = require(require('system').env['NL_HOME'] + 'main.js');

main.contentEvaluate("http://www.ecopetrol.com.co/wps/portal/web_es/ecopetrol-web/our-company/Press-Room/Press-Release/2015/2015/ecopetrol-announces-the-results-of-its-international-bond-offering/!ut/p/z1/tVZNc9owEP01PgpJ_qY3AwkJDBBCSIMvjCxk49aWHFuEpL--gjIUkmI3HdUXWdq3b7z7dleGIXyCIScvaUJkKjjJ1H4Rusv2BPf7NzM0nHSuTRRMPb8z7gR42rPh1z0AXXgCBENl9u9w0L9FeNi_99WhOQumg2G3071zDv41gDN_5PUsZQ7w4LrvKAyGjzCEIeWykGu4YFQUTJYiW7LKQMedgfiGVbIkgOVFySpioN1SgVKI_PjOMkYqZiATYcdAVHDJuDxhAYRzseGUVUCumcJXm0xWQMQgVUuq4CU_pA1Egq-UJWZlypPdFxY0XcFFmxHsUdMCthN5wMamDSKTmIC4jGHHZzZ22fuMfAw5vKxIMPIO_jWAsEnRcA-p07RGFfN2gt8DzlXtPZr1gL3sTcIPmhhU6QY8snyV_5IpJVjZ2pSqotdSFtUXAxlou922EiGSjLWoyFtVYqA_ea1FJeHTBzBcqER7FxN95cDZb-VtG8Xttk8AiWwK7BWNgY9dDzAfW23KbEap20A4t3UTuroJLc2EGOkm1B0y1q0y9jQT3ny-bAZNI0Y1Sfrt-TkM1OjdzclX1R_aZm99PNPeWYL-aqLWEz6YugktzYSWrZvQ1U3ofJpw0HQPqSIzy1F3pCZxQeRa3bCxOCmzf7-O_2v16v1zKPL5PPettxR8v7-KR9KJnOLlx0Oc58vxWPWwj6zjwUie7n6Z36ws-QlPo-nu/dz/d5/L2dBISEvZ0FBIS9nQSEh/",
    function () {
        return {
            title: $(".contentEditContainer .itemTitle")[0].innerText.trim(),
            published_s: cs.scanForDate($(".contentEditContainer .itemDate")[0].innerText.trim(), "MMM dd, yyyy"),
            body: $(".contentEditContainer .body")[0].innerText.trim(),
            url: document.location.href
        }; //returns object with title,published_s,body and url properties.
    }
);