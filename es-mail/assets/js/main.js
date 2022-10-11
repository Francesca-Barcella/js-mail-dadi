/******************************
TRACCIA MAIL
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. 
*******************************/

// caltrimenti dare messaggio "non sei iscritto alla nostra newsletter" (else);

// creare una lista array racchiusa in una variabile con all'interno un elenco di indirizzi;
const mailingList = [
    'pollon.fra@gmail.com',
    'francesca@unrealtraining.it',
    'kadiya1979@libero.it',
    'mario.rossi@alice.it',
    'committa&pusha@boolean.careers'
]
//console.log(mailingList);

//chiedere all'utente di inserire la sua mail (prompt)
const userMail = prompt('Inserisci il tuo indirizzo email');
//console.log('la tua email è: ', userMail);

// creare ciclo for
// controllare se l'indirizzo è nella lista e dare messaggio "sei iscritto alla nostra newsletter" (for + if);
 for (let i = 0; i < mailingList.length; i++) {
    const newsLetter = (mailingList[i]);
    //console.log('questo è il logo dentro al ciclo for', newsLetter);
    if (userMail === newsLetter) {
        console.log('Sei già iscritto alla nostra newsletter');
    } else {
        console.log('Non sei ancora iscritto alla nostra newsletter');
    }
 }