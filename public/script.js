const collegeListBtn = document.getElementById('college');
const collegeList = document.getElementById("colleges");
const aboutBtn = document.getElementById("about");
const aboutUs = document.getElementById("about-us");
const loginBtn = document.getElementById("login");
const loginPopUp = document.getElementsByClassName("login-popup");
const cross = document.querySelector(".cancel>img");

collegeListBtn.addEventListener('click', () => {
	collegeList.scrollIntoView();
});

aboutBtn.addEventListener('click', () => { 
	aboutUs.scrollIntoView();
})

loginBtn.addEventListener('click', () => {
	loginPopUp[0].classList.add("login-pop-animation")
})

cross.addEventListener("click", () => { 
	loginPopUp[0].classList.remove("login-pop-animation");
})