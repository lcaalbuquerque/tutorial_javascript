/***
 * prjs4_2.js
 * Luiz C. A. Albuquerque
 * lcaa@ufv.br
 * 12/02/2023
 * Uso de funções com variáveis locais.
 ***/

function display_HTML()
{
    var myheading = "<h1>Hello, World!</h1>";
    var mytext = "<p>While it is nice to know you world, there are only some \
                  things that I am comfortable sharing in a global context. \
                  You can\'t alter the variable that holds this text outside \
                  of the function that contains it! Ha!</p>";
    document.write(myheading + mytext);
}


display_HTML();
