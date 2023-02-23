/***
 * prjs4_1.js
 * Luiz C. A. Albuquerque
 * lcaa@ufv.br
 * 11/02/2023
 * Uso de funções.
 ***/

function car_cost(mycar, paycheck)
{
    window.alert("You have a " + mycar + " and make $" + paycheck);
}


function get_added_text()
{
    var textpart1 = "This project ",
        textpart2 = "is almost fun!",
        addedtext = textpart1 + textpart2;
    return addedtext;
}

car_cost("Honda Fit", 1500);
var alerttext = get_added_text();
window.alert(alerttext);
