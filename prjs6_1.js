/***
 * prjs6_1.js
 * Luiz C. A. Albuquerque
 * lcaa@ufv.br
 * 13/02/2023
 * Use of user input with prompt method.
 ***/

var msg = "",
    city = window.prompt("Qual é o nome de sua cidade?", "");
if (city === null || city === "")
{
    msg = "Nenhuma cidade digitada. Não posso determinar a disponibilidade \
           de entrega.";
}
else
{
    switch (city)
    {
        case "Belo Horizonte":
            msg = "Podemos entregar os itens em 3 dias.";
            break;
        case "Rio de Janeiro":
            msg = "Podemos entregar os itens em 1 semana.";
            break;
        case "São Paulo":
        case "Curitiba":
            msg = "Podemos entregar os itens em 2 semanas.";
            break;
        default:
            msg = "Desculpe-nos! Não entregamos na sua cidade ainda.";
    }
}
document.write(msg);
