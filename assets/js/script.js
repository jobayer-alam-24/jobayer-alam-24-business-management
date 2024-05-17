
/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navLinks = document.querySelectorAll("[data-navbar-link]");

navToggleBtn.addEventListener("click", function () {
  this.classList.toggle("active");
  header.classList.toggle("nav-active");
});

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}



/**
 * header scroll active state & go to top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 100) {
    header.classList.add("active");
    header.style.backgroundColor = "#061a38";
    goTopBtn.classList.add("active");
    goTopBtn.style.backgroundColor = "#061a38";
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});
// myFunctions 
const subscribeMail = document.querySelector('input[type="email"]');
const subscribeBtn = document.querySelector("button[type='submit'] span");
subscribeBtn.addEventListener('click', () => {
  let mail = subscribeMail.value
  if (/^-?\d*\.?\d+$/.test(mail)) {
    alert("Invalid Input!");
    console.log(new Error("Input Must be email type!"));
  } else {
    alert(
      JSON.stringify("Your mail: " + mail)
    )
    console.log("E-mail: " + mail);
  }

})
const offeredServicesClicked = () => {
  const offeredService1 = document.querySelectorAll('.service-list-1 li h3');
offeredService1.forEach(singleList => {
  singleList.addEventListener('click', (eve) => {
    let val = eve.target.innerText;
    alert("You have selected: " + val);
  })
})
const offeredService2 = document.querySelectorAll('.service-list-2 li h3');
offeredService2.forEach(singleList => {
  singleList.addEventListener('click', (eve) => {
    let val = eve.target.innerText;
    alert("You have selected: " + val);
  })
})

};
offeredServicesClicked();