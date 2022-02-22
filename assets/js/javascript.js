const botaoN = document.querySelector('#Negativo');
const botaoP = document.querySelector('#Positivo');
const botaoC = document.querySelector('#Crescente');
const botaoD = document.querySelector('#Decrescente');

botaoP.addEventListener('click', function() {
    document.querySelector('#numero1').setAttribute('min','0');
    document.querySelector('#numero2').setAttribute('min','0');
    document.querySelector('#numero1').setAttribute('max','100');
    document.querySelector('#numero2').setAttribute('max','100');
})
botaoN.addEventListener('click', function() {
    document.querySelector('#numero1').setAttribute('max','0');
    document.querySelector('#numero2').setAttribute('max','0');
    document.querySelector('#numero1').setAttribute('min','-100');
    document.querySelector('#numero2').setAttribute('min','-100');
})
// Easter Egg
document.querySelector('#bola_verde').addEventListener('click', function(){
    document.querySelector('#bola_verde').style.backgroundColor = 'green';
});
document.querySelector('#bola_amarela').addEventListener('click', function(){
    document.querySelector('#bola_amarela').style.backgroundColor = 'yellow';
});
document.querySelector('#bola_vermelha').addEventListener('click', function(){
    document.querySelector('#bola_vermelha').style.backgroundColor = 'red';
});