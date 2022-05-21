var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');


function calculateProfitAndLoss(initial, quantity, current)
{
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showOutput('loss is ${loss}. loss percentage is ${lossPercentage}%');
    }

    else if(current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;
        showOutput('profit is ${profit}. profit percentage is ${profitPercentage}%');
    }

    else {
        showOutput('There is nothing to loss or gain!');
    }
}

function submitHandler() {
    if (
        initialPrice.value === "" ||
        stocksQuantity.value === "" ||
        currentPrice.value === "" 
    ) {
        outputBox.innerText = "please enter all value!";
    } else {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    if (qty < 1) {
        showOutput("quantity should be at least be 1");
    } else {
    calculateProfitAndLoss(ip, qty, curr);
}
    }
}

function showOutput(message) {
    outputBox.innerText = message;
}

submitBtn.addEventListener('click',submitHandler);