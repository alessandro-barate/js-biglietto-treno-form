"use strict";

// Prendo dall'HTML l' ID del bottone che genera i biglietti
const generateButton = document.getElementById("generate-button");
const nameSurnameId = document.getElementById("name");
let nameSurname = nameSurnameId.innerHTML;
const offerId = document.getElementById("offer");
let offer = offerId.innerHTML;
const trainCarId = document.getElementById("train-car");
let trainCar = trainCarId.innerHTML;
const cpCodeId = document.getElementById("cp-code");
let cpCode = cpCodeId.innerHTML;
const ticketPriceId = document.getElementById("ticket-price");
let ticketPrice = ticketPriceId.innerHTML;

// Aggiungo l'evento click al bottone che genera i biglietti
generateButton.addEventListener("click", function () {
  const userNameValue = document.getElementById("user-name").value;
  const inputKmValue = document.getElementById("input-km").value;
  const inputAge = document.getElementById("age-range").value;

  // Definisco la costante di prezzo al km
  const ticketPriceKm = 0.21;

  // Definisco la variabile del prezzo totale del biglietto in base ai km e lo stampo in console
  let totalPriceTicket = inputKmValue * ticketPriceKm;
  console.log("Prezzo totale:", totalPriceTicket, "euro");

  // Dichiaro la variabile dello sconto applicabile
  let discount = {};

  /* Istruzione condizionale
    Se l'età inserita dall'utente è inferiore ai 18 anni lo sconto è di 20, se
    superiore ai 65 anni è di 40. Negli altri casi lo sconto è nullo */
  if (inputAge === "under") {
    discount = 20;
    console.log("Lo sconto applicato è del", discount, "%");
  } else if (inputAge === "over-65") {
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

  nameSurnameId.innerHTML = userNameValue;
  ticketPriceId.innerHTML = finalPriceFixed;
});
