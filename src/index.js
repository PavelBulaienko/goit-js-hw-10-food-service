import menuTmpl from '/templates/menu.hbs';
import menuList from './menu.json';

const menuRef = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menuList);

menuRef.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menu) {
    return menu.map(menuTmpl).join('');
}

const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

    if (localStorage.getItem('theme') === JSON.stringify(Theme.LIGHT)) {
        setDefaultTheme();
    }
    else if (localStorage.getItem('theme') === JSON.stringify(Theme.DARK)) {
        setDefaultDarkTheme();
    }

themeSwitchToggleRef.addEventListener('change', () => {

    if (localStorage.getItem('theme') === JSON.stringify(Theme.LIGHT)) {
        addDarkTheme();
    }
    else if (localStorage.getItem('theme') === JSON.stringify(Theme.DARK)) {
        addLightTheme();
    }
    else {
        addDarkTheme();
    }
})

function setDefaultTheme() {
    bodyRef.classList.add('light-theme');
    bodyRef.classList.remove('dark-theme');
}

function setDefaultDarkTheme() {
    bodyRef.classList.add('dark-theme');
    bodyRef.classList.remove('light-theme');
    themeSwitchToggleRef.checked = true;
}

function addLightTheme() {
    bodyRef.classList.add('light-theme');
    bodyRef.classList.remove('dark-theme');
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
}

function addDarkTheme() {
    bodyRef.classList.add('dark-theme');
    bodyRef.classList.remove('light-theme');
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
}