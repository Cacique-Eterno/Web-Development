let pixelBoard = document.querySelector("#pixel-board");
let selectedColor = document.querySelector(".selected");
selectedColor.style.backgroundColor = "black";
let pincel = document.querySelector('.selected').classList[1];
let clearButton = document.querySelector("#clear-board");
let listOfColors = document.querySelectorAll('.color');
let generateButton = document.querySelector("#generate-board");

function createPixels(quantity) {
    for (let i = 0; i < quantity * quantity; i++) {
        let pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.backgroundColor = "white";
        pixelBoard.appendChild(pixel);
        //Selecionando todos os pixels e permitindo pintá-los
        let listOfPixels = document.querySelectorAll('.pixel');
        for (let pixel of listOfPixels) {
            pixel.addEventListener('click', event => {
                event.target.style.backgroundColor = pincel;
            })
        }

        //Botão para limpar o quadro
        clearButton.addEventListener('click', () => {
            for (let pixel of listOfPixels) {
                pixel.style.backgroundColor = 'white';
            }
        })
    }
}

//Função que aleatoriza as cores

function generateRGB() {return Math.floor(Math.random() * 251)};

function randomColor (el) {
    el.style.backgroundColor = `rgb(${generateRGB()} ${generateRGB()} ${generateRGB()})`;
}

window.onload = () => {
    //Aleatorizando as cores
    for (let index = 1; index < document.querySelectorAll(".color").length; index ++) {
        randomColor(document.querySelectorAll(".color")[index]);
    }

    //Adicionando evento para interar entre todas as cores
    listOfColors.forEach(item => {
        item.addEventListener('click', event => {
            for (let index = 0; index < listOfColors.length; index++) {
                if (listOfColors[index].classList.contains("selected")) {
                    listOfColors[index].classList.remove("selected");
                }
            }
            event.target.classList.add("selected");
            pincel = event.target.style.backgroundColor;
        })
    })

    //Chamando a função ao carregar a página
    createPixels(5)

    //Permitindo que o usuário altere o tamanho da tabela de pixels
    generateButton.addEventListener("click", () => {
        let entry = document.querySelector("#board-size").value;
        if (entry === "") {
            alert("Board inválido!")
        } else {
            //Primeiro apagar tudo para depois adicionar mais
            let initialLength = pixelBoard.children.length;
            for (let index = 0; index < initialLength; index += 1) {
                pixelBoard.removeChild(pixelBoard.children[0]);
            }
            //Limitando o mínimo e máximo de pixels possíveis
            if (entry < 5) {
                createPixels(5);
            } else if (entry <= 50) {
                //Ajustando o tamanho do pixel-board
                document.getElementById("pixel-board").style.width = (entry*40) + (10*entry/5) + "px";
                createPixels(entry);
            } else {
                createPixels(50);
            }
        }
    })
};