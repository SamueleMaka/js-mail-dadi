// ========== ESE 1 ========== //

// Somma solo numeri pari
// Obiettivo: Data un array di numeri, sommare solo quelli pari.
const numeri_1 = [2, 5, 8, 3, 10, 7];
let sommaNumeri = 0;
for(let i=0; i<numeri_1.length; i++){
    if(numeri_1[i]%2==0){
        sommaNumeri+=numeri_1[i];
    }
}
console.log(sommaNumeri)


// ========== ESE 2 ========== //

// Conta quante volte appare un valore
// Obiettivo: Contare quante volte appare il valore "rosso" in un array di stringhe.
const colori = ["rosso", "blu", "rosso", "verde", "rosso"];
let contatoreColori = 0;
for(let i=0; i<colori.length; i++){
    if(colori[i] === "rosso"){
        contatoreColori++;
    }
}
console.log(contatoreColori)


// ========== ESE 3 ========== //

// Inverti un array
// Obiettivo: Creare un nuovo array con gli elementi in ordine inverso (senza usare .reverse()).
const input = [1, 2, 3, 4];

const reverseInput = [];

for(let i=0; i<input.length; i++){
    reverseInput[i] = input[input.length-1-i]
}
console.log(reverseInput)


// ========== ESE 4 ========== //

// Trova il minimo
// Obiettivo: Stampare il valore più piccolo in un array di numeri.
const numeri_2 = [45, 2, 89, 3, 22];
let minimo = numeri_2[0];

for(let i=0; i<numeri_2.length; i++){
    if(minimo > numeri_2[i]){
        minimo = numeri_2[i];
    }
}
console.log(minimo)
// Output atteso: 2


// ========== ESE 5 ========== //

// Somma degli indici dispari
// Obiettivo: Sommare i numeri che si trovano in posizioni dispari dell’array.

const arr = [10, 20, 30, 40, 50, 60];
let sommaDispari_1 = 0;
for(let i=1; i<arr.length; i+=2){
        sommaDispari_1+=arr[i];
}
console.log(sommaDispari_1)
// Output atteso: 20 + 40 + 60 = 120


// ========== ESE 6 ========== //

// Differenza tra max e min
// Obiettivo: Calcolare la differenza tra il numero più grande e quello più piccolo in un array.
const numeri_3 = [5, 12, 3, 20, 8];

let minimo_2 = numeri_3[0];
let massimo = numeri_3[0];

for(let i=0; i<numeri_3.length; i++){
    if(minimo_2 > numeri_3[i]) minimo_2 = numeri_3[i];
    if(massimo < numeri_3[i]) massimo = numeri_3[i]
}
console.log(massimo - minimo_2)
// Output atteso: 20 - 3 = 17


// ========== ESE 7 ========== //

// Conta booleani veri
// Obiettivo: Contare quanti elementi true ci sono in un array di booleani.
const flags = [true, false, true, true, false];
let contatoreFlags = 0;
for(let i=0; i<flags.length; i++){
    if(flags[i]) contatoreFlags++;
}
console.log(contatoreFlags)
// Output atteso: 3


// ========== ESE 8 ========== //

// 8. Crea un nuovo array con i doppi
// Obiettivo: Creare un array in cui ogni numero è il doppio di quello originale. (senza uso di .map)

const numeri_4 = [1, 2, 3, 4];
const numeriDoppi = [];

for(let i=0; i<numeri_4.length; i++){
    numeriDoppi[i] = numeri_4[i] * 2;
}
console.log(numeriDoppi)
// Output atteso: [2, 4, 6, 8]


// ========== ESE 9 ========== //

// Conta le vocali in una parola
// Obiettivo: Data una stringa, contare quante vocali contiene (a, e, i, o, u). PS: che cosa succede se qualche vocale è maiuscola? 😉
const parola = "elefante";
const vocali = "aeiou";
let contatoreVocali = 0;
for(let i=0; i<parola.length; i++){
    for(let j=0; j<vocali.length; j++){
        if(vocali[j] === parola[i]){
            contatoreVocali++;
        }
    }
}
console.log(contatoreVocali)
// Output atteso: 4


// ========== ESE 10 ========== //

// Rimuovi i duplicati da un array (senza .filter o Set)
// Obiettivo: Creare un nuovo array che contiene ogni valore una sola volta.
const input_2 = [1, 2, 2, 3, 1, 4];
const duplicati = [];

for(let i=0; i<input_2.length;i++){
    let contatoreDuplicati = 0;
    let elemento = input_2[i];

    for(j=i;j<input_2.length;j++){
        if(elemento === input_2[j]){
            contatoreDuplicati++;
        }
    }
    if(contatoreDuplicati < 2){
        duplicati.push(elemento);
    }
}   


