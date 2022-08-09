import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

//MARKUP

function makingGalleryMarkup(obj) {
  return obj
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}" rel="nofollow">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

const galleryMarkup = makingGalleryMarkup(galleryItems);
gallery.innerHTML = galleryMarkup;

// MODAL

const onGalleryItemClick = function (event) {
  event.preventDefault();

  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  instance.show(() => {
    document.body.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        instance.close();
      }
      console.log(e);
    });
  });
};

gallery.addEventListener("click", onGalleryItemClick);
