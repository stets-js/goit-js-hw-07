import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const body = document.querySelector("body");
//MARKUP
function makingGalleryMarkup(obj) {
  return obj
    .map(({ preview, original, description }) => {
      return `<ul class="gallery"><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a></ul>`;
    })
    .join("");
}

const galleryMarkup = makingGalleryMarkup(galleryItems);
gallery.innerHTML = galleryMarkup;

// USAGE
new SimpleLightbox(".gallery a", { captionDelay: 250 });
