'use strict'

window.addEventListener('DOMContentLoaded', () => {

  const accordion = document.querySelectorAll(".accordion__label");

  function openAccordion(item) {

    const label = item,
      parentElement = label.parentElement,
      listElement = label.nextElementSibling;

    if (parentElement.classList.contains('accordion-is-open')) {
      parentElement.classList.remove('accordion-is-open');
      listElement.style.maxHeight = '0px';

      listElement.style.cssText = `
          overflow-y: hidden;
        `;
    } else {
      parentElement.classList.add('accordion-is-open');

      listElement.style.cssText = `
        max-height: 1000px;
      `;

      setTimeout(() => {
        listElement.style.cssText = `
          overflow-y: auto;
        `;
      }, 400);

    }

    label.classList.toggle("accordion-active");
  }

  accordion.forEach(item => {
    item.addEventListener('click', () => {
      openAccordion(item);
    });
  });

  /*  Category menu 
    
  ---------------------------*/

  const categoryMenu = document.querySelector("#category-menu"),
    categoryButton = document.querySelector("#category-menu_button"),
    menuWrap = document.querySelector(".category-navbar"),
    menuItem = document.querySelectorAll(".category-navbar ul li");

  function openMenu(item) {
    item.addEventListener('mouseover', () => {
      categoryButton.classList.add('button-active');
      document.querySelector('body').classList.add('body-oveflow');
      categoryMenu.style.setProperty('display', 'block');
      categoryMenu.style.setProperty('border', '1px solid #CCCCCC');
      categoryMenu.classList.add('active');
    });
  }

  openMenu(categoryButton);
  openMenu(categoryMenu);

  categoryMenu.addEventListener('mouseout', () => {
    categoryButton.classList.remove('button-active');
    document.querySelector('body').classList.remove('body-oveflow');
    categoryMenu.style.setProperty('display', 'none');
    categoryMenu.style.setProperty('border', '0px solid transparent');
    categoryMenu.classList.remove('active');
  });

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      menuItem.forEach(sibling => {
        if (sibling.classList.contains('show')) {
          sibling.classList.remove('show');
        }
      });

      item.classList.add('show');
    });
  });



  /* 
  Category page menu 

  --------------------------------*/

  const categoryChild = document.querySelectorAll('.category-page_menu__child');

  categoryChild.forEach((item) => {
    const childNodes = item.querySelectorAll('li'),
      btnShowMore = item.parentElement.querySelector('.show-more');

    if (childNodes.length > 5) {

      item.style.cssText = `
        max-height: 160px;
      `;

      item.parentElement.classList.add('category-more-child');
    }

    btnShowMore.addEventListener('click', () => {
      if (!item.parentElement.classList.contains('category-more-child-active')) {
        item.style.cssText = `
          max-height: 1000px;
        `;
        item.parentElement.classList.add('category-more-child-active');

        setTimeout(() => {
          btnShowMore.innerText = 'Hide';
        }, 200);
      } else {
        item.parentElement.classList.remove('category-more-child-active');

        item.style.cssText = `
          max-height: 160px;
        `;

        setTimeout(() => {
          btnShowMore.innerText = 'Show more';
        }, 400);
      }
    });
  });

  const colMenuWrap = document.querySelectorAll('.col-menu ul li'),
    contentWrap = document.querySelectorAll('.tab-content');

  for (let i = 0; i < colMenuWrap.length; i++) {
    colMenuWrap[i].addEventListener('click', () => {
      colMenuWrap.forEach((item) => {
        item.classList.remove('show');
      });

      contentWrap.forEach((item) => {
        item.classList.remove('tab-show');
      });

      colMenuWrap[i].classList.add('show');

      contentWrap[i].classList.add('tab-show');
    });
  }


  /*
  Slider dots

  ----------------------------------- */

  function sliderDotsChanger() {
    let dots, observerConfig, dotsObserver;

    dots = document.querySelectorAll('.slider-pagination span');

    observerConfig = {
      attributes: true,
      attributeOldValue: false,
    };

    let changer = document.querySelector('.slider__dots__changer'),
      checked = document.querySelector('.swiper-pagination-bullet-active');

    if (changer) {
      changer.style.setProperty('left', `${checked.offsetLeft}px`);
      document.querySelector('.slider-pagination').appendChild(changer);
    }

    dotsObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        let changer = document.querySelector('.slider__dots__changer');

        if (mutation.attributeName === "aria-current") {

          if (changer.offsetLeft < mutation.target.offsetLeft) {
            changer.style.setProperty('width', `${mutation.target.offsetLeft - changer.offsetLeft + changer.offsetWidth}px`);

            setTimeout(() => {
              changer.style.setProperty('left', `${mutation.target.offsetLeft}px`);
              changer.style.setProperty('width', '10px');
            }, 150);

            changer.style.setProperty('visibility', 'visible');

          }

          if (changer.offsetLeft > mutation.target.offsetLeft) {
            changer.style.setProperty('left', `${mutation.target.offsetLeft}px`);
            changer.style.setProperty('width', `${changer.offsetLeft - mutation.target.offsetLeft + changer.offsetWidth}px`);

            changer.style.setProperty('visibility', 'visible');

            setTimeout(() => {
              changer.style.setProperty('width', '10px');
            }, 150);
          }
        }
      });
    });

    dots.forEach((item) => {
      dotsObserver.observe(item, observerConfig);
    });
  };

  sliderDotsChanger();

  /* 
  Lightbox

  --------------------------------*/

  lightbox.option({
    'resizeDuration': 150,
    'wrapAround': true
  });


  /* 
  Tabs

  --------------------------------*/

  const tabs = document.querySelectorAll('.product-tab-row ul li'),
    tabsContent = document.querySelectorAll('.tab-content');

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
      tabs.forEach((item) => {
        item.classList.remove('active');
      });

      tabsContent.forEach((item) => {
        item.classList.remove('tab-show');
      });

      tabs[i].classList.add('active');

      tabsContent[i].classList.add('tab-show');
    });
  }

  /*
  Pop up

  -----------------------------*/

  const modalCloseBtn = document.querySelectorAll('[data-close]'),
    popUps = document.querySelectorAll('.pop-up-wrap');

  function openModal(popUp) {
    popUps.forEach(item => {
      item.classList.remove('active');
    });

    document.querySelector(popUp).classList.add('active');

  }

  function closeModal() {
    popUps.forEach(item => {
      item.classList.remove('active');
    });
  }

  modalCloseBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      closeModal();
    });
  });

  document.addEventListener('keydown', (e) => {
    popUps.forEach(active => {
      if (e.code === 'Escape' && active.classList.contains('active')) {
        closeModal();
      }
    });
  });


  /*

    Pop up quickView

  -------------------------------------*/

  function quickView() {

    const request = new XMLHttpRequest();

    const viewPopUp = document.createElement('div'),
      viewPopUpContent = document.createElement('div'),
      viewPopUpClose = document.createElement('button');

    viewPopUp.classList.add('pop-up-wrap', 'active', 'pop-up-quick-view');
    viewPopUpContent.classList.add('pop-up-content');
    viewPopUpClose.classList.add('close-pop-up');
    viewPopUpClose.setAttribute('data-close', '');

    document.body.append(viewPopUp);
    viewPopUp.appendChild(viewPopUpContent);
    viewPopUpContent.appendChild(viewPopUpClose);

    viewPopUpClose.innerHTML = '<i class="far fa-times-circle" aria-hidden="true"></i>';

    viewPopUpClose.addEventListener('click', () => {
      viewPopUp.remove();
    });

    request.open('GET', '/view/product/product.html');

    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const doc = new DOMParser().parseFromString(this.responseText, "text/html"),
          imageBlock = doc.querySelector('.image-product-block'),
          textBlock = doc.querySelector('.text-product-block');

        viewPopUpContent.appendChild(imageBlock);
        viewPopUpContent.appendChild(textBlock);

        productImageSlider('horizontal');
      }
    }

    request.send(null);
  }

  /*
    Product page slider

  --------------------------------------*/
  function productImageSlider(direction) {
    let swiperThumb = new Swiper(document.getElementById('product-thumb-slider'), {
      spaceBetween: 10,
      slidesPerView: 4,
      direction: direction,
      mousewheel: true,
    });
    let swiperImage = new Swiper(document.getElementById('product-image-slider'), {
      spaceBetween: 10,
      direction: direction,
      mousewheel: true,
      thumbs: {
        swiper: swiperThumb,
      },
    });
  }

  productImageSlider('vertical');


  /* Contact form checked Privacy Policy

  --------------------------------------------*/

  const checkboxPolicy = document.querySelector('#checked-policy'),
    formButton = document.querySelector('.button-group input[type="submit"]');

  if (checkboxPolicy) {
    checkboxPolicy.addEventListener('click', () => {
      if (checkboxPolicy.checked == true) {
        formButton.removeAttribute('disabled');
      } else {
        formButton.setAttribute('disabled', '');
      }
    });
  }

  const inputSubscribe = document.querySelector('.subscribe-news-form .form-group input[type="email"]');

  if (inputSubscribe) {
    inputSubscribe.addEventListener('input', () => {
      let inputSubscribeValue = inputSubscribe.value;

      if (inputSubscribeValue) {
        formButton.removeAttribute('disabled');
      } else {
        formButton.setAttribute('disabled', '');
      }
    });
  }


  /* 
    Order tabs filter

  --------------------------------------*/

  const filterTabs = document.querySelectorAll('.orders-filter-tabs ul li a'),
    filterItem = document.querySelectorAll('.account-orders-table .accordion__list > li');

  for (let i = 0; i < filterTabs.length; i++) {
    filterTabs[i].addEventListener('click', (e) => {
      e.preventDefault();
      let tabLocation = filterTabs[i].getAttribute("href").slice(1);

      filterTabs.forEach(item => {
        item.parentElement.classList.remove('active');
      });

      filterTabs[i].parentElement.classList.add('active');

      if (tabLocation == 'all-orders') {
        filterItem.forEach(item => {
          item.classList.add('active');
        });
      } else {
        filterItem.forEach(item => {
          item.classList.remove('active');
        });
      }

      const filterItemActive = document.querySelectorAll(`[data-status='${tabLocation}']`);

      filterItemActive.forEach(item => {
        item.classList.add('active');
      });
    })
  }

