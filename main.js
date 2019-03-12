// Write your JavaScript here






function handleClickEvent (e) {
    var amountDue = document.getElementById ("amount-due").value;
    var amountReceived = document.getElementById ("amount-received").value;

    var amountDueInPennies = 100 * amountDue;
    var amountReceivedInPennies = 100 * amountReceived;

    var coins = [100, 25, 10, 5, 1];
    var amountLeft = amountReceivedInPennies - amountDueInPennies;
    var results = [];

    coins.forEach(function (coin) {
        var remainder = amountLeft % coin;
        var divisee = amountLeft - remainder;
        var result = divisee / coin;
        results.push (result);
        amountLeft = remainder;
    });
    
    document.getElementById ("dollars-output").innerText = results [0];
    document.getElementById ("quarters-output").innerText = results [1];
    document.getElementById ("dimes-output").innerText = results [2];
    document.getElementById ("nickels-output").innerText = results [3];
    document.getElementById ("pennies-output").innerText = results [4];
}  

