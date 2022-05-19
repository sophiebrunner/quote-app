function toggleQuoteButton() {
  function getQuoteFromApi() {
    const quoteText = document.querySelector("#quote-text");
    const quoteAuthor = document.querySelector("#quote-author");

    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((quote) => {
        quoteText.innerHTML = quote.data[0].quoteText;
        quoteAuthor.innerHTML = "&mdash; " + quote.data[0].quoteAuthor;
      });
  }

  const btnNewQuote = document.querySelector("#btn-new-quote");
  btnNewQuote.addEventListener("click", getQuoteFromApi);
}

toggleQuoteButton();

//Live-Coding Fetch API
/*
//Lösung mit 2 Variablen > eher die Ausnahme!
//Kraut-ipsum API fetchen; liefert Wort ("noun") zurück; Promise in Variable speichern;
let p = fetch("https://krautipsum.com/api/noun");

console.log(p);
//Wenn erfolgreich, führe das oder das aus;
let p2 = p.then((response) => {
  //Als erstes Zugriff auf das response-Objekt; wird als Parameter übergeben; kann ich beliebig benennen;
  //1. Promise: Response, darauf Status prüfen und JSON-function prüfen;
  console.log(response.status);
  console.log(response.ok);
  //Zugriff auf eigentliche Daten nötig;
  //Auf response-object zugreifen und JSON-function ausführen;
  //Liefert grundsätzlich promise; wenn alle Daten da sind, springen wir in den nächsten callback rein
  return response.json();
});
//2. Nächsten promise für das eigentliche Ergebnis, den eigentlichen body
//Wenn Ergebnis da ist;
//Bekommen reponse-body (=Daten) geliefert;
p2.then((data) => console.log(data.noun));
*/

/*
//Kraut-ipsum API fetchen; liefert Wort ("noun") zurück; Promise in Variable speichern;
fetch("https://krautipsum.com/api/noun")
  //Wenn erfolgreich, führe das oder das aus;
  .then((response) => {
    //Als erstes Zugriff auf das response-Objekt; wird als Parameter übergeben; kann ich beliebig benennen;
    //1. Promise: Response, darauf Status prüfen und JSON-function prüfen;
    //console.log(response.status);
    //console.log(response.ok);
    //Zugriff auf eigentliche Daten nötig;
    //Auf response-object zugreifen und JSON-function ausführen;
    //Liefert grundsätzlich promise; wenn alle Daten da sind, springen wir in den nächsten callback rein
    //Daten werden nur geliefert, wenn response ok ist
    if (response.ok) {
      return response.json();
    }
  })
  //2. Nächsten promise für das eigentliche Ergebnis, den eigentlichen body
  //Wenn Ergebnis da ist;
  //Bekommen reponse-body (=Daten) geliefert;
  //Daten in den DOM einhängen;
  .then((data) => document.body.append(document.createTextNode(data.noun)));
*/

/*
//Fullfilled wird nur angesteuert, wenn kein network-error;
fetch("https://krautipsum.com/api/noun").then(
  (response) => {
    console.log("ok");
  },
  (err) => {
    console.log("error");
  }
);
*/
