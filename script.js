"use strisct";

const headerLogo = document.querySelector(".header__image");

basket = window.document.querySelector(".basket__products-block");
// МЕНЮ БУРГЕР
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
    document.getElementById("basket-hidden").classList.remove("hidden");
  });
});

const items = document.querySelectorAll(".questions__arrow");
for (let value of items) {
  value.classList.add("open");
}
// ВЕШАЕМ СОБЫТИЕ НА ПОПАПЫ - ВОПРОСЫ
for (let value of items) {
  value.addEventListener("click", function () {
    if (value.classList.contains("open")) {
      value.classList.remove("open");
      value.parentElement.insertAdjacentHTML(
        "afterEnd",
        `
                        <li class="questions__item item-open">
                          <p class="questions__quistion">
                            Возможно ли внести изменения в уже существующий проект? Если да,
                            то сколько это стоит?
                          </p>
                          <img
                            class="questions__arrow arrow-top"
                            src="images/arrow-top.svg"
                            alt=""
                          />
                        </li>
                    `
      );
      document
        .querySelector(".arrow-top")
        .addEventListener("click", function () {
          document.querySelector(".item-open").remove();
          value.classList.add("open");
        });
    }
  });
}
// ИНИЦИАЛИЗАЦИЯ МОДАЛЬНЫХ ОКОН
const modaleOne = document.getElementById("modals-1");
const modaleTwo = document.getElementById("modals-2");
const modaleThree = document.getElementById("modals-3");
const modaleFoo = document.getElementById("modals-4");
const modaleFive = document.getElementById("modals-5");
const modaleSix = document.getElementById("modals-6");
const modaleSeven = document.getElementById("modals-7");
const modaleEight = document.getElementById("modals-8");

// ПСЕВДОМАССИВ ИЗ КРЕСТИКОВ
const btnClose = document.querySelectorAll("[data-action]");

// ВЕШАЕМ НА ВСЕ КРЕСТИКИ СОБЫТИЕ ЗАКРЫТЬ ОКНО
for (value of btnClose) {
  value.addEventListener("click", function () {
    this.closest(".modal").classList.remove("opened");
  });
}

function addClass(modal) {
  modal.classList.add("opened");
}
window.addEventListener("click", function (event) {
  // ВЕШАЕМ СОБЫТИЕ НА ПОПАПЫ - ПОДРОБНЕЕ
  if (event.target.classList.contains("btn1")) {
    addClass(modaleOne);
  } else if (event.target.classList.contains("btn2")) {
    addClass(modaleTwo);
  } else if (event.target.classList.contains("btn3")) {
    addClass(modaleThree);
  } else if (event.target.classList.contains("btn4")) {
    addClass(modaleFoo);
  } else if (event.target.classList.contains("btn5")) {
    addClass(modaleFive);
  } else if (event.target.classList.contains("btn6")) {
    addClass(modaleSix);
  } else if (event.target.classList.contains("btn7")) {
    addClass(modaleSeven);
  } else if (event.target.classList.contains("btn8")) {
    addClass(modaleEight);
  }
  // ПРОВЕРЯЕМ ЧТО КЛИК БЫЛ СОВЕРШЕН ПО КНОПКЕ ДЛЯ ДОБАВЛЕНИЯ ЭЛЕМЕНТА В КОРЗИНУ
  if (event.target.hasAttribute("data-add")) {
    // НАХОДИМ ТОВАР
    const item = event.target.closest(".structure__item");
    const itemInfo = {
      id: item.dataset.id,
      title: item.querySelector(".structure__discr").innerText,
      price: item.querySelector(".structure__price").innerText,
    };
    const itemPattern = `<div class="basket__products-item ${itemInfo.id}">
    <h2 class="basket__products-title">${itemInfo.title}</h2>
    <div class="basket__products-row">
      <p class="basket__products-price">${itemInfo.price}</p>
        <img data-close
          class="basket__products-icon"
          src="images/cross.svg"
          alt=""
        />
    </div>
                    </div>`;
    document
      .getElementById("basket")
      .insertAdjacentHTML("beforeend", itemPattern);
    delete event.target.dataset.add;
    event.target.classList.add("buy");
    document;
  }
});
