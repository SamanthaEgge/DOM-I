const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let codeSnippImg = document.getElementById("cta-img");
codeSnippImg.setAttribute('src', 'img/header-img.png')

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');

//**********Content***********//
//Header & CTA
const navItems = document.querySelectorAll('header > nav > a')
navItems[0].innerText = 'Services';
navItems[1].innerText = 'Product';
navItems[2].innerText = 'Vision';
navItems[3].innerText = 'Features';
navItems[4].innerText = 'About';
navItems[5].innerText = 'Contact';

navItems.forEach( element => {
  element.style.color = 'green';
})

const navEle = document.querySelector('header > nav')
const navAHome = document.createElement('a');
navAHome.textContent = 'Home';
navAHome.style.color = 'green';
navAHome.setAttribute("src", "index.html");

navEle.prepend(navAHome);

const navALogIn = document.createElement('a');
navALogIn.textContent = 'Log In';
navALogIn.style.color = 'green';
navALogIn.setAttribute("src", "\"#\"");

navEle.appendChild(navALogIn);



//$("nav").appendChild('<a href=\"#\">Home</a>');

const title = document.querySelectorAll('.cta > .cta-text > h1')
title[0].innerText = 'DOM \n is \n Awesome';

const headerButton = document.querySelectorAll('.cta > .cta-text > button')
headerButton[0].innerText = 'Get Started';

//Main-content
const topContentH4 = document.querySelectorAll('.top-content > .text-content > h4');
topContentH4[0].innerText = 'Features';
topContentH4[1].innerText = 'About';

const topContentP = document.querySelectorAll('.top-content > .text-content > p')
topContentP[0].innerText = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
topContentP[1].innerText = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const bottomContentH4 = document.querySelectorAll('.bottom-content > .text-content > h4');
bottomContentH4[0].innerText = 'Services';
bottomContentH4[1].innerText = 'Product';
bottomContentH4[2].innerText = 'Vision';

const bottomContentP = document.querySelectorAll('.bottom-content > .text-content > p')
bottomContentP[0].innerText = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomContentP[1].innerText = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomContentP[2].innerText = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//Footer
const contactH4 = document.querySelectorAll('.contact > h4')
contactH4[0].innerText = 'Contact';

const contactP = document.querySelectorAll('.contact > p')
contactP[0].innerText = '123 Way 456 Street \n Somewhere, USA';
contactP[1].innerText = '1 (888) 888-8888';
contactP[2].innerText = 'sales@greatidea.io';

const footerP = document.querySelectorAll('footer > p')
footerP[0].innerText = 'Copyright Great Idea! 2018';