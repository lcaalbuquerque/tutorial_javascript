/***
 * prjs7_2.js
 * Luiz C. A. Albuquerque
 * lcaa@ufv.br
 * 16/02/2023
 * Use of nested arrays.
 ***/

var computer_parts = [ ["Monitors", "LCD Screens", "Vibrant Colors"],
                       ["Motherboards", "Fast"],
                       ["Chips", "Pentium", "Very Fast"],
                       ["Hard Drives", "100-500 GB", "Fast Reading"],
                       ["DVD-ROMS", "Burn CDs", "Burn DVDs", "Listen to Both!"],
                       ["Cases", "All Sizes", "Choice of Colors"],
                       ["Power Supplies", "We can get one for any computer!"]
                     ];
var i, j;
for (i = 0; i < computer_parts.length; i++)
{   
    for (j = 0; j < computer_parts[i].length; j++)
    {
        if (j === 0)
        {
            document.write(computer_parts[i][j] + ": ");
        }
        else if (j === computer_parts[i].length - 1)
        {
            document.write(computer_parts[i][j] + "<br>");
        }
        else
        {
            document.write(computer_parts[i][j] + ", ");
        }
    }
}