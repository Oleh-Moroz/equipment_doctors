const windowWidth = document.documentElement.clientWidth;

window.addEventListener('DOMContentLoaded', () => {
    if (windowWidth <= 1160) {
        headerMenu();
        createMobMenu();
    }

    window.addEventListener('resize', () => {

        const windowWidth = document.documentElement.clientWidth;

        if (windowWidth <= 1160 ) {
            headerMenu();
        } else {
            removeHeaderMenu();
        }

    });
});

function headerMenu() {
    const header = document.querySelector('header .container .row');

    const menuButton = document.createElement('div');
    const filterButton = document.createElement('div');

    menuButton.innerHTML = `
        <button class="menu-bar_button">
            <span></span>
            <span></span>
            <span></span>
        </button>
    `;

    filterButton.innerHTML = `
        <button class="filter_button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href="#filter-ico"></use>
            </svg>
        </button>
    `;

    if (!header.querySelector('.menu-bar_button') || !header.querySelector('.filter_button')) {
        header.prepend(menuButton);
        header.append(filterButton);

        moveElements();
        createMobMenu();
    }

    menuButton.addEventListener('click', (e) => {
        if (e.target.tagName == 'BUTTON' || e.target.tagName == 'SPAN') {
            document.querySelector('.mob-right_menu').classList.remove('active');
            document.querySelector('.filter_button').classList.remove('active');
            document.querySelector('.menu-bar_button').classList.toggle('active');
            document.querySelector('.mob-left_menu').classList.toggle('active');
        }
    });

    filterButton.querySelector('button').addEventListener('click', () => {
        document.querySelector('.mob-left_menu').classList.remove('active');
        document.querySelector('.menu-bar_button').classList.remove('active');
        document.querySelector('.filter_button').classList.toggle('active');
        document.querySelector('.mob-right_menu').classList.toggle('active');
    });

    if (document.querySelector('.mob-right_menu').childNodes.length < 1) {
        filterButton.style.display = 'none';
    }
};

function removeHeaderMenu() {
    const menuButton = document.querySelector('.menu-bar_button'),
          filterButton = document.querySelector('.filter_button');

    if (menuButton || filterButton) {
        menuButton.parentElement.remove();
        filterButton.parentElement.remove();

        moveBackElements();
        removeMobMenu();
    }
};

function createMobMenu() {
    const menuBlock = document.createElement('div'),
          categoryMenu = document.createElement('div');

    menuBlock.classList.add('mob-left_menu');
    categoryMenu.classList.add('mob-right_menu');

    menuBlock.innerHTML = `
        <div class="mob-left_menu-wrap">
            <div class="mob-left_menu-title">
                Welcome to<br>
                EQUIPMENT DOCTORS<br>
                ${document.querySelector('.header-contact').innerHTML}
            </div>
            <div class="mob-left_menu-account"></div>
            <div class="mob-left_menu-list">
                <ul>
                    <li class="menu-title">
                        General
                    </li>
                    <li>
                        <a href="${document.querySelector('.logo_wrap a').getAttribute('href')}">
                            <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <use href="#home"></use>
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="${document.querySelector('.header-category_button').getAttribute('href')}">
                            <svg width="16px" height="14px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <use href="#category"></use>
                            </svg>
                            All category
                        </a>
                    </li>
                    ${document.querySelector('.header-account_wishlist ul ul').innerHTML}
                    ${document.querySelector('.singin-dropdown ul').innerHTML}
                </ul>

                <ul>
                    ${document.querySelectorAll('.footer-menu_list')[2].innerHTML}
                </ul>

                <ul>
                    ${document.querySelectorAll('.footer-menu_list')[0].innerHTML}
                </ul>

                <ul>
                    ${document.querySelectorAll('.footer-menu_list')[1].innerHTML}
                </ul>
            </div>
        </div>
    `;

    if (!document.querySelector('header .mob-left_menu') || !document.querySelector('header .mob-right_menu')) {
        document.querySelector('header').append(menuBlock);
        document.querySelector('header').append(categoryMenu);
    }

    if (document.querySelector('.product-filter')) {
        document.querySelector('.mob-right_menu').append(document.querySelector('.product-filter'));
    }

    if (document.querySelector('.col-menu.col-menu_category')) {
        document.querySelector('.content').prepend(document.querySelector('.col-menu.col-menu_category'));

        document.querySelectorAll('.col-menu.col-menu_category ul li').forEach(item => {
            item.addEventListener('click', moveCategoryMenu);
            item.classList.remove('show');
        });
    }
}

