"use strict";

// Prendo dall'HTML l' ID del bottone che genera i biglietti
const generateButton = document.getElementById("generate-button");
const nameSurname = document.getElementById("name");
const offer = document.getElementById("offer");
const trainCar = document.getElementById("train-car");
const cpCode = document.getElementById("cp-cpde");
const ticketPrice = document.getElementById("ticket-price");

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
  } else if (inputAge === "over-65") {
    discount = 40;
  } else {
    discount = 0;
  }

  let finalPrice = totalPriceTicket - (totalPriceTicket / 100) * discount;
  let finalPriceFixed = finalPrice.toFixed(2);
  console.log("Il prezzo finale è di:", finalPrice.toFixed(2), "euro");
});
