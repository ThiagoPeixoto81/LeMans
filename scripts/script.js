// Pegar as informações 
import * as win_info from './winners.js';

var winners = win_info.GetWinners();

//Pega os elementos
let yearButton = document.querySelectorAll(".year-btn");
let show = document.querySelector(".info-section")
let car_image = document.querySelector(".carro-img")
let year = document.querySelector(".year-info")
let car_name = document.querySelector(".car-name")
let team_name = document.querySelector(".team-name")
let drivers_name = document.querySelector(".drivers-name")
let logo = document.querySelector(".logo-img")

//Evento de ativação da Div
for (let i in yearButton) {
    yearButton[i].addEventListener("click", () => {
        for (let pos in winners) {
            if (winners[pos].year == yearButton[i].dataset.year) {
                var car = winners[pos];
            }
        }

        year.innerText = `${car.year}`
        car_name.innerHTML = `<strong>CARRO - </strong>${car.name.toUpperCase()}`
        team_name.innerHTML = `<strong>TIME - </strong>${car.constructors.toUpperCase()}`
        drivers_name.innerHTML = `<strong>PILOTOS:</strong><br>${car.drivers.toUpperCase()}`

        car_image.src = `${car.img_src}`
        logo.src = `${car.con_src}`


        show.classList.add("on")
        window.scrollTo(0, 0)

    })
}
