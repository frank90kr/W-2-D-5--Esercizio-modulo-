/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ["dog", "cat", "hamster", "redfish"];

console.log(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
{
  pets.sort();
  console.log(pets);
}

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
{
  pets.reverse();
  console.log(pets);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
{
  const pets = ["dog", "cat", "hamster", "redfish"];
  const arr = pets.shift();
  pets.push(arr);
  console.log(pets);
}

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  const carObj = cars[i];
  carObj.licensePlate = "DX%$&" + i + "YZ";
  /*  cars[i].licensePlate = "CX473JW"; */
  console.log(cars);
}

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
{
  const newCar = {
    brand: "Audi",
    model: "A3",
    color: "silver",
    trims: ["s-line", "sport"],
    licensePlate: "DB435TRY",
  };

  cars.push(newCar);

  for (let i = 0; i < cars.length; i++) {
    const carObj = cars[i];
    console.log(carObj.trims);

    if (carObj.trims) {
      carObj.trims.pop();
    }
  }
}

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  const carObj = cars[i];
  justTrims.push(carObj.trims[0]);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  let car = cars[i];
  if (car.color && car.color.charAt(0).toLocaleLowerCase() === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/

const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

/* let i = 0;

while (i < numericArray.length && numericArray[i] <= 32) {
  console.log(numericArray);
  i++;
} */

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
