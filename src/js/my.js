window.addEventListener('DOMContentLoaded', () => {

  const accordion = document.getElementsByClassName("filter__label");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function (e) {

      const label = e.target,
        parentElement = label.parentElement,
        listElement = label.nextElementSibling;

      if (parentElement.classList.contains('filter-is-open')) {
        parentElement.classList.remove('filter-is-open');
        listElement.style.maxHeight = '0px';
      } else {
        parentElement.classList.add('filter-is-open');
        listElement.style.maxHeight = '1000px';
      }

      this.classList.toggle("filter-active");

    });
  }



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
        max-height:145px;
      `;

      item.parentElement.classList.add('category-hidden');
    }

    btnShowMore.addEventListener('click', () => {
      item.style.cssText = `
          max-height:1000px;
        `;

      item.parentElement.classList.remove('category-hidden');
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

});