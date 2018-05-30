var wins=0;
var loses=0;
var guessesLeft= 10;
var lettersUsed=[];
var wordBank= ["BMW M", "Porsche", "NISSAN GTR","DODGE Viper"];

var wordPicked= wordBank[Math.floor(Math.random() * wordBank.length)];


console.log(wordPicked)