const hamburger = document.querySelector('.hamburger__btn');
const menuList = document.querySelector('.header__menu-list');
const hamburgerSrOnly = hamburger.querySelector('.btn__content--sr-only');

function isMenuOpen(hamburger) {
  return hamburger.getAttribute('aria-expanded') === 'true';
}

function getHamburgerContentNextState(isOpen) {
  return isOpen ? 'Close menu' : 'Open menu';
}

function toggleMenu({ currentTarget = hamburger }) {
  const isOpen = isMenuOpen(currentTarget);
  currentTarget.setAttribute('aria-expanded', !isOpen);

  hamburgerSrOnly.textContent = getHamburgerContentNextState(isOpen);

  menuList.classList.toggle('header__menu-list--expanded');
}

hamburger.addEventListener('click', toggleMenu);
