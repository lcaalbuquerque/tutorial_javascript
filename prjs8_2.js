/***
 * prjs8_2.js
 * Luiz C. A. Albuquerque
 * lcaa@ufv.br
 * 26/02/2023
 * Use of constructor/prototype pattern.
 ***/

function Computer(type, processor, ram, hd)
{
    this.type = type;
    this.processor = processor;
    this.ram = ram;
    this.hd = hd;
}


Computer.prototype.describe = function()
{
    document.write("<p>" + this.type + ":<br>");
    document.write("Processor: " + this.processor + "<br>");
    document.write("RAM: " + this.ram + "<br>");
    document.write("Hard Disk: " + this.hd + "</p>");
};

var work_computer = new Computer("Work", "2GHz", "8GB", "1TB");
var home_computer = new Computer("Home", "2GHz", "4GB", "500GB");
var gaming_computer = new Computer("Gaming", "4GHz", "16GB", "2TB");
work_computer.describe();
home_computer.describe();
gaming_computer.describe();
