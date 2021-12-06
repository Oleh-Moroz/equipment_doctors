window.addEventListener('DOMContentLoaded', () => {
  const accordion = document.getElementsByClassName("filter__label");

        
  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function(e) {

      const label = e.target,
            parentElement = label.parentElement,
            listElement = label.nextElementSibling;
    
      if ( parentElement.classList.contains('filter-is-open') ) {
        parentElement.classList.remove('filter-is-open');
        listElement.style.maxHeight = '0px';
      }
      else {
        parentElement.classList.add('filter-is-open');
        listElement.style.maxHeight = '1000px';
      }

      this.classList.toggle("filter-active");

    });
  }

  /*  Category menu */

  const categoryMenu = document.querySelector("#category-menu"),
        categoryButton = document.querySelector("#category-menu_button"),
        menuWrap = document.querySelector(".category-navbar"),
        menuItem = document.querySelectorAll(".category-navbar ul li");

  function openMenu(item) {
    item.addEventListener('mouseover', () => {
      categoryButton.classList.add('button-active');
      document.querySelector('body').classList.add('body-oveflow');
      /*categoryMenu.style.height = `${menuWrap.offsetHeight}px`;*/
      categoryMenu.style.setProperty('border', '1px solid #CCCCCC');
      categoryMenu.classList.add('active');

      /*minHeight();*/
    });
  }

  openMenu(categoryButton);
  openMenu(categoryMenu);

  categoryMenu.addEventListener('mouseout', () => {
    categoryButton.classList.remove('button-active');
    document.querySelector('body').classList.remove('body-oveflow');
    /*categoryMenu.style.height = `${menuWrap.offsetHeight}px`;*/
    categoryMenu.style.setProperty('border', '0px solid transparent');
    categoryMenu.classList.remove('active');
  });

  /*function minHeight() {
    let menuChildItem = document.querySelector(".show ul").offsetHeight,
    minHeight = 50;

    if (menuChildItem > minHeight) {
      minHeight = menuChildItem;
      menuWrap.style.minHeight = `${minHeight}px`;
    }
  }*/

  menuItem.forEach(item => {
    item.addEventListener('click', () => {
      menuItem.forEach(sibling => {
        if (sibling.classList.contains('show')) {
          sibling.classList.remove('show');
        }
      });
      
      item.classList.add('show');
      /*minHeight();*/
    });
  });

});



/*
Slider dots

----------------------------------- */


/*let checked = null;
let changer = null;
let clickStopper = false;
let slide = null;

const dotChanger = (event) => {
  if (clickStopper) return false;
  else clickStopper = true;
  let target = event.target;
  changer.style.setProperty('visibility', 'visible');
  if (slide.getAttribute('data-swiper-slide-index') < checked.indexOf(dot)) 
    changer.style.setProperty('width', `${target.offsetLeft - checked.offsetLeft + checked.offsetWidth}px`);
  else {
    changer.style.setProperty('left', `${target.offsetLeft}px`);
    changer.style.setProperty('width', `${checked.offsetLeft - target.offsetLeft + target.offsetWidth}px`);
  };
  setTimeout(()=>{
    if (checked.offsetLeft < target.offsetLeft) changer.style.setProperty('left', `${target.offsetLeft}px`);
    changer.style.removeProperty('width');
    setTimeout(()=>{
      changer.style.removeProperty('visibility');
      checked = target;
      clickStopper = false;
    }, 500);
  }, 500)
}

document.querySelectorAll('.swiper-slide').forEach(slide=>{
//  dot.addEventListener('click', dotChanger);

  if (clickStopper) return false;
    else clickStopper = true;
    let target = event.target;
    changer.style.setProperty('visibility', 'visible');
    if (slide.getAttribute('data-swiper-slide-index') < checked.indexOf()) 
      changer.style.setProperty('width', `${target.offsetLeft - checked.offsetLeft + checked.offsetWidth}px`);
    else {
      changer.style.setProperty('left', `${target.offsetLeft}px`);
      changer.style.setProperty('width', `${checked.offsetLeft - target.offsetLeft + target.offsetWidth}px`);
    };
    setTimeout(()=>{
      if (checked.offsetLeft < target.offsetLeft) changer.style.setProperty('left', `${target.offsetLeft}px`);
      changer.style.removeProperty('width');
      setTimeout(()=>{
        changer.style.removeProperty('visibility');
        checked = target;
        clickStopper = false;
      }, 500);
    }, 500)
});


checked = document.querySelector('.swiper-pagination-bullet-active');
changer = document.querySelector('.slider__dots__changer');
changer.style.setProperty('left', `${checked.offsetLeft}px`);*/

