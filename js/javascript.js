function timeur() {
  var seconde = bSeconde.innerHTML;
  var minute = bMinute.innerHTML;
  var heur = bHeur.innerHTML;
  seconde--;

  if (seconde < 0) {
    minute--;
    seconde = 60;
  }
  if (minute < 0) {
    heur--;
    minute = 60;
  }

  bSeconde.innerHTML = seconde;
  bMinute.innerHTML = minute;
  bHeur.innerHTML = heur;

  if (heur == 0 && minute == 0 && seconde == 0) {
    clearInterval(play);
  }
}

var bSeconde = document.getElementById('seconde');
var bMinute = document.getElementById('minute');
var bHeur = document.getElementById('heur');

bHeur.innerHTML = '0';
bMinute.innerHTML = '1';
bSeconde.innerHTML = '60';

var play = setInterval(timeur, 10);
