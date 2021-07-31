let popupButton = document.querySelector(".info__edit-button");
let closeButton = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");
let nameElement = document.querySelector(".info__title");
let jobElement = document.querySelector(".info__subtitle");
// Находим форму в DOM
let formElement = document.querySelector(".popup__form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup__input-name"); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".popup__input-job"); // Воспользуйтесь инструментом .querySelector()

function openPopup() {
  popup.classList.add("popup_opend");
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
}
function closePopup() {
  popup.classList.remove("popup_opend");
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  // Вставьте новые значения с помощью textContent
  closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);
popupButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
