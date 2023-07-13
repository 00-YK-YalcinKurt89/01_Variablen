"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hi");
// console.log(firstName);


/***** 02 Deklaration + Wertzuweisung I *******/


/*
let firstName, familyName;

firstName = prompt("Bitte Vornamen eingeben:");
familyName = prompt("Bitte Nachnamen eingeben:");

console.log(firstName + " " + familyName);
*/


// JS ist eine untypisierte Sprache! | untyped
let test;

// test = "Maxime";
// test = 2;
// test = false;


// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);



/************ 03a Variablen vs. Konstanten ************/

// let firstName = "Max"; // Deklaration + Wertzuweisung
// firstname ="Maxine";
// console.log(firstName); // Ausgabe

// const firstName = "Max"; // Variable mit KONSTANTEM Inhalt
// firstName = "Maxine"; // KEINE neue Zuweisung zur LZ möglich! --> Fehlermeldung
// console.log(firstName); // Ausgabe



/**************** 04 Beispiel - Berechnung ***************/

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 2000;
const birthYearMark = 1990;

let date = new Date(); // Die Daten kommen aus einer Systemfunktion 
let year = date.getFullYear(); // Daten liefern lassen!
ageJohn = 2023 - birthYearJohn;
ageMark = 2023 - birthYearMark;


console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);


