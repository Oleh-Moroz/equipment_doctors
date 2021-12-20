/*
  redirect 

  --------------------------*/

  window.addEventListener('DOMContentLoaded', () => {
    const searchTitleValue = window.location.href.toString(),
            searchTitle = searchTitleValue.split("build")[1];

    window.location.href = `https://oleh-moroz.github.io/equipment_doctors/build/${searchTitle}`;
});

/*
    end redirect

    -----------------------------*/


const searchInput = document.querySelector('.header-search_input'),
    clearButton = document.querySelector('.clear_search-input'),
    searchDropdown = document.querySelector('.header-search-dropdown'),
    searchForm = document.querySelector('.header-search_form'),
    searchResults = searchDropdown.querySelector('.header-search-list ul');

function openedSearchDropdown() {
    let inputValue = searchInput.value;

    searchForm.classList.add('search-active');
    searchResults.innerHTML = `<li><a href="/view/product/search.html?s=${inputValue}">${inputValue}</a></li>`;
    if (searchDropdown.classList.contains('open-no-results')) {
        searchDropdown.classList.remove('open-no-results');
        searchDropdown.classList.add('open');
    } else {
        searchDropdown.classList.add('open');
    }
}

function removedSearchDropdown() {
    searchForm.classList.remove('search-active');
    if (searchDropdown.classList.contains('open-no-results')) {
        searchDropdown.classList.remove('open-no-results');
        searchDropdown.classList.remove('open');
    } else {
        searchDropdown.classList.remove('open');
    }
    searchResults.querySelectorAll('li').forEach(item => {
        item.remove()
    });
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let inputValue = searchInput.value;
    if (searchInput.value) {
        window.location.href = `/view/product/search.html?s=${inputValue}`;
    } else {
        searchForm.classList.add('search-active');
        searchDropdown.classList.add('open-no-results');
    }
});

searchInput.addEventListener('input', () => {
    let inputValue = searchInput.value;

    if (inputValue) {
        openedSearchDropdown();
    } else {
        removedSearchDropdown();
    }
});

clearButton.addEventListener('click', () => {
    searchInput.value = '';
    removedSearchDropdown();
});