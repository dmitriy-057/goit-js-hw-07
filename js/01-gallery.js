// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
import { galleryItems } from "./gallery-items.js";

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);
// const cardMarkup = createImagesCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML(
  "beforeend",
  createImagesCardsMarkup(galleryItems)
);
function createImagesCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    
        <a class="gallery__item" href=${original}>
            <img 
                class="gallery__image" src=${preview}
                data-source=${original}
                alt=${description} 
                
            />
        </a>
       `;
    })
    .join("");
}
// Реализация делегирования на div.gallery и получение url большого изображения.
galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(e) {
  e.target.preventDefault();
  const IsGalleryImage = e.target.classList.contains("gallery__image");
  if (!IsGalleryImage) {
    return;
  }
  e.target.dataset.source;
  // Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
  const instance = basicLightbox.create(
    `<img data-source=${original} width="800" height="600"/>`
  );
  instance.show();
}
