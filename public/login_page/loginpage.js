let events = document.querySelectorAll(".events");
let flipcard = document.querySelector(".flipcard");
let cancel = document.querySelector(".cancel");


for (let i = 0; i < events.length; i++) { 
	events[i].addEventListener("click", () => { 
		flipcard.style.display = "block";
	})
}

cancel.addEventListener("click", () => { 
	flipcard.style.display = "none";
})
