const images = document.querySelector('.Gallery__images');
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