/***
 * prjs3_2.js
 * Luiz C. A. Albuquerque
 * lcaa@ufv.br
 * 10/02/2023
 * Uso de variáveis em JavaScript.
 ***/
 
var myheading = "<h1>Esta é a minha página Web!</h1>",
    linktag = "<a href=\"http://www.webxpertz.net\">Link para o sítio Web!</a>",
    sometext = "Este texto pode ser afetado por outros comandos.",
    begineffect = "<strong>",
    endeffect = "</strong>",
    beginparagr = "<p>",
    endparagr = "</p>";

document.write(myheading);
document.write(begineffect + sometext + endeffect);
document.write(beginparagr + linktag + endparagr);
document.write(beginparagr + sometext + endparagr);
