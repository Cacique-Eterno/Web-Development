//Definição das variáveis principais
const links = document.querySelectorAll('.link');
const content = document.getElementById('content');
const returnButton = document.getElementById('return');
const profile = document.getElementById('profile');
var language = document.documentElement.lang;
var initContent = content.innerHTML;

//Definição das variáveis com funções secundárias
const level = document.getElementById('level');
const birthday = document.getElementById('birthday');
const year = document.getElementById('year');
const audio = new Audio('sound/finalFantasy.mp3');
var chocobo = document.getElementById('chocobo');
var musicButton = document.getElementById('musicButton')

function setInitContent() {
    initContent = content.innerHTML;
};

//Tocar música
audio.loop = true;
function playMusic() {
    // Verifica se o áudio está pausado
    if (audio.paused) {
        // Se estiver pausado, inicia a reprodução
        audio.play();
        chocobo.src = "./img/chocobo.gif"
        musicButton.src = "./img/music.png"
    } else {
        // Se estiver reproduzindo, pausa a reprodução
        audio.pause();
        chocobo.src = "./img/chocobo.png"
        musicButton.src = "./img/mute.png"
    }
};

//Adicionando data automaticamente
level.innerText = new Date().getFullYear() - 2003;
birthday.innerText = "17/02/" + new Date().getFullYear();
year.innerText = new Date().getFullYear();

//Muda o Idioma entre português e Inglês
function changeLanguage(languageSelected) {
    if (languageSelected == 'pt-br') {
        language = 'en';
        content.innerHTML = 
            `All copyrights of the music and images used on this website belong to Square Enix.
            <div class="copyright"> © ${year.innerText} Caio. All rights reserved. </div>`;
        setInitContent();
        profile.innerHTML = 
            `<img src="./img/caio.jpg" id="pic">
            <div>
                <h3>Web Developer</h3>
                <h1>Caio</h1>
                <p>HP 999/999 </br> Lv ${level.innerText} Next level in ${birthday.innerText}</p>
            </div>
            <img src="./img/Brazil.png" class="flag" onclick="changeLanguage()">
            <img src="./img/USA.png" class="flag" onclick="changeLanguage('pt-br')">`;
        document.getElementById("about").innerText = 'About';
        document.getElementById("education").innerText = 'Education';
        document.getElementById("portfolio").innerText = 'Portfolio';
        document.getElementById("contact").innerText = 'Contact';
        document.title = "Caio's Sheet";
        visibleButton(true);
    } else {
        language = 'pt-br'
        content.innerHTML = 
            `Todos os direitos autorais das músicas e imagens utilizadas neste site pertencem à Square Enix.
            <div class="copyright"> © ${year.innerText} Caio. Todos os direitos reservados. </div>`;
        setInitContent();
        profile.innerHTML = 
            `<img src="./img/caio.jpg" id="pic">
            <div>
                <h3>Desenvolvedor Web</h3>
                <h1>Caio</h1>
                <p>PV 999/999 </br> Nv ${level.innerText} Próximo nível em ${birthday.innerText}</p>
            </div>
            <img src="./img/Brazil.png" class="flag" onclick="changeLanguage()">
            <img src="./img/USA.png" class="flag" onclick="changeLanguage('pt-br')">`;
        document.getElementById("about").innerText = 'Sobre mim';
        document.getElementById("education").innerText = 'Formação';
        document.getElementById("portfolio").innerText = 'Portfólio';
        document.getElementById("contact").innerText = 'Contato';
        document.title = 'Ficha do Caio';
        visibleButton(true);
    }
};

//Faz com que o botão de retorno apareça
function visibleButton (hidden) {
    if (hidden) {
        returnButton.setAttribute('hidden', 'true');
    } else {
        returnButton.removeAttribute('hidden');
    }
}

//Botão de Retorno
returnButton.addEventListener('click', () => {
    content.innerHTML = initContent;
    visibleButton(true);
});

