const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

// ---------------------------------

const home = document.querySelector('.home');
const image = document.querySelector('.image');
const liens = document.getElementsByClassName('lien');
const pages = document.getElementsByClassName('page');

const contact = document.getElementById('contact');
const btn = document.querySelector('.btn');

function btn_contact() {
  btn.addEventListener('click', (event)=>{
    event.preventDefault();

    for (let i = 0; i < pages.length; i++) {
      const page = pages[i];
      if (page.attributes['id'].value !== "contact") {
        page.classList.add('hidden');
        image.classList.add('hidden');
      }else{
        page.classList.remove('hidden');
      }
    }
  })
}

function animateBule() {
  const bule = document.createElement("span");

  bule.classList.add("bule");
  document.body.appendChild(bule);
  
  const taille = Math.random() * 100 + 100 + "px";
  bule.style.height = taille;
  bule.style.width = taille;
  bule.style.top = Math.random() * 100 + 50 + "%";
  bule.style.left = Math.random() * 100 + "%";
  
  const plusOuMoins = Math.random() > 0.5 ? 1 : -1;
  
  bule.style.setProperty("--left", Math.random() * 100 * plusOuMoins + "%"); 
}

// setInterval(animateBule, 400);

btn_contact();


function menu_click() {
  
  for (let i = 0; i < liens.length; i++) {
    const lien = liens[i];
    lien.addEventListener('click', (event) => {
      for (let j = 0; j < pages.length; j++) 
      {
        const page = pages[j]; 
        if (page.attributes['id'].value === lien.attributes['id'].value) {
          event.preventDefault();
          page.classList.remove('hidden');
          home.classList.add("hidden");
          if (page.attributes['id'].value !== "home") {
            image.classList.add('hidden');
          }else{
            image.classList.remove('hidden');
          }
          container.classList.remove("active");
        } else{
          page.classList.add("hidden");
        }
      }
    })
  }
}
  
menu_click();
  // Typing 

const typedTextSpan = document.querySelector(".infos");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Développeur Web", "Concepteur et Administrateur de base de données"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1000);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});