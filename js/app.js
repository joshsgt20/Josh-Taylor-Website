


//Menu
function AnimateMenu(x) {
  x.classList.toggle("change");
}





var menu = document.querySelector(".MobileMenu")
var ham = document.querySelector(".Hamburger")
var menuIcon = document.querySelector(".MobileMenuLink")

ham.addEventListener("click", toggleMenu)

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    xIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    xIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

var menuLinks = document.querySelectorAll(".MobileMenuLink")

menuLinks.forEach(
  function (menuLink) {
    menuLink.addEventListener("click", toggleMenu)
  }
)

//Cursor

let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.linkhover');

window.addEventListener('mousemove',cursor)

function cursor(e){
  if ($(window).width() > 650) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}}

navLinks.forEach(link =>{
    link.addEventListener('mouseleave', () =>{
    mouseCursor.classList.remove('link-grow');
    link.classList.remove("hovered-link");
    });

    link.addEventListener('mouseover', () =>{
        mouseCursor.classList.add('link-grow');
        link.classList.add("hovered-link");
        });
})




//Contact Form

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  const formData = new FormData(form);
  e.preventDefault();
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  });
  var json = JSON.stringify(object);
  result.innerHTML = "Please wait...";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  })
    .then(async (response) => {
      let json = await response.json();
      if (response.status == 200) {
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-green-500");
      } else {
        console.log(response);
        result.innerHTML = json.message;
        result.classList.remove("text-gray-500");
        result.classList.add("text-red-500");
      }
    })
    .catch((error) => {
      console.log(error);
      result.innerHTML = "Please try again";
    })
    .then(function () {
      form.reset();
      setTimeout(() => {
        result.style.display = "none";
      }, 5000);
    });
});


function toggleanimation() {
  document.getElementById("Hamburger_Icon").classList.toggle('change');
}