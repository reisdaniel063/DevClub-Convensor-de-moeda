const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const inputCurrencyValue = document.querySelector(".input-currency");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueConverted = document.querySelector(".currency-value");

async function getRealTimeCurrencies() {
  try {
    const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BTC-BRL");
    const data = await response.json();
    return {
      dolar: parseFloat(data.USDBRL.bid),
      euro: parseFloat(data.EURBRL.bid),
      libra: parseFloat(data.GBPBRL.bid),
      bitcoin: parseFloat(data.BTCBRL.bid)
    };
  } catch (error) {
    console.error("Erro ao buscar as cotações:", error);
    return { dolar: 5.2, euro: 6.2, libra: 7.9, bitcoin: 76434.0 }; // Valores padrão em caso de erro
  }
}

async function convertValue() {
  const inputValue = parseFloat(inputCurrencyValue.value);
  const currencies = await getRealTimeCurrencies();

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputValue / currencies.dolar);
  } else if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputValue / currencies.euro);
  } else if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(inputValue / currencies.libra);
  } else if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML = (inputValue / currencies.bitcoin).toFixed(8);
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
  } else if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImg.src = "./assets/bitcoin.png";
  } else {
    currencyName.innerHTML = "Real";
    currencyImg.src = "./assets/real.png";
  }

  convertValue();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValue);


changeCurrency();