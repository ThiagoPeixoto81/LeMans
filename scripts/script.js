//Pega os elementos
let yearButton = document.querySelectorAll(".year-btn");
let show = document.querySelector(".info-section");
let car_image = document.querySelector(".carro-img");
let info = document.querySelector(".info-text");
//Pegando o JSON
fetch("/scripts/winners.json")
    .then(res => res.json())
    .then(lemans => {
        // Ativação da div com as informações dos carros
        var lastcliked = 0;
        for (let i in yearButton) {
            yearButton[i].addEventListener("click", () => {
                if (yearButton[i].dataset.year == lastcliked) {
                    show.classList.remove("on")
                    lastcliked = 0;

                } else {

                    for (let pos in lemans.winners) {
                        if (lemans.winners[pos].year == yearButton[i].dataset.year) {

                            info.children[0].innerText = `${lemans.winners[pos].year}`;
                            info.children[1].innerHTML = `<strong>CARRO - </strong>${lemans.winners[pos].name.toUpperCase()}`;
                            info.children[2].innerHTML = `<strong>TIME - </strong>${lemans.winners[pos].constructors.toUpperCase()}`;
                            info.children[3].innerHTML = `<strong>PILOTOS:</strong><br>${lemans.winners[pos].drivers.toUpperCase()}`;

                            car_image.src = `${lemans.winners[pos].img_src}`;
                            info.children[4].src = `${lemans.winners[pos].con_src}`;

                            show.classList.add("on");
                            lastcliked = yearButton[i].dataset.year;
                        }
                    }

                }

            })
        }
    })
