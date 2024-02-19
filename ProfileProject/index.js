// Inicializando o TypewriterJS
var app = document.getElementById('intro');

var typewriter = new Typewriter(app, {
    loop: false,
    delay: 30,
});

typewriter.typeString("Sou um jovem brasileiro apaixonado por tecnologia, atualmente embarcando em minha jornada profissional. Minha fascinação por este campo tem suas raízes no mundo dos jogos eletrônicos, especialmente em J-RPGs como Chrono Trigger e Final Fantasy, os quais deixaram uma marca em minha infância.")
    .pauseFor(1000)
    .typeString("<br/>Estou em busca de oportunidades para desenvolver minhas habilidades na área de programação. Mais do que um salário, busco uma experiência que me permita aprender de forma dinâmica, enquanto me divirto e sou desafiado no mercado.")
    .start();
