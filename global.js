const logIn = () => {
	let user = document.getElementById("user").value;

	localStorage.setItem("username", user);
	window.location.href = "/home/index.html";
};
