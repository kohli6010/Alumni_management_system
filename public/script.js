const collegeListBtn = document.getElementById('college');
const collegeList = document.getElementById('colleges');
const aboutBtn = document.getElementById('about');
const aboutUs = document.getElementById('about-us');
const loginBtn = document.getElementById('login');
const loginPopUp = document.getElementsByClassName('login-popup');
const cross = document.querySelector('.cancel>img');
const nav = document.querySelector('nav');
const main = document.querySelector('main');

collegeListBtn.addEventListener('click', () => {
    collegeList.scrollIntoView();
});

aboutBtn.addEventListener('click', () => {
    aboutUs.scrollIntoView();
});

loginBtn.addEventListener('click', () => {
    loginPopUp[0].classList.add('login-pop-add-animation');
    main.style.filter = 'grayscale(100%)';
    nav.style.filter = 'grayscale(100%)';
    collegeList.style.filter = 'grayscale(100%)';
    aboutUs.style.filter = 'grayscale(100%)';
});

cross.addEventListener('click', () => {
    loginPopUp[0].classList.remove('login-pop-add-animation');
    main.style.filter = 'grayscale(0%)';
    nav.style.filter = 'grayscale(0%)';
    collegeList.style.filter = 'grayscale(0%)';
    aboutUs.style.filter = 'grayscale(0%)';
});
