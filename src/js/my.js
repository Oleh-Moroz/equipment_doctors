const accordion = document.getElementsByClassName("filter__label");

      
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function(e) {

    const label = e.target,
          parentElement = label.parentElement,
          listElement = label.nextElementSibling,
          listChild = listElement.querySelectorAll('li');

    let minHeight = 0;

    listChild.forEach(childElement => {
      let childHeight = childElement.offsetHeight;

      for (let i = 0; i < listElement.length; i++) {
        minHeight = minHeight + childHeight;
        console.log(minHeight);
      }
    });
  
    if ( parentElement.classList.contains('filter-is-open') ) {
      parentElement.classList.remove('filter-is-open');
    }
    else {
      parentElement.classList.add('filter-is-open');
    }

    this.classList.toggle("filter-active");

  });
}

/*  Category menu */

const categoryMenu = document.querySelector("#category-menu"),
      categoryButton = document.querySelector("#category-menu_button"),
      menuWrap = document.querySelector(".category-navbar"),
      menuItem = document.querySelectorAll(".category-navbar ul li");

categoryButton.addEventListener('mouseover', () => {
    categoryButton.classList.add('button-active');
    categoryMenu.style.height = `${menuWrap.offsetHeight}px`;

    minHeight();
});

categoryMenu.addEventListener('mouseover', () => {
  categoryButton.classList.add('button-active');
  categoryMenu.style.height = `${menuWrap.offsetHeight}px`;

  minHeight();
});

categoryMenu.addEventListener('mouseout', () => {
  categoryButton.classList.remove('button-active');
  categoryMenu.style.height = `0px`;
});

function minHeight() {
  let menuChildItem = document.querySelector(".show ul").offsetHeight,
  minHeight = 50;

  if (menuChildItem > minHeight) {
    minHeight = menuChildItem;
    menuWrap.style.minHeight = `${minHeight}px`;
  }
}

menuItem.forEach(item => {
  item.addEventListener('click', () => {
    menuItem.forEach(sibling => {
      if (sibling.classList.contains('show')) {
        sibling.classList.remove('show');
      }
    });
    
    item.classList.add('show');
    minHeight();
  });
});
