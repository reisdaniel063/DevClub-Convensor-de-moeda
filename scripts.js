const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const inputCurrencyValue = document.querySelector(".input-currency"); 
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueConverted = document.querySelector(".currency-value");

const dolarToday = 5.2;
const euroToday = 6.2;
const libraToday = 7.9;
const bitcoinToday = 76434.0

function convertValue() {
  const inputValue = parseFloat(inputCurrencyValue.value); 


  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputValue / dolarToday);
  } else if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputValue / euroToday);
  } else if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputValue / libraToday);
  } else if(currencySelect.value=="bitcoin"){
    currencyValueConverted.innerHTML = (inputValue / bitcoinToday).toFixed(8);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImg.src = './assets/dolar.png';
  } else if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  } else if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImg.src = "./assets/libra.png";
  }else if(currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "./assets/bitcoin.png"
  } else {
    currencyName.innerHTML = "Real"; 
    currencyImg.src = "./assets/real.png"; 
  }

  convertValue(); 
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValue);