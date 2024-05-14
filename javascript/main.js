"use strict";

// Prendo dall'HTML l' ID del bottone che genera i biglietti
const generateButton = document.getElementById("generate-button");
const resetButton = document.getElementById("reset-button");
const ticketOutput = document.getElementById("ticket");

// Aggiungo l'evento click al bottone che genera i biglietti
generateButton.addEventListener("click", function () {
  let userNameValue = document.getElementById("user-name").value;
  let inputKmValue = document.getElementById("input-km").value;
  let inputAge = document.getElementById("age-range").value;

  // Definisco la costante di prezzo al km
  const ticketPriceKm = 0.21;

  // Definisco la variabile del prezzo totale del biglietto in base ai km e lo stampo in console
  let totalPriceTicket = inputKmValue * ticketPriceKm;
  console.log("Prezzo totale:", totalPriceTicket, "euro");

  // Dichiaro la variabile dello sconto applicabile
  let discount;

  let offerType = "Offerta Standard";

  /* Istruzione condizionale
    Se l'età inserita dall'utente è inferiore ai 18 anni lo sconto è di 20, se
    superiore ai 65 anni è di 40. Negli altri casi lo sconto è nullo */
  if (inputAge === "under") {
    offerType = "Offerta Under 18";
    discount = 20;
    console.log("Lo sconto applicato è del", discount, "%");
  } else if (inputAge === "over-65") {
    offerType = "Offerta Over 65";
    discount = 40;
    console.log("Lo sconto applicato è del", discount, "%");
  } else if (inputAge === "legal-age") {
    discount = 0;
  } else {
    alert("Seleziona un range di età valido");
  }

  let finalPrice = totalPriceTicket - (totalPriceTicket / 100) * discount;
  let finalPriceFixed = finalPrice.toFixed(2);
  console.log("Il prezzo finale è di:", finalPrice.toFixed(2), "euro");

  const randomTrainCart = Math.floor(Math.random() * 30 + 1);
  const randomCpCode = Math.floor(Math.random() * 99999 + 1);

  document.getElementById("name").innerHTML = userNameValue;
  document.getElementById("offer").innerHTML = offerType;
  document.getElementById("train-car").innerHTML = randomTrainCart;
  document.getElementById("cp-code").innerHTML = randomCpCode;
  document.getElementById("ticket-price").innerHTML = finalPriceFixed;

  ticketOutput.classList.remove("hidden");
});

resetButton.addEventListener("click", function () {
  ticketOutput.classList.add("hidden");
  let userNameValue = document.getElementById("user-name");
  let inputKmValue = document.getElementById("input-km");
  let inputAge = document.getElementById("age-range");

  userNameValue.value = "";
  inputKmValue.value = "";
  inputAge.value = "default";
});
