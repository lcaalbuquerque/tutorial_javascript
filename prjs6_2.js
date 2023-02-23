/***
 * prjs6_2.js
 * Luiz C. A. Albuquerque
 * lcaa@ufv.br
 * 13/02/2023
 * Use of for and while loops.
 ***/

var items = 0,
    msg = "",
    city = window.prompt("Qual é o nome de sua cidade?", "");
if (city === null || city === "")
{
    msg = "Nenhuma cidade digitada. Não podemos determinar a disponibilidade \
           de entrega.";
}
else
{
    switch (city)
    {
        case "Belo Horizonte":
            msg = "Podemos entregar os itens em 3 dias.";
            items = 10;
            break;
        case "Rio de Janeiro":
            msg = "Podemos entregar os itens em 1 semana.";
            items = 5;
            break;
        case "São Paulo":
        case "Curitiba":
            msg = "Podemos entregar os itens em 2 semanas.";
            items = 2;
            break;
        default:
            msg = "Desculpe-nos! Não entregamos na sua cidade ainda.";
            items = 0;
    }
}
document.write(msg);
if (items > 0)
{
    document.write("<p>Podemos entregar até " + items + " itens para sua \
                    cidade.</p>");
    document.write("<p>Imprima isto, escreva abaixo os itens que quer comprar \
                    e nos envie pelo correio.</p>");
    for (var count = 1; count <= items; count++)
    {
        document.write(count + ". _________________<br>");
    }
}

