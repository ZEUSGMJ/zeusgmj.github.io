const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navUl = document.querySelector('.nav-items');
const navItems = document.querySelectorAll('.nav-items li');
const toggle = document.getElementById('toggle');
const theme = localStorage.getItem('site-theme');
const quote = document.getElementById('quote');
const quoteAUthor = document.getElementById('quote-author');

// Quotes
const quotes = [
    {
        quote: "What, So Everyone's Supposed To Sleep Every Single Night Now?",
        author: 'Rick Sanchez'
    },
    {
        quote: "Uncertainty is inherently unsustainable. Eventually, everything either is or isn't.",
        author: 'Rick Sanchez'
    },
    {
        quote: "When smart people get happy, they stop recognising themselves.",
        author: 'Rick Sanchez'
    },
    {
        quote: "Why Should You Be Embarrassed About Being Honest And Saying Something Nice?",
        author: 'Tony Johnson - After Life'
    },
    {
        quote: "That's just the way it is. Change is inevitable. Instead of resisting it, you’re better served simply going with the flow.",
        author: 'Shunsui Kyōraku - Bleach'
    },
    {
        quote: "If a miracle only happens once, then what is it called the second time?",
        author: 'Ichigo Kurosaki - Bleach'
    },
    {
        quote: "Any betrayal you can see is trivial, what is truly frightening and much more lethal, is the betrayal you cannot see.",
        author: 'Sosuke Aizen - Bleach'
    },
    {
        quote: "If you can only do one a single thing, hone it to perfection. Hone it to the utmost limit!",
        author: "Jigoro Kuwajima - Demon Slayer"
    },
    {
        quote: "A goal is not always meant to be reached, it often serves simply as something to aim at.",
        author: "Bruce Lee"
    }
];

window.addEventListener('scroll', fadeNav);

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuote.quote;
quoteAUthor.innerText = '- ' + randomQuote.author;

navSlide();

if (theme == 'lightmode') {
    document.body.classList.add('lightmode');
    toggle.checked = true;
} else toggle.checked = false;

toggle.addEventListener('change', (e) => {
    const isChecked = e.target.checked;

    document.body.style.overflow = 'hidden';

    if (isChecked) {
        document.body.classList.add('lightmode');
        setTheme('lightmode');
    } else {
        document.body.classList.remove('lightmode');
        setTheme(null);
    }

    setTimeout(() => {
        document.body.style.overflow = 'auto';
    }, 100);
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
