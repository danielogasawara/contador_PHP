const botaoN = document.querySelector('#Negativo');
const botaoP = document.querySelector('#Positivo');
const botaoC = document.querySelector('#Crescente');
const botaoD = document.querySelector('#Decrescente');
var easterEgg = 0;
botaoP.addEventListener('change', function() {
    document.querySelector('#numero1').setAttribute('min','0');
    document.querySelector('#numero2').setAttribute('min','0');
    document.querySelector('#numero1').setAttribute('max','100');
    document.querySelector('#numero2').setAttribute('max','100');
})
botaoN.addEventListener('change', function() {
    document.querySelector('#numero1').setAttribute('max','0');
    document.querySelector('#numero2').setAttribute('max','0');
    document.querySelector('#numero1').setAttribute('min','-100');
    document.querySelector('#numero2').setAttribute('min','-100');
})
// Easter Egg
document.querySelector('#bola_verde').addEventListener('click', function(){
    let verde;
    if (verde == undefined && easterEgg == 0) {
        verde ++;
        easterEgg ++;
    }
});
document.querySelector('#bola_amarela').addEventListener('click', function(){
    let amarelo;
    if (amarelo == undefined && easterEgg == 2) {
        amarelo ++;
        easterEgg ++;
    }
    surpresa();
});
document.querySelector('#bola_vermelha').addEventListener('click', function(){
    let vermelho;
    if (vermelho == undefined && easterEgg == 1) {
        vermelho ++;
        easterEgg ++;
    }
});
function surpresa() {
    if (easterEgg == 3) {
        window.open('https://www.youtube.com/watch?v=C1Sd_RWF5ks');
        easterEgg = 0;
    } else {
        easterEgg = 0;
    }
}
   
