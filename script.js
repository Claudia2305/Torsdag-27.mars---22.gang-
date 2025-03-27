//OPPGAVE 1:
// Steg 1: Lag en async funskjon som heter fetchData
// Steg 2: Lag en variabel som bruker await for å ta i mot en array med objects
// Steg 3: Retuner den variabelen


async function fetchData() {
    return "Data er hentet!";
  }

 // OPPGAVE 2:
// Steg 1: Lag en async funskjon som heter dataRecieved
// Steg 2: Lag en variabel som bruker await for å ta i mot funksjonen getData
// Steg 3: Logg ut denne dataen
// Steg 4: Legg til denne dataen på siden

async function dataReceived() {
    const data = await getData();
    console.log(data);
  }

//
//

// HER KODER VI SANNTID SAMMEN FOR CAT FACTS:

// API-link: https://catfact.ninja/facts

async function fetchApi(){
// Fetcher data fra catFact
const data = await fetch('https://catfact.ninja/facts');
console.log(data);
// Parser til JSON til array
const response = await data.json();
console.log(response);
console.log(response.data);
console.log(response.data[0]);
console.log(response.data[0].fact); 

//Lagre array av objects i en variabel

const responseData = response.data

responseData.forEach((item) => {
    const factItem = item.fact;
console.log(factItem);

// Lage en p-element til HTML
//Legge factItem inn som tekst til p
//Finne id som heter displayCatFact og hente den inn medquerySelector
//Legge til p på displaCatFact
});

}

fetchApi();


// Hele arrayet
// Vi finner data array, array med objects
// Vi velger et spesifikt array
// Vi finner fact

//Lagre array av objects i en variabel

//forEach for å få ut hver fact på siden

//VI LAGER EN CHUCK NORRIS KNAPP

//API-link: https://api.chucknorris.io/jokes/random
