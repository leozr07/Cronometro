let tempo = document.getElementById('tempo');
let iniciarBtn = document.getElementById('iniciar');
let pausarBtn = document.getElementById('pausar');
let pararBtn = document.getElementById('parar');
let cronometro;
let segundos = 0, minutos = 0, horas = 0;

function iniciarCronometro() {
  cronometro = setInterval(function() {
    segundos++;
    if(segundos === 60) {
      segundos = 0;
      minutos++;
      if(minutos === 60) {
        minutos = 0;
        horas++;
      }
    }
    tempo.textContent = `${horas < 10 ? '0' + horas : horas}:${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
  }, 1000);
  iniciarBtn.disabled = true;
  pausarBtn.disabled = false;
  pararBtn.disabled = false;
}

function pausarCronometro() {
  clearInterval(cronometro);
  iniciarBtn.disabled = false;
  pausarBtn.disabled = true;
}

function pararCronometro() {
  clearInterval(cronometro);
  horas = minutos = segundos = 0;
  tempo.textContent = '00:00:00';
  iniciarBtn.disabled = false;
  pausarBtn.disabled = true;
  pararBtn.disabled = true;
}

iniciarBtn.addEventListener('click', iniciarCronometro);
pausarBtn.addEventListener('click', pausarCronometro);
pararBtn.addEventListener('click', pararCronometro);
