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
let nav = document.querySelectorAll('a') 
nav[0].textContent = siteContent ["nav"]["nav-item-1"]
nav[1].textContent = siteContent ["nav"]["nav-item-2"]
nav[2].textContent = siteContent ["nav"]["nav-item-3"]
nav[3].textContent = siteContent ["nav"]["nav-item-4"]
nav[4].textContent = siteContent ["nav"]["nav-item-5"]
nav[5].textContent = siteContent ["nav"]["nav-item-6"]

//const nav2 = nav.nextElementSibling
/*nav2.textContent = 'Product'
const nav3= nav2.nextElementSibling
nav3.textContent = 'Vision'
const nav4= nav3.nextElementSibling
nav4.textContent = 'Features'
const nav5 = nav4.nextElementSibling
nav5.textContent = 'About'
const nav6 = nav5.nextElementSibling
nav6.textContent= 'Contact'*/


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



//  change color of nav links 
 let allLinks = document.querySelectorAll('a')
 for (let i = 0; i < allLinks.length; i++) {
   allLinks[i].style.color = 'green'
 }


/* h1, button and header image*/
const header = document.querySelector('h1')
header.innerHTML = "Dom  <br>  is <br> Awesome"
//header.innerHTML = siteContent["cta"]["h1"].split('1').join('<br/>')


const button = document.querySelector ('button')
button.textContent = siteContent[ "cta"]["button"]
//button.textContent = 'Get Started'

//const headerImg= document.querySelector ('.cta #cta-img')
//headerImg.src = 'img/header-img.png'

const headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"])



//Middle section h4, paragraphs and picture
const h4Middle= document.querySelectorAll('.text-content h4')
h4Middle[0].textContent = siteContent ["main-content"]["features-h4"]
h4Middle[1].textContent = siteContent ["main-content"]["about-h4"]
h4Middle[2].textContent= siteContent ["main-content"]["services-h4"]
h4Middle[3].textContent =siteContent ["main-content"]["product-h4"]
h4Middle[4].textContent = siteContent ["main-content"]["vision-h4"]


const paragraph= document.querySelectorAll ('.text-content p')
paragraph[0].textContent = siteContent ["main-content"]["features-content"]
paragraph[1].textContent = siteContent ["main-content"]["about-content"]
paragraph[2].textContent = siteContent ["main-content"]["features-content"]
paragraph[3].textContent = siteContent ["main-content"]["product-content"]
paragraph[4].textContent = siteContent ["main-content"]["vision-content"]


//const middleImg= document.querySelector ('.middle-img')
//middleImg.src = 'img/mid-page-accent.jpg'

const middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//contact section
const h4Contact= document.querySelector('.contact h4')
h4Contact.textContent = siteContent ["contact"]["contact-h4"]

const contactInfo = document.querySelectorAll('.contact p')
contactInfo[0].textContent = siteContent ["contact"]["address"]
contactInfo[1].textContent = siteContent ["contact"]["phone"]
contactInfo[2].textContent = siteContent ["contact"]["email"]
// add1.innerHTML =  "123 Way 456 Street<br> Somewhere, USA "
// const add2= add1.nextElementSibling
// add2.textContent= "1 (888) 888-8888"
// const add3= add2.nextElementSibling
// add3.textContent="sales@greatidea.io"



//footer
const footer = document.querySelector('footer')
footer.textContent= siteContent ["footer"]["copyright"]