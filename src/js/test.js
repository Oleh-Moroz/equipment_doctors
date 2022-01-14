const searchInput = document.querySelector('.header-search_input'),
    clearButton = document.querySelector('.clear_search-input'),
    searchDropdown = document.querySelector('.header-search-dropdown'),
    searchForm = document.querySelector('.header-search_form'),
    searchResults = searchDropdown.querySelector('.header-search-list ul');

function openedSearchDropdown() {
    let inputValue = searchInput.value;

    searchForm.classList.add('search-active');
    searchResults.innerHTML = `<li><a href="view/product/search.html?s=${inputValue}">${inputValue}</a></li>`;
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
        window.location.href = `view/product/search.html?s=${inputValue}`;
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


/* 
    Test search article

--------------------------------------*/
const searchArticleInput = document.querySelector('.article-search_input'),
    searchArticleForm = document.querySelector('.search-block_form');
    
if (searchArticleInput) {
    searchArticleForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        let inputValue = searchArticleInput.value;
        if (searchArticleInput.value) {
            window.location.href = `/view/blog/blog-category.html?s=${inputValue}`;
        } else {
            window.location.href = `/view/blog/blog-no-result.html`;
        }
    });
}


/*
    Test forgot password

----------------------------------------------*/
const forgotEmailInput = document.querySelector('input[data-name="forgot-email"]'),
        verificationInput = document.querySelector('input[data-name="verification-code"]'),
        resendButton = document.querySelector('.resend-code'),
        passwordInput = document.querySelector('input[name="password"]'),
        reenterPasswordInput = document.querySelector('input[name="reenter-password"]'),
        baseForm = document.querySelector('.pop-up-form');

if (forgotEmailInput) {
    baseForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        let forgotEmailInputValue = forgotEmailInput.value;
        if (forgotEmailInput.value) {
            window.location.href = `/view/account/forgot-password-verification.html?email=${forgotEmailInputValue}`;
        } else {
            forgotEmailInput.classList.add('error');
        }
    });
}

if (verificationInput) {
    baseForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        if (verificationInput.value.length >= 4) {
            window.location.href = `/view/account/forgot-password-aprove.html`;
        } else {
            verificationInput.classList.add('error');
        }
    });

    resendButton.addEventListener('click', () => {
        window.location.href = `/view/account/forgot-password.html`;
    });
}

if (reenterPasswordInput) {
    baseForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        if (passwordInput.value > 1 && reenterPasswordInput.value > 1 && reenterPasswordInput.value == passwordInput.value) {
            window.location.href = `/view/account/login.html`;
        } else {
            if (passwordInput.value < 1) {
                passwordInput.classList.add('error');
            } else if (reenterPasswordInput.value < 1 && passwordInput.value > 1) {
                passwordInput.classList.remove('error');
                reenterPasswordInput.classList.add('error');
            } else {
                passwordInput.classList.add('error');
                reenterPasswordInput.classList.add('error');
            }
        }
    });
}