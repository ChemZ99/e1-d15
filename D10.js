/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

console.log("---------- esercizio a");

let num1 = 10;
let num2 = 20;
let tot = num1 + num2;
console.log("sum =", tot);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

console.log("---------- esercizio b");

let random = Math.floor(Math.random() * 20);
console.log("variabile random", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log("---------- esercizio c");

const me = {
  name: "Andrea",
  surname: "Cavallo",
  age: 31,
};
console.log("me =", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log("---------- esercizio d");

delete me.age;
console.log("me =", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

console.log("---------- esercizio e");

me.skills = ["HTML", "css", "javascript", "c", "enfusion"];
console.log("me =", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log("---------- esercizio f");

me.skills.push("c++");
console.log("me =", me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log("---------- esercizio g");

me.skills.pop();
console.log("me =", me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log("---------- esercizio 1");

let dicenum = 0;
const dice = function () {
  dicenum = Math.floor(Math.random() * 6 + 1);
  return dicenum;
};
dice();
console.log("dice =", dicenum);

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log("---------- esercizio 2");

let biggernum = 0;
const whoIsBigger = function (numa, numb) {
  if (numa > numb) {
    biggernum = numa;
  } else {
    biggernum = numb;
  }
};
whoIsBigger(num1, num2);
console.log("whoIsBigger =", biggernum);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log("---------- esercizio 3");
let text1 = "lorem ipsum mannaggia alla piadina";
let textarr = [];
const splitMe = function (string) {
  textarr = string.split(" ");
  return textarr;
};
splitMe(text1);
console.log("splitMe =", textarr);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log("---------- esercizio 4");
let text2 = "draker";
let boold = false;
let texto = "";
const deleteOne = function (string, boolean) {
  if (boolean === true) {
    texto = string.slice(1, string.length);
  } else if (boolean === false) {
    texto = string.slice(0, string.length - 1);
  }
  return texto;
};
deleteOne(text2, boold);
console.log("deleteOne =", texto);

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log("---------- esercizio 5");

let text3 = "a4nc6o9r7a";
let finaltext = "";
const onlyLetters = function (string) {
  return string.replace(/[0-9]/g, "");
};

console.log(onlyLetters(text3));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log("---------- esercizio 6");

let text4 = "astarore@tim.it";
let returnbool;
const isThisAnEmail = function (string) {
  if (
    string.slice(-10) === "@gmail.com" ||
    string.slice(-12) === "@outlook.com" ||
    string.slice(-10) === "@libero.it" ||
    string.slice(-7) === "@tim.it" ||
    string.slice(-11) === "@hotmail.it"
  ) {
    returnbool = true;
  } else {
    returnbool = false;
  }
  return returnbool;
};
isThisAnEmail(text4);
console.log("email", text4, "value", returnbool);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log("---------- esercizio 7");

let currday;
const whatDayIsIt = function () {
  let today = new Date();
  currday = today.getDay();
  if (currday === 0) {
    console.log("domenica");
  } else if (currday === 1) {
    console.log("lunedi");
  } else if (currday === 2) {
    console.log("martedi");
  } else if (currday === 3) {
    console.log("mercoledi");
  } else if (currday === 4) {
    console.log("giovedi");
  } else if (currday === 5) {
    console.log("venerdi");
  } else if (currday === 6) {
    console.log("sabato");
  }
};
whatDayIsIt();

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log("---------- esercizio 8");

let dicesrolled = 6;
let dicesobj = { sum: 0, values: [] };
const rollTheDices = function (times) {
  for (i = 0; i < times; i++) {
    dice();
    dicesobj.sum += dicenum;
    dicesobj.values.push(dicenum);
  }
  return dicesobj;
};
rollTheDices(dicesrolled);
console.log("rollthedices", dicesobj);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log("---------- esercizio 9");

const refer = new Date("january 12, 2021");
const today = new Date();
let difference;

const howManyDays = function (date1, date2) {
  difference = Math.floor((date1 - date2) / (1000 * 60 * 60 * 24));
  return difference;
};
howManyDays(today, refer);
console.log(difference, "giorni");

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log("---------- esercizio 10");

const bday = new Date("january 8, 1992");
let verifier;
const isTodayMyBirthday = function (date) {
  let day = date.getDate();
  let month = date.getMonth();
  if (day === 8 && month === 0) {
    verifier = true;
  } else {
    verifier = false;
  }
};
isTodayMyBirthday(bday);
console.log(verifier);

// Arrays & Oggetti

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log("---------- esercizio 11");

const testobj = {
  id: 79698,
  tag: 9001,
  name: "to be eliminated",
};
const deleteProp = function (obj, objparam) {
  delete obj[objparam];
};
deleteProp(testobj, "name");
console.log(testobj);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log("---------- esercizio 12");

let index = 0;
let tempyear = 1800;

const newestMovie = function (arr) {
  arr.forEach(element => {
    if (tempyear < parseInt(element.Year)) {
      tempyear = parseInt(element.Year);
      index = arr.indexOf(element);
    }
    return index;
  });
};
newestMovie(movies);
console.log(movies[index]);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log("---------- esercizio 13");

let moviecount = 0;
countMovies = function (arr) {
  moviecount = arr.length;
  return moviecount;
};
countMovies(movies);
console.log("countMovies", moviecount);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log("---------- esercizio 14");

const years = [];
const onlyTheYears = function (arr) {
  arr.map(element => years.push(element.Year));
};
onlyTheYears(movies);
console.log(years);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log("---------- esercizio 15");

let counter = 2000;
const oldest = [];
const onlyInLastMillennium = function (arr) {
  arr.forEach(element => {
    if (parseInt(element.Year) >= counter) {
      oldest.push(element);
    }
    return oldest;
  });
};
onlyInLastMillennium(movies);
console.log(oldest);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log("---------- esercizio 16");

let yearstotal = 0;
const sumAllTheYears = function (arr) {
  for (i = 0; i < arr.length; i++) {
    yearstotal += parseInt(arr[i]);
  }
  return yearstotal;
};
sumAllTheYears(years);
console.log("totale", yearstotal);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log("---------- esercizio 17");

let title = "Avengers";
const selection = [];
const searchByTitle = function (string, arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].Title.includes(string)) {
      selection.push(arr[i]);
    }
  }
  return selection;
};
searchByTitle(title, movies);
console.log(selection);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log("---------- esercizio 18");

const divided = { match: [], unmatch: [] };
const searchAndDivide = function (string, arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].Title.includes(string)) {
      divided.match.push(arr[i]);
    } else {
      divided.unmatch.push(arr[i]);
    }
  }
  return divided;
};
searchAndDivide(title, movies);
console.log(divided);

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log("---------- esercizio 19");

