const headerBurger = document.querySelector('.header__burger'),
            headerLanguage = document.querySelector('.header__language'),
            headerNav = document.querySelector('.header__nav');

headerBurger.onclick = function() {
    headerBurger.classList.toggle('active');
    headerLanguage.classList.toggle('active');
    headerNav.classList.toggle('active');
    document.body.classList.toggle('lock');
};