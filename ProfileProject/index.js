//TypewriterJS Section
var app = document.getElementById('intro');

var typewriter = new Typewriter(app, {
    loop: false,
    delay: 30,
});

var language = $('#language').text()

if (language == "Desenvolvedor Web") {
    typewriter.typeString("Sou um jovem brasileiro apaixonado por tecnologia, atualmente embarcando em minha jornada profissional. Minha fascinação por este campo tem suas raízes no mundo dos jogos eletrônicos, especialmente em J-RPGs como Chrono Trigger e Final Fantasy, os quais deixaram uma marca em minha infância.")
        .pauseFor(1000)
        .typeString("<br/>Estou em busca de oportunidades para desenvolver minhas habilidades na área de programação. Mais do que um salário, busco uma experiência que me permita aprender de forma dinâmica, enquanto me divirto e sou desafiado no mercado.")
        .start();
    } else {
        typewriter.typeString("I am a young Brazilian passionate about technology, currently embarking on my professional journey. My fascination with this field has its roots in the world of electronic games, especially in J-RPGs like Chrono Trigger and Final Fantasy, which left a mark on my childhood.")
        .pauseFor(1000)
        .typeString("<br/>I am seeking opportunities to develop my skills in the programming field. More than just a salary, I am looking for an experience that allows me to learn dynamically, while having fun and being challenged in the market.")
        .start();
    }