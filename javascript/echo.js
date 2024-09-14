let circulo = document.getElementById('circulo');
let pulgar = document.getElementById('pulgar');
let texto = document.getElementById('texto');

circulo.addEventListener('animationend', function () {
    // No es necesario hacer nada aquí
});

setTimeout(function () {
    circulo.style.opacity = 0;
    pulgar.style.stroke = '#000000';
    pulgar.style.fill = '#FFFFFF';
    texto.style.color = '#fff';
}, 7000);

setTimeout(function () {
    window.location.href = "index.html";
}, 10000);
