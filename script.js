const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navUl = document.querySelector('.nav-items');
const navItems = document.querySelectorAll('.nav-items li');
const toggle = document.getElementById('toggle');
const theme = localStorage.getItem('site-theme');

window.addEventListener('scroll',fadeNav);

navSlide();

if (theme == 'lightmode') {
    document.body.classList.add('lightmode');
    toggle.checked = true;
} else toggle.checked = false;

toggle.addEventListener('change', (e) => {
    e.preventDefault();
    const isChecked = e.target.checked;

    if (isChecked) {
        document.body.classList.add('lightmode');
        setTheme('lightmode');
    } else {
        document.body.classList.remove('lightmode');
        setTheme(null);
    }
});

function setTheme(themeName) {
    localStorage.setItem('site-theme', themeName);
}

function fadeNav() {
    if (window.scrollY > nav.offsetHeight + 100) nav.classList.add('active');
    else nav.classList.remove('active');
}

function navSlide() {

    if (burger) {
        burger.addEventListener('click', () => {

            navUl.classList.toggle('nav-active');
            if (navUl.classList.contains('nav-active')) document.body.style.position = 'fixed';
            else document.body.style.position = 'static';

            navItems.forEach((item, idx) => {
                item.addEventListener('click', closeNav);
                if (item.style.animation) {
                    item.style.animation = null;
                } else {
                    item.style.animation = `navItemsFadeIn 0.5s ease forwards ${idx / 7 + 0.3}s`;
                }
            });
            burger.classList.toggle('toggle');
        });
    }
}

function closeNav() {
    document.body.style.position = 'static';
    navUl.classList.toggle('nav-active');
    burger.classList.toggle('toggle');

    navItems.forEach(item => {
        if (item.style.animation) item.style.animation = null;
    })
}
