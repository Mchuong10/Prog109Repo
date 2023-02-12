
let table;
do {
    table = prompt("Provide a value from 0 to 10");
} while (Number(table) === NaN || table < 0 || table > 10)       




var i = 1;                
var msg = "<h2>Multiplication Table</h2>";              



    // Do multiplication
    while (i < 11) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }

}



// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
