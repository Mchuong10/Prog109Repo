var table = 3;             // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = "<h2>Multiplication Table</h2>";    // Message


let table;


do {
    table = prompt("Provide a value from 0 to 10");
} while (Number(table) === NaN || table < 0 || table > 10)       

    
    // Do multiplication
    while (i < 11) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }



// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
