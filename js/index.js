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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//navigation links//
const nav = document.querySelector('a') 
nav.textContent = 'Services'
const nav2 = nav.nextElementSibling
nav2.textContent = 'Product'
const nav3= nav2.nextElementSibling
nav3.textContent = 'Vision'
const nav4= nav3.nextElementSibling
nav4.textContent = 'Features'
const nav5 = nav4.nextElementSibling
nav5.textContent = 'About'
const nav6 = nav5.nextElementSibling
nav6.textContent= 'Contact'


// add new nav links
//prepend
const navBeg = document.querySelector('nav');
const addElement1 =document.createElement('a')
addElement1.textContent= 'Welcome'
addElement1.setAttribute('href', '#')
navBeg.prepend(addElement1)


//append 
const navEnd = document.querySelector('nav');
const addElement = document.createElement('a')
addElement.textContent = 'Info'
addElement.setAttribute('href', '#')
navEnd.appendChild(addElement)



/* change color of nav links */
const allLinks = document.querySelectorAll('a')
for (let i = 0; i < allLinks.length; i++) {
  allLinks[i].style.color = 'green'
}


/* h1, button and header image*/
const header = document.querySelector('h1')
header.innerHTML = "Dom  <br>  is <br> Awesome"
const button = document.querySelector ('button')
button.textContent = 'Get Started'

const headerImg= document.querySelector ('.cta #cta-img')
headerImg.src = 'img/header-img.png'



//Middle section h4, paragraphs and picture

const h4Middle= document.querySelectorAll('.text-content h4')
h4Middle[0].textContent = 'Features'
h4Middle[1].textContent = 'About'
h4Middle[2].textContent= 'Services'
h4Middle[3].textContent ='Product'
h4Middle[4].textContent = 'Vision'


const paragraph= document.querySelectorAll ('.text-content p')
paragraph[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

paragraph[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const middleImg= document.querySelector ('.middle-img')
middleImg.src = 'img/mid-page-accent.jpg'


paragraph[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

paragraph[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

paragraph[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//contact section
const h4Contact= document.querySelector('.contact h4')
h4Contact.textContent = 'Contact'

const add1 = document.querySelector('.contact p')
add1.innerHTML =  "123 Way 456 Street<br> Somewhere, USA "
const add2= add1.nextElementSibling
add2.textContent= "1 (888) 888-8888"
const add3= add2.nextElementSibling
add3.textContent="sales@greatidea.io"

//footer
const footer = document.querySelector('footer')
footer.textContent= 'Copyright Great Idea! 2018'