/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



// MANDATORY TASKS

let ads = document.querySelector(".promo")
let genreText = document.querySelector(".promo__genre")
let promoBg = document.querySelector(".promo__bg")

promoBg.style.background = "url(./img/bg.jpg)"
promoBg.style.backgroundSize = "cover"
promoBg.style.backgroundposition = "center"

// console.log(promoBg);

genreText.innerHTML = "Драма"
ads.lastElementChild.style.display = "none"



// DALER AKA'S TASKS

const categories = document.querySelectorAll(".promo__menu-list a")
const promoActive = document.querySelector(".promo__menu-item_active")
const trashBin = document.querySelectorAll(".delete")

categories.forEach(item => {
    item.classList.remove("promo__menu-item_active")
    item.onclick = () => {
        categories.forEach(categ => {
            categ.classList.remove("promo__menu-item_active")
        })
        item.classList.add("promo__menu-item_active")
    }
})

trashBin.forEach(btn => {
    btn.onclick = () => {
        btn.parentNode.style.display = "none"
    }
})

// console.log(categories);
// console.log(promoActive);
// console.log(trashBin);