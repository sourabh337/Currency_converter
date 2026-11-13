
let amount = document.getElementById("amount");
let from = document.getElementById("fromCurrency");
let to = document.getElementById("toCurrency");
let result = document.getElementById("result");
let rate = document.getElementById("rate");

async function convertCurrency() {

    let value = amount.value;
    let fromCurrency = from.value;
    let toCurrency = to.value;

    if (value <= 0) {
        result.innerText = "Enter a valid amount";
        return;
    }

    let url = "https://open.er-api.com/v6/latest/" + fromCurrency;

    let response = await fetch(url);
    let data = await response.json();

    let exchangeRate = data.rates[toCurrency];

    let convertedAmount = value * exchangeRate;

    result.innerText = toCurrency + " " + convertedAmount.toFixed(2);

    rate.innerText = "1 " + fromCurrency + " = " + exchangeRate.toFixed(4) + " " + toCurrency;
}

document.getElementById("convert").addEventListener("click", convertCurrency);

document.getElementById("swap").addEventListener("click", function() {

    let temp = from.value;

    from.value = to.value;
    to.value = temp;

    convertCurrency();

});