function removeMobMenu() {
    if (document.querySelector('header .mob-left_menu')) { 
        document.querySelector('header .mob-left_menu').remove();
        document.querySelector('header .mob-right_menu').remove();
    }
}

function moveElements() { 
    if (document.querySelector('.main-slider')) {
        document.querySelector('.slider-wrap').after(document.querySelector('.header-category_wrap'));
    }

    if (document.querySelector('.adversing-banner-one')) {
        document.querySelector('.popular-wrap').after(document.querySelector('.adversing-banner-one'));
    }

    if (document.querySelector('.adversing-banner-two')) {
        document.querySelector('.brands-wrap').after(document.querySelector('.adversing-banner-two'));
    }

    if (document.querySelector('.checkout-wrap')) {
        document.querySelector('.header-cart').style.display = 'none';
    }

    if (document.querySelector('#checkout-wrap')) {
        const footerTotalBlock = document.createElement('div'),
             totalButton = document.createElement('button');

        footerTotalBlock.classList.add('footer-total_block');

        totalButton.innerHTML = '<i class="fas fa-chevron-down"></i>';

        document.querySelector('.checkout-total_footer').append(footerTotalBlock);
        document.querySelector('.checkout-total_footer > .checkout-total_row').append(totalButton);

        totalButton.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.footer-total_block').classList.toggle('active');
            totalButton.classList.toggle('active');
        });

        document.querySelectorAll('.checkout-right_col .checkout-total_block > .checkout-total_row').forEach(element => {
            document.querySelector('.footer-total_block').append(element);
        });
    }
}

function moveBackElements() {
    if (document.querySelector('.main-slider')) {
        document.querySelector('.logo_wrap').after(document.querySelector('.header-category_wrap'));
    }

    if (document.querySelector('.product-filter')) {
        document.querySelector('.left-col').prepend(document.querySelector('.product-filter'));
    }

    if (document.querySelector('.col-menu.col-menu_category')) {
        document.querySelector('.left-col').prepend(document.querySelector('.col-menu.col-menu_category'));

        document.querySelectorAll('.col-menu.col-menu_category ul li').forEach(item => {
            item.removeEventListener('click', moveCategoryMenu);
        });

        document.querySelector('.col-menu.col-menu_category').style.cssText = `
            transform: translateX(0%);
        `;
    }

    if (document.querySelector('.adversing-banner-one')) {
        document.querySelector('.product-filter').after(document.querySelector('.adversing-banner-one'));
    }

    if (document.querySelector('.adversing-banner-two')) {
        document.querySelector('.adversing-banner-one').after(document.querySelector('.adversing-banner-two'));
    }

    if (document.querySelector('#checkout-wrap')) {
        document.querySelectorAll('.footer-total_block > .checkout-total_row').forEach(element => {
            document.querySelector('.checkout-total_block h3').after(element);
        });

        if (document.querySelector('.checkout-total_block') || document.querySelector('.checkout-total_footer > .checkout-total_row button')) {
            document.querySelector('.footer-total_block').remove();
            document.querySelector('.checkout-total_footer > .checkout-total_row button').remove();
        }

    }
}

const moveCategoryMenu = (e) => {
    if (e.target.tagName == "A" || e.target.tagName == "DIV") {
        e.preventDefault();
        document.querySelector('.col-menu.col-menu_category').style.cssText = `
            transform: translateX(-110%);
            position: absolute;
        `;

        document.querySelector('.tab-content.tab-show').style.cssText = `
            visibility: visible;
            display: flex;
        `;

        const buttonPrevios = document.createElement('button');

        buttonPrevios.innerHTML = `
            <i class="fas fa-chevron-left"></i> All Categories
        `;

        document.querySelector('.content').prepend(buttonPrevios);

        buttonPrevios.addEventListener('click', () => {
            document.querySelector('.col-menu.col-menu_category').style.cssText = `
                transform: translateX(0%);
                position: relative;
            `;

            document.querySelector('.tab-content.tab-show').style.cssText = `
                visibility: hidden;
                display: none;
            `;

            buttonPrevios.remove();
        });
    }
};