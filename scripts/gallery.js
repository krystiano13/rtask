const images = document.querySelector('.Gallery__images');
const popUpGalleryImage = document.querySelector('.GalleryPopup__images__image');
const popUpButtonLeft = document.querySelector('#popUpLeft');
const popUpButtonRight = document.querySelector("#popUpRight");
const popUpHideButton = document.querySelector(".GalleryPopup__bar__btn");
const popUpSection = document.querySelector('.GalleryPopup');

let popUpImageId = 1;

const macy = Macy({
    container: images,
    margin: 50,
    columns: 3,
    breakAt: {
        992: {
            columns : 1
        }
    }
});

const hidePopUp = () => {
    popUpSection.classList.add('hidden');
}

const showPopUp = () => {
  popUpSection.classList.remove("hidden");
};

const handleShowPopUp = (e) => {
    if (e.target.tagName === "IMG") {
        const id = Number(e.target.id);
        popUpImageId = id;

        popUpGalleryImage.src = `./assets/galleryImages/gallery${popUpImageId}.webp`;
        showPopUp();
    }
}

const changeImage = (left) => {
    if (left && popUpImageId > 1) {
        popUpImageId--;
    }
    else if (!left && popUpImageId < 12) {
      popUpImageId++;
    }

    popUpGalleryImage.src = `./assets/galleryImages/gallery${popUpImageId}.webp`;
}

popUpButtonLeft.addEventListener('click', () => changeImage(true));
popUpButtonRight.addEventListener('click', () => changeImage(false));
popUpHideButton.addEventListener('click', () => hidePopUp());
images.addEventListener('click', (e) => handleShowPopUp(e));