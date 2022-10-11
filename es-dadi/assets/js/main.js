/**************************************** 
TRACCIA 2
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? 
*****************************************/

// 1 - generare un numero random da 1 6 per il palyer1 (math.random);
// 2 - stampo la giocata del player1
// 3 - generare un numero random da 1 6 per il computer (math.random)
// 4 - stampo la giocata del computer
// 5 - calcolo uale è il numero più alto(e qui mi vien da ridere!!)
// 6 - stampo il nome del vincitore con il numero abbinato


// 0 - creo i nomi dei giocatori
const playerName = prompt('Scrivi il tuo nome');
const playerNamePc = 'Computer'

// 1 - generare un numero random da 1 6 per il palyer1 (math.random);
const player1 = Math.floor(Math.random() * 6 +1);
// 2 - stampo la giocata del player1
console.log(playerName);
console.log(player1);

// 3 - generare un numero random da 1 6 per il computer (math.random);
const playerPc = Math.floor(Math.random() * 6 +1);
// 4 - stampo la giocata del computer
console.log(playerNamePc);
console.log(playerPc);