/*
    Returns checkbox 

----------------------------------------*/

const mainReturnsCheckbox = document.querySelectorAll('.order-returs-header input[type="checkbox"]'),
      seconndProductCheckbox = document.querySelectorAll('.returs-order-list li input[type="checkbox"]');

  mainReturnsCheckbox.forEach(input => {
    input.addEventListener('click', () => {
     let parentReturnsCheckbox = input.parentElement,
        parentReturnsSibling = parentReturnsCheckbox.nextElementSibling,
        childReturnsCheckbox = parentReturnsSibling.querySelectorAll('li input[type="checkbox"]');

      if (input.checked) {
        childReturnsCheckbox.forEach(childInputs => {
          childInputs.checked = true;
        })
      } else {
        childReturnsCheckbox.forEach(childInputs => {
          childInputs.checked = false;
        })
      }
    });
  });


  seconndProductCheckbox.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
      let parentReturnsCheckbox = checkbox.parentElement.parentElement,
          checkboxArray = parentReturnsCheckbox.querySelectorAll('input[type="checkbox"]'),
          checkboxCheckedArray = parentReturnsCheckbox.querySelectorAll('input[type="checkbox"]:checked'),
          mainGroupCheckbox = parentReturnsCheckbox.previousElementSibling.querySelector('input[type="checkbox"]');

      if (checkboxArray.length == checkboxCheckedArray.length) {
        mainGroupCheckbox.checked = true;
      } else {
        mainGroupCheckbox.checked = false;
      }

    });
  });


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
      pageText.innerHTML = `This window empty, because<br> you didn’d do any activities`;
      pageIco.innerHTML = `<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#order-empty"></use>
          </svg>`;
    } else if (url == 'returns') {
      pageTitle.innerText = 'Returned order detail';
      pageText.innerHTML = `This window empty, because<br> you didn’d retun any items`;
      pageIco.innerHTML = `<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#order-empty"></use>
          </svg>`;
      pageButton.innerText = 'Return Items';

      pageButton.setAttribute('href', '/view/account/returns.html?url=new-return');
    } else if (url == 'wallets') {
      pageTitle.innerText = 'My wallets';
      pageText.innerHTML = `This window empty, because<br> you didn’d add payment method`;
      pageIco.innerHTML = `<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#order-wallets"></use>
          </svg>`;
    } else if (url == 'addresses') {
      pageTitle.innerText = 'Delivery Addresses';
      pageText.innerHTML = `This window empty, because<br> you didn’d add address`;
      pageIco.innerHTML = `<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#order-addresses"></use>
          </svg>`;
    } else if (url == 'wish-list') {
      pageTitle.innerText = 'Wish List';
      pageText.innerHTML = `This window empty, because<br> you didn’d add it`;
      pageIco.innerHTML = `<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#order-wish-list"></use>
          </svg>`;
    } else if (url == 'recently-viewed') {
      pageTitle.innerText = 'Recently Viewed';
      pageText.innerHTML = `This window empty, because<br> you didn’d view product`;
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
        }
      });
    } else if (url == 'wish-list.html' || url == 'empty.html?url=wish-list') {
      activeLink.forEach(item => {
        let hrefAttribute = item.getAttribute('href');
        if (hrefAttribute == '/view/account/empty.html?url=wish-list') {
          item.parentElement.classList.add('show');
        }
      });
    } else if (url == 'recently-viewed.html' || url == 'empty.html?url=recently-viewed') {
      activeLink.forEach(item => {
        let hrefAttribute = item.getAttribute('href');
        if (hrefAttribute == '/view/account/empty.html?url=recently-viewed') {
          item.parentElement.classList.add('show');
        }
      });
    }
  }

  changesActiveItem(pageUrl);


  /*
    Select list 

  ---------------------------------------*/

  const selectList = document.querySelectorAll('.select-list');

  function showSelectDropdown() {
    selectList.forEach(list => {
      const selectInput = list.querySelector('input'),
            selectDropdown = list.querySelector('ul'),
            selectDropdownItem = selectDropdown.querySelectorAll('li'); 

      selectInput.addEventListener('click', (e) => {
        e.preventDefault();

        selectDropdown.parentElement.classList.toggle('active');
        selectDropdown.classList.toggle('show');
      });

      selectDropdownItem.forEach(item => {
        item.addEventListener('click', () => {
          selectInput.value = item.innerText;
          item.classList.add('active');
          selectDropdown.classList.toggle('show');
          selectDropdown.parentElement.classList.toggle('active');
        });
      });

      window.addEventListener('click', function (e) {
        if (!selectDropdown.contains(e.target) && !selectInput.contains(e.target)) {
            selectDropdown.classList.remove('show');
            selectDropdown.parentElement.classList.remove('active');
        }
      });
    });
  }

  showSelectDropdown();

  /*
        Returns step form

  -----------------------------------*/

  const buttonNext = document.querySelector('button[data-type="next-step"]'),
        stepText = document.querySelector('.returnt-current-step'),
        allSteps = document.querySelectorAll('[data-tab-step]'),
        allStepsText = document.querySelector('.return-all-steps');

  function showSteps(Step, currentStep) {

    let currentTab = [...document.querySelector('[data-tab-step="current"]').children];

    buttonNext.setAttribute('data-step', Step);

    stepText.innerText = Step;
    stepText.setAttribute('data-step', Step);

    allSteps[+currentStep - 1].setAttribute('data-tab-step', 'prev');
    allSteps[+currentStep].setAttribute('data-tab-step', 'current');

    currentTab.forEach(child => {
      if (child.getAttribute('data-tab-step') === 'current') {
        child.parentElement.setAttribute('data-tab-step', 'current');
      }
    });

  }

  if (buttonNext) {
    allStepsText.innerText = allSteps.length;

    buttonNext.addEventListener('click', (e) => {
      let stepNumber = buttonNext.getAttribute('data-step'),
          nextStep = +stepNumber + 1;
  
          if (stepNumber == allSteps.length - 1) {
            e.preventDefault();
            showSteps(nextStep, stepNumber);
  
            buttonNext.innerText = 'Submit';
          } else if (stepNumber == allSteps.length) {
            e.preventSubmit();
          } else {
            e.preventDefault();
            showSteps(nextStep, stepNumber);
          }
    });
  }



  /*
          Add listener for buttons

  ------------------------------*/

  function addedListener() {
    const quickViewButton = document.querySelectorAll('.button-view'),
      addFeedbackButton = document.querySelector('.add-feedback'),
      replyFeedbackButton = document.querySelectorAll('.reply-button button'),
      returnButton = document.querySelector('.return-button');

    if (addFeedbackButton) {
      addFeedbackButton.addEventListener('click', () => {
        openModal('#feedback-pop-up');
      });
    }

    if (quickViewButton) {
      quickViewButton.forEach(button => {
        button.addEventListener('click', () => {
          quickView();
        })
      });
    }

    if (replyFeedbackButton) {
      replyFeedbackButton.forEach(button => {
        button.addEventListener('click', () => {
          openModal('#reply-feedback');
        });
      })
    }

    if (returnButton) {
      returnButton.addEventListener('click', () => {
        document.querySelector('.pop-up-wrap').classList.add('active');
      });
    }
  }

  addedListener();
});