"use strict";

// Prendo dall'HTML l' ID del bottone che genera i biglietti
const generateButton = document.getElementById("generate-button");

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

  //Dichiaro le variabili per le età sotto ai 18 anni e sopra i 65 anni
  //const ageUnder = 18;
  //const ageOver = 65;

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

  // Definisco la percentuale di sconto e la stampo in console
  let discountPercentage = (100 / 100) * discount;
  console.log("Percentuale di sconto:", discountPercentage, "per cento");

  let finalPrice =
    totalPriceTicket - (totalPriceTicket / 100) * discountPercentage;
  console.log("Il prezzo finale è di:", finalPrice.toFixed(2), "euro");
});

// TODO: chiedere come mostrare nell'html solo 2 decimali.