let ind = 3;
const removeIndex = function (index, arr) {
  arr.splice(index, 1);
  return arr;
};
removeIndex(ind, movies);
console.log(movies);

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

console.log("---------- esercizio 20");

const selectidcontainer = function () {
  let selection = document.getElementById("container");
  return selection;
};
const cont = selectidcontainer();
console.log(cont);

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log("---------- esercizio 21");

const selectalltds = function () {
  let selection2 = document.getElementsByTagName("td");
  return selection2;
};
const alltds = selectalltds();
console.log(alltds);

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log("---------- esercizio 22");

const printeverytdvalue = function () {
  let selection2 = document.getElementsByTagName("td");
  for (i = 0; i < selection2.length; i++) {
    console.log(selection2[i].innerText);
  }
};
printeverytdvalue();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

console.log("---------- esercizio 23");

const redBgOnEveryA = function () {
  let selection3 = document.getElementsByTagName("a");
  selection3 = Array.from(selection3);
  selection3.forEach(elem => (elem.style["background-color"] = "red"));
};
redBgOnEveryA();
console.log("---------- completato");

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

console.log("---------- esercizio 24");

const addlielement = function () {
  let selection4 = document.getElementById("myList");
  const add = document.createElement("li");
  add.innerText = "success";
  selection4.appendChild(add);
};
addlielement();
console.log("---------- completato");

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

console.log("---------- esercizio 25");

const emptylist = function () {
  let selection5 = document.getElementsByTagName("li");
  for (i = 0; i < selection5.length; i++) {
    selection5[i].innerText = "";
  }
};
emptylist();
console.log("---------- completato");

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

console.log("---------- esercizio 26");

const addclasstotr = function () {
  let selection6 = document.getElementsByTagName("tr");
  for (i = 0; i < selection6.length; i++) {
    selection6[i].classList.add("test");
  }
};
addclasstotr();
console.log("---------- completato");

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

console.log("---------- esercizio extra 1");

let height = 8;

const halfTree = function (num) {
  const selection7 = document.getElementById("extracontainer");
  const treecontainer = document.createElement("div");
  let treepiece = "*";
  for (i = 0; i < num; i++) {
    const treeslice = document.createElement("p");
    treeslice.innerText = treepiece;
    treecontainer.appendChild(treeslice);
    treepiece = treepiece.concat(" *");
  }
  selection7.appendChild(treecontainer);
};
halfTree(height);
console.log("---------- completato");

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

console.log("---------- esercizio extra 2");

const tree = function (num) {
  const selection8 = document.getElementById("extracontainer");
  const treecontainer2 = document.createElement("div");

  let treepiece2 = "*";
  for (i = 0; i < num; i++) {
    const treeslice2 = document.createElement("p");
    treeslice2.innerText = treepiece2;
    treeslice2.classList.add("centered");
    treecontainer2.appendChild(treeslice2);
    treepiece2 = treepiece2.concat(" *", " *");
  }
  selection8.appendChild(treecontainer2);
};
tree(height);
console.log("---------- completato");

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

let primenumber = 1109;
let primecheck;
const isItPrime = function (num) {
  if (num <= 1) {
    primecheck = false;
    return primecheck;
  }
  if (num === 2) {
    primecheck = true;
    return primecheck;
  }

  for (i = 2; i < num; i++) {
    if (num % i === 0 || num === 2) {
      primecheck = false;
      return primecheck;
    }
  }
  primecheck = true;
  return primecheck;
};
isItPrime(primenumber);
console.log("numero primo", primenumber, "risultato", primecheck);

/* Questo array viene usato per gli esercizi. Non modificarlo. */
