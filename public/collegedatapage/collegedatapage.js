let verifyBtns = document.querySelectorAll(".verify");

for (let i = 0; i < verifyBtns.length; i++) { 
	verifyBtns[i].addEventListener("click", () => {
		verifyBtns[i].style.display = "none";
		let node = document.createElement("div");
		let textNode = document.createTextNode("Verified");
		node.appendChild(textNode);
		verifyBtns[i].parentElement.appendChild(node);
	});
}