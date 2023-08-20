const images = document.querySelector('.Gallery__images');
const popUpGalleryImage = document.querySelector('.GalleryPopup__images__image');
const popUpButtonLeft = document.querySelector('#popUpLeft');
const popUpButtonRight = document.querySelector("#popUpRight");

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