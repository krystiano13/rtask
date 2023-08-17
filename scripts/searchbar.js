const searchBar = document.querySelector("#searchBar");
const searchToggler = document.querySelector('#search-toggler');

const toggleSearchBar = () => {
    searchBar.classList.toggle('search-bar-hidden');
}

if (searchToggler && searchBar) {
    searchToggler.addEventListener("click", toggleSearchBar);
}