//Itera sobre todos os elementos com a classe '.link'
links.forEach(function(link) {
    link.addEventListener('click', () => {
        //Seção experimental do typewriter
        var typewriter = new Typewriter(content, {
            loop: false,
            delay: 40,
        });
        //Utilizando o id de cada link, exibe textos diferentes
        var id = link.id;
        //Identificando se os textos vão estar em português ou inglês
        if (language == 'pt-br') {
            switch (id) {
                case 'about':
                    typewriter.typeString("Sou um jovem brasileiro apaixonado por tecnologia, atualmente embarcando em minha jornada profissional. Minha fascinação por este campo tem suas raízes no mundo dos jogos eletrônicos, especialmente em J-RPGs como Chrono Trigger e Final Fantasy, os quais deixaram uma marca em minha infância.")
                    .pauseFor(1000)
                    .typeString("<br/>Estou em busca de oportunidades para desenvolver minhas habilidades na área de programação.")
                    .start();
                break;
                case 'education':
                    typewriter.typeString("Sou formado como técnico em Desenvolvimento de Sistemas pela ETE Ministro Fernando Lyra e atualmente estou cursando Tecnologia em Análise e Desenvolvimento de Sistemas na Uninter.")
                    typewriter.typeString("<br/>Tenho fluência em Português, inglês avançado e espanhol intermediário.")
                    .start();
                break;
                case 'portfolio':
                    typewriter.typeString("Segue alguns de meus projetos no GitHub:")
                    .typeString('<br/><a href="https://caioltg.github.io/Web-Development/DiceeChallenge/dicee.html" target="_blank">Jogo de Dados</a>')
                    .typeString('<br/><a href="https://caioltg.github.io/Web-Development/DrumKitProject/index.html" target="_blank">Bateria Online</a>')
                    .typeString('<br/><a href="https://caioltg.github.io/Web-Development/SimonGameChallenge/index.html" target="_blank">Simon Mandou</a>')
                    .typeString('<br/><a href="https://caioltg.github.io/Web-Development/TinDogProject/index.html" target="_blank">Tindog, o Tinder pra Cachorro</a>')
                    .start();
                break;
                case 'contact':
                    typewriter.typeString('Email para contato: caiolucas.tg@proton.me')
                    .typeString('<br/>Número (Whatsapp): +55 (81) 99384-1132')
                    .typeString('<br/><a href="https://www.linkedin.com/in/caio-lucas-04b606271/" target="_blank">Clique aqui para o LinkedIn</a>')
                    .typeString('<br/><a href="https://github.com/CaioLTG" target="_blank">Clique aqui para o GitHub</a>')
                    .start();
                break;
                default:
            }
        //Textos em inglês pelo typeWriter
        } else { 
            switch (id) {
                case 'about':
                    typewriter.typeString("I am a young Brazilian passionate about technology, currently embarking on my professional journey.<br/>My fascination with this field has its roots in the world of electronic games, especially in J-RPGs like Chrono Trigger and Final Fantasy, which left a mark on my childhood.")
                    .pauseFor(1000)
                    .typeString("<br/>I am seeking opportunities to develop my skills in the programming field.")
                    .start();
                break;
                case 'education':
                    typewriter.typeString("I hold a Technical Degree in Systems Development from ETE Ministro Fernando Lyra and I am currently pursuing a Technology degree in Systems Analysis and Development at Uninter.")
                    typewriter.typeString("<br/>Fluent in Portuguese, advanced in English, and intermediate in Spanish.")
                    .start();
                break;
                case 'portfolio':
                    typewriter.typeString("Here are some of my projects on GitHub:")
                    .typeString('<br/><a href="https://caioltg.github.io/Web-Development/DiceeChallenge/dicee.html" target="_blank">Dice Game</a>')
                    .typeString('<br/><a href="https://caioltg.github.io/Web-Development/DrumKitProject/index.html" target="_blank">Online Drum Kit</a>')
                    .typeString('<br/><a href="https://caioltg.github.io/Web-Development/SimonGameChallenge/index.html" target="_blank">Simon Says</a>')
                    .typeString('<br/><a href="https://caioltg.github.io/Web-Development/TinDogProject/index.html" target="_blank">Tindog, the Tinder for Dogs</a>')
                    .start();

                break;
                case 'contact':
                    typewriter.typeString('Contact Email: caiolucas.tg@proton.me')
                    .typeString('<br/>Phone (Whatsapp): +55 (81) 99384-1132')
                    .typeString('<br/><a href="https://www.linkedin.com/in/caio-lucas-04b606271/" target="_blank">Click here for LinkedIn</a>')
                    .typeString('<br/><a href="https://github.com/CaioLTG" target="_blank">Click here for GitHub</a>')
                    .start();
                break;
                default:
            }
        }
        setTimeout(function() {
            visibleButton(false);
        }, 5000); // Espera 5 segundos para que o botão apareça
    });
});