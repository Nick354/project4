let popupButton = document.querySelector(".info__edit-button");
let closeButton = document.querySelector(".popup__close");
let popup = document.querySelector(".popup");
let saveButton = document.querySelector(".popup__save-btn");

function togglePopup() {
  popup.classList.toggle("popup_opend");
}

popupButton.addEventListener("click", togglePopup);
closeButton.addEventListener("click", togglePopup);

// Находим форму в DOM
let formElement = document.querySelector(".popup__form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup__input-name"); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".popup__input-job"); // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  let nameElement = document.querySelector(".info__title");
  let jobElement = document.querySelector(".info__subtitle");

  // Получите значение полей jobInput и nameInput из свойства value

  // Выберите элементы, куда должны быть вставлены значения полей
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  // Вставьте новые значения с помощью textContent
  togglePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);
