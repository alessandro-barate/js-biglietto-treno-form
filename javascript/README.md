Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Ricordate: il primo push dovrà essere un file README.md contenente la risoluzione dell’esercizio in linguaggio naturale!
Buon lavoro!
:saluto_vulcaniano:

!!! Via i prompt !!!

creo 2 input:

- input 1 per il nome e cognome del passeggero --> text field
- input 2 per la lunghezza del viaggio --> number field
- input 3 per l'età --> select con option

definisco variabile per costo fisso al km

creo 1 bottone per raccogliere i dati di input e all'evento click:

- calcolo il costo del biglietto (km \* costo fisso)
- definisco una variabile per lo sconto e la lascio vuota
- istruzione condizionale dove vedo se il valore della option scelta è identico al suo valore dichiarato nell'HTML e definisco così il valore di discount
- calcolo il prezzo finale (costo biglietto - [(costo biglietto/100)] \* discount)
- modifico il costo finale in numero con solo 2 decimali
