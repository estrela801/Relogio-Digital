const horas = document.querySelector('#horas')
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");

const relogio = setInterval(function time() {
    let datetoday = new Date()
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let seg = datetoday.getSeconds();

    if (horas > 10) hr = '0' + hr;

    document.querySelector("#horas").innerHTML = hr;
    document.querySelector("#minutos").innerHTML = min;
    document.querySelector("#segundos").innerHTML = seg;

    const audio = document.querySelector('#meuAudio')
    if (hr === 15 && min === 53 && seg === 0) {
        audio.play()
    }
    if (hr === 15 && min === 53 && seg === 15) {
        audio.pause()
    }
})