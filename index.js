/*CALCOLO DEI NUMERI TRIANGOLARI PER INDUZIONE*/
function calcolo(n) {
  var ret = 0;
  //()?condizione di terminazione:passo ricorsivo/induttivo
  ret = (!n) ? 0 : calcolo(n - 1) + n;

  return ret;
}

var tn = Number(prompt("Inserisci il valore di T "));
//controlli di validità
if (!isNaN(tn) && tn >= 0) {
  var start = Date.now();//ms di inizio
  var ris = calcolo(tn);//computazione
  var end = Date.now();//ms fine

  console.log(ris);
  console.log("Calcolo eseguito in " + (end - start) + " millisecondi!");
} else {
  console.log("Il valore di n deve essere numerico e maggiore o uguale a 0");
}
