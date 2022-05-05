const searchInput = document.querySelector('.header-search_input'),
  clearButton = document.querySelector('.clear_search-input'),
  searchDropdown = document.querySelector('.header-search-dropdown'),
  searchForm = document.querySelector('.header-search_form'),
  searchList = searchDropdown.querySelector('.header-search-list'),
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

  if (searchResults.children.length > 0) {
    document.querySelector('.header-search-list > a').style.display = 'block';
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
    item.remove();
  });

  document.querySelector('.header-search-list > a').style.display = 'none';
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
  const clearArticleSearchButton = searchArticleForm.querySelector('.clear_search-input');

  searchArticleForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let inputValue = searchArticleInput.value;
    if (searchArticleInput.value) {
      window.location.href = `/view/blog/blog-category.html?s=${inputValue}`;
    } else {
      window.location.href = `/view/blog/blog-no-result.html`;
    }
  });

  searchArticleInput.addEventListener('input', () => {
    if (searchArticleInput.value > 0) {
      clearArticleSearchButton.style.cssText = 'color: #bea063; opacity: 1; visibility: visible;';
    }
  });

  clearArticleSearchButton.addEventListener('click', () => {
    searchArticleInput.value = '';

    clearArticleSearchButton.style.cssText = '';
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

/* 
  Checkout

-------------------------*/

const addCheckoutButtons = document.querySelectorAll('button[data-toggle="add-to-cart"]'),
  checkoutModal = document.querySelector('.pop-up-checkout');

addCheckoutButtons.forEach(button => {
  button.addEventListener('click', () => {
    checkoutModal.classList.add('active');
  });
});


/*

      Address page script

  ------------------------------------*/

const addressInputs = document.querySelectorAll('.address-list_item .form-group input'),
  saveAddressButton = document.querySelector('button[data-toggle="save-address"]'),
  addressTextArea = document.querySelectorAll('.address-list_item .form-group textarea'),
  selectList = document.querySelectorAll('.select-list');

if (saveAddressButton) {
  saveAddressButton.addEventListener('click', (e) => {
    e.preventDefault();

    location.href = '/view/account/addresses-list.html';
  });
}

if (addressInputs.length > 0) {
  document.querySelector('.cancel-button').addEventListener('click', () => {
    location.reload();
  });

  addressInputs.forEach(item => {
    item.addEventListener('input', () => {
      document.querySelectorAll('.address-list_item').forEach(list => {
        if (list.classList.contains('active')) {
          list.classList.remove('active');
        }
      });
      item.closest('.address-list_item').classList.add('active');
    });
  });

  addressTextArea.forEach(item => {
    item.addEventListener('input', () => {
      document.querySelectorAll('.address-list_item').forEach(list => {
        if (list.classList.contains('active')) {
          list.classList.remove('active');
        }
      });
      item.closest('.address-list_item').classList.add('active');
    });
  });

  selectList.forEach(listItem => {

    listItem.addEventListener('click', (e) => {
      if (e.target.closest('ul li')) {
        document.querySelectorAll('.address-list_item').forEach(list => {
          if (list.classList.contains('active')) {
            list.classList.remove('active');
          }
        });
        listItem.closest('.address-list_item').classList.add('active');
      }
    });
  });
}

const buttonWishlistModal = document.querySelector('.button-wishlist'),
  WishlistModal = document.querySelectorAll('.wishlist-modal');

if (buttonWishlistModal) {
  buttonWishlistModal.addEventListener('click', () => {
    WishlistModal.forEach(modal => {
      modal.classList.toggle('active');
    });
  });
}


/*
         Empty account page script

 ------------------------------*/

const pageTitle = document.querySelector('.account-container-header h1'),
  pageIco = document.querySelector('.accounts-empty-ico'),
  pageText = document.querySelector('.account-empty-text'),
  pageButton = document.querySelector('.account-container-header a'),
  pageLink = window.location.href.toString().split("?url=")[1];

function changesEmpryContent(url) {
  if (url == 'order') {
    pageTitle.innerText = 'Orders';
    pageText.innerHTML = `This window empty, because<br> you didn’t do any activities`;
    pageIco.innerHTML = `<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#order-empty"></use>
          </svg>`;
  } else if (url == 'returns') {
    pageTitle.innerText = 'Returned order detail';
    pageText.innerHTML = `This window empty, because<br> you didn’t retun any items`;
    pageIco.innerHTML = `<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#order-empty"></use>
          </svg>`;
    pageButton.innerText = 'Return Items';

    pageButton.setAttribute('href', '/view/account/returns.html?url=new-return');
  } else if (url == 'wallets') {
    pageTitle.innerText = 'My wallets';
    pageText.innerHTML = `This window empty, because<br> you didn’t add payment method`;
    pageIco.innerHTML = `<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#order-wallets"></use>
          </svg>`;
  } else if (url == 'addresses') {
    pageTitle.innerText = 'Delivery Addresses';
    pageText.innerHTML = `This window empty, because<br> you didn’t add address`;
    pageIco.innerHTML = `<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#order-addresses"></use>
          </svg>`;
  } else if (url == 'wish-list') {
    pageTitle.innerText = 'Wish List';
    pageText.innerHTML = `This window empty, because<br> you didn’t add it`;
    pageIco.innerHTML = `<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#order-wish-list"></use>
          </svg>`;
  } else if (url == 'recently-viewed') {
    pageTitle.innerText = 'Recently Viewed';
    pageText.innerHTML = `This window empty, because<br> you didn’t view product`;
    pageIco.innerHTML = `<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#order-recently-viewed"></use>
          </svg>`;
  } else if (url == 'new-return') {
    document.querySelector('.pop-up-wrap').classList.add('active');
  }
}

changesEmpryContent(pageLink);

/*
    Account menu 

------------------------------------------*/

const activeLink = document.querySelectorAll('.account-menu ul li ul li a'),
  pageUrl = window.location.href.toString().split("/account/")[1];

function changesActiveItem(url) {
  if (url == 'order.html' || url == 'empty.html?url=order') {
    activeLink.forEach(item => {
      let hrefAttribute = item.getAttribute('href');
      if (hrefAttribute == '/view/account/order.html') {
        item.parentElement.classList.add('show');
      }
    });
  } else if (url == 'returns.html' || url == 'empty.html?url=returns') {
    activeLink.forEach(item => {
      let hrefAttribute = item.getAttribute('href');
      if (hrefAttribute == '/view/account/empty.html?url=returns') {
        item.parentElement.classList.add('show');
      }
    });
  } else if (url == 'wallets.html' || url == 'empty.html?url=wallets') {
    activeLink.forEach(item => {
      let hrefAttribute = item.getAttribute('href');
      if (hrefAttribute == '/view/account/empty.html?url=wallets') {
        item.parentElement.classList.add('show');
      }
    });

    if (url == 'empty.html?url=wallets') {
      let headerPageLink = document.querySelector('.base-button');
      headerPageLink.innerText = 'Add payment method';
      headerPageLink.setAttribute('href', '/view/account/wallets.html');
    }

  } else if (url == 'personal-info.html') {
    activeLink.forEach(item => {
      let hrefAttribute = item.getAttribute('href');
      if (hrefAttribute == '/view/account/personal-info.html') {
        item.parentElement.classList.add('show');
      }
    });
  } else if (url == 'addresses.html' || url == 'empty.html?url=addresses') {
    activeLink.forEach(item => {
      let hrefAttribute = item.getAttribute('href');
      if (hrefAttribute == '/view/account/empty.html?url=addresses') {
        item.parentElement.classList.add('show');

        let headerPageLink = document.querySelector('.base-button');
        headerPageLink.setAttribute('href', '/view/account/addresses.html');
      }
    });
  } else if (url == 'wish-list.html' || url == 'empty.html?url=wish-list') {
    activeLink.forEach(item => {
      let hrefAttribute = item.getAttribute('href');
      if (hrefAttribute == '/view/account/empty.html?url=wish-list') {
        item.parentElement.classList.add('show');
      }

      let headerPageLink = document.querySelector('.base-button');
      headerPageLink.innerText = 'Create new List';
      headerPageLink.setAttribute('href', '/view/account/wish-list.html');
    });
  } else if (url == 'recently-viewed.html' || url == 'empty.html?url=recently-viewed') {
    activeLink.forEach(item => {
      let hrefAttribute = item.getAttribute('href');
      if (hrefAttribute == '/view/account/empty.html?url=recently-viewed') {
        item.parentElement.classList.add('show');
      }
    });

    let headerPageLink = document.querySelector('.base-button');
    headerPageLink.setAttribute('href', '/view/account/recently-viewed.html');
  }
}

changesActiveItem(pageUrl);

const buttonAddNewWishList = document.querySelector('button[data-listener="new-wishlist"]'),
  wishListForm = document.querySelector('.wish-list-form-wrap');

if (buttonAddNewWishList) {
  buttonAddNewWishList.addEventListener('click', (e) => {
    e.target.setAttribute('disabled', '');
    wishListForm.style.display = "flex";
  });
}


/*
    Test wishlist 

------------------------------------------*/

const createWishlistButton = document.querySelector('button[data-toogle="create-wishlist"]'),
  wishlistName = document.querySelector('.wish-list-form input');

if (createWishlistButton) {
  let wishlistSliderId = 0;


  createWishlistButton.addEventListener('click', () => {
    wishlistSliderId += 1;

    const wishlistNameRow = document.createElement('div'),
      newWishlistBlock = document.createElement('div'),
      newWishlistWrap = document.createElement('div'),
      newWishlistSlider = document.createElement('div');

    let wishlistCheckbox = document.querySelectorAll('.wish-list-product-checkbox input:checked'),
      newWishlistName = wishlistName.value;

    if (newWishlistName && wishlistCheckbox.length > 0) {
      wishlistNameRow.classList.add('row', 'row-wrap', 'wish-list-wrap');
      newWishlistBlock.classList.add('wish-list-wrap');
      newWishlistWrap.classList.add('product-slider');
      newWishlistWrap.setAttribute('id', `wishlist-slider-${wishlistSliderId}`);
      newWishlistSlider.classList.add('swiper-wrapper');

      wishlistNameRow.innerHTML = `
                    <div class="wish-list-header">
                      <div class="wish-list-checkbox">
                        <input type="checkbox" id="wish-list-${wishlistSliderId}" name="wish-list-${wishlistSliderId}">
                        <label for="wish-list-${wishlistSliderId}">
                          <i class="fas fa-check"></i>
                        </label>
                      </div>
                      <h3>${newWishlistName}</h3>
                      <div class="payment-item-buttons">
                        <button data-listener="edit-wishlist">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <use href="#payment-edit"></use>
                            </svg>
                        </button>
                        <button data-listener="remove-wishlist">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <use href="#payment-remove"></use>
                            </svg>
                        </button>
                      </div>
                    </div>`;

      document.querySelector('.account-container').appendChild(wishlistNameRow);
      wishlistNameRow.appendChild(newWishlistBlock);
      newWishlistBlock.appendChild(newWishlistWrap);
      newWishlistWrap.appendChild(newWishlistSlider);

      for (let checkbox of wishlistCheckbox) {
        newWishlistSlider.appendChild(checkbox.parentNode.parentNode);
        checkbox.checked = false;
      }

      wishListForm.style.display = 'none';
      wishlistName.value = '';
    }

    buttonAddNewWishList.removeAttribute('disabled');

    const listWprap = document.querySelectorAll('.swiper-wrapper');

    listWprap.forEach(list => {
      if (list.children.length == 0) {
        list.closest('.wish-list-wrap').remove();
      }
    });
  });
}


if (document.querySelector('.cancel-button')) {
  document.querySelector('.cancel-button').addEventListener('click', () => {
    location.reload();
  });
}

/*

  Wishlist page

-----------------------*/

document.querySelectorAll('button[data-listener="remove-wishlist"]').forEach(item => {
  item.addEventListener('click', (e) => {
    let target = e.target.parentElement;
  
    let list = target.parentNode.closest('.wish-list-wrap');
  
    list.remove();
  });
});


document.querySelectorAll('.product-icon__row button').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.alert').classList.add('alert-dismissible');

    setTimeout(() => {
      document.querySelector('.alert').classList.remove('alert-dismissible');
    }, 5000);

    document.querySelector('button[data-dismiss="alert"]').addEventListener('click', () => {
      document.querySelector('.alert').classList.remove('alert-dismissible');
    })
  });
});