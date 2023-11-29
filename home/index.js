const openModal = (id) => {
	let modal = document.getElementById(id);
	modal.style.display = "flex";
};

const closeModal = () => {
	let modals = document.getElementsByClassName("modalCont");
	for (let i = 0; i <= modals.length; i++) {
		modals[i].style.display = "none";
	}
};

let user = localStorage.getItem("username");

document.getElementById("username").innerText = ": " + user;