console.log(duplicati)
// Output atteso: [1, 2, 3, 4]


// ========== ESE 11 ========== //

// Conta quanti numeri sono maggiori della media
// Obiettivo: Calcolare la media dei numeri, poi contare quanti sono sopra la media.

const numeri_5 = [5, 10, 15, 20, 25];
let media = 0;
let contatoreMedia = 0;

for(let i=0; i<numeri_5.length; i++){
    media+=numeri_5[i]
}
media/= numeri_5.length;

for(let i=0; i<numeri_5.length; i++){
    if(numeri_5[i] < media){
        contatoreMedia++;
    }
}
console.log(media);
console.log(contatoreMedia)
// Media = 15 → Output atteso: 2 (20 e 25)


// ========== ESE 12 ========== //

// Somma delle cifre di un numero
// Obiettivo: Sommare tutte le cifre di un numero (es: 472 → 4+7+2)


const numero_6 = 472;
let stringa = numero_6.toString();
let somma = 0;
const numeriSeparati = []
for(let i=0; i<stringa.length; i++){
    numeriSeparati.push(Number(stringa[i]));
}
for(let i=0; i<numeriSeparati.length; i++){
    somma+=numeriSeparati[i];
}
console.log(somma)
// Output atteso: 13


// ========== ESE 13 ========== //

// Trova il secondo numero più grande
// Obiettivo: Trovare il secondo valore più grande in un array.


const numeri_7 = [10, 40, 30, 20];

let biggestNumber = 0;
let secondBiggest = 0;
for(let i=0; i<numeri_7.length; i++){
    if(biggestNumber<numeri_7[i]){
        biggestNumber = numeri_7[i];
    }
}
for (let i=0; i<numeri_7.length; i++){
    if(numeri_7[i]===biggestNumber){
        numeri_7.splice(i, 1);
    }
}
for(let i=0; i<numeri_7.length; i++){
    if(secondBiggest<numeri_7[i]){
        secondBiggest = numeri_7[i];
    }
}
console.log(secondBiggest)

    // Output atteso: 30


// ========== ESE 14 ========== //

// Conta la somma dei numeri dispari in un array misto
// Obiettivo: Calcolare la somma solo dei numeri dispari in un array che contiene anche stringhe o altri tipi.


const dati = [3, "ciao", 4, true, 7, 2];
let sommaDispari_2 = 0;
for(let i=0; i<dati.length; i++){
    if(typeof dati[i] == "number" && (dati[i] %2 !== 0)){
        sommaDispari_2 = sommaDispari_2 + dati[i];
    }
}
console.log(sommaDispari_2)
// Output atteso: 10 (3 + 7)


// ========== ESE 15========== //

// 15. Trova la parola più lunga in un array di stringhe
//Obiettivo: Restituire la stringa più lunga da un array.


const parole = ["sole", "albero", "casa", "elefante"];
let longestWord ="";

for(let i=0; i<parole.length; i++){
    if(longestWord.length < parole[i].length){
        longestWord = parole[i];
    }
}
console.log(longestWord)
// Output atteso: "elefante"


// ========== ESE 16 ========== //

// 16. Verifica se un array è ordinato in modo crescente
// Obiettivo: Controllare se i numeri sono in ordine crescente.


const numeri = [1, 2, 3, 4, 5]; // Output: true
const altri = [1, 3, 2]; // Output: false

let isSortedNumeri;

for(let i=1; i<numeri.length; i++){
    if(numeri[i-1]<numeri[i]){
        isSortedNumeri = true;
    }else{
        isSortedNumeri = false;
        break;
    }
}
for(let i=1; i<altri.length; i++){
    if(altri[i-1]<altri[i]){
        isSortedAltri = true;
    }else{
        isSortedAltri = false;
        break;
    }
}
console.log(isSortedNumeri);
console.log(isSortedAltri);


// ========== ESE 17 ========== //


// Somma delle posizioni pari ma solo se il numero è dispari
// Obiettivo: Sommare tutti i numeri che si trovano in posizione pari (0, 2, 4…) ma solo se il numero è dispari.


const arr_2 = [1, 4, 3, 6, 5, 8]; 

let sommaPariDispari = 0;

for(let i=0; i<arr_2.length; i+=2){
    if(arr_2[i]%2!==0){
        sommaPariDispari+=arr_2[i];
    }
}
console.log(sommaPariDispari);
// Posizioni pari: 1 (dispari), 3 (dispari), 5 (dispari) → Somma: 1 + 3 + 5 = 9

