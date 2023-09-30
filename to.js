let btn = document.querySelector(".btn");
let input = document.querySelector(".inputfield");
let addTodo = document.querySelector(".add");
let container = document.querySelector(".to-container");

btn.addEventListener("click", function () {
	let others = document.createElement("p");
	let task = input.value.trim();

	if (task !== "") {
		others.classList.add("add");
		others.innerText = input.value;
		input.value = "";
		addTodo.appendChild(others);
	}

	others.addEventListener("click", function () {
		others.classList.toggle("complete");
		if (others.classList.contains("complete")) {
			others.style.color = "red";
		} else {
			others.style.color = "black";
		}
	});

	others.addEventListener("dblclick", function () {
		addTodo.removeChild(others);
	});
});
