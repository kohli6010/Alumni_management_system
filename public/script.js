const collegeListBtn = document.getElementById('college');
const collegeList = document.getElementById("colleges");
const aboutBtn = document.getElementById("about");
const aboutUs = document.getElementById("about-us");

collegeListBtn.addEventListener('click', () => {
	collegeList.scrollIntoView();
});

aboutBtn.addEventListener('click', () => { 
	aboutUs.scrollIntoView();
})