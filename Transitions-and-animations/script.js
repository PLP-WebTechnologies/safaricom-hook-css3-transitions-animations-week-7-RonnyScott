function calculateArea() {
    let width = prompt("Enter width:");
    let height = prompt("Enter height:");
    let area = width * height;
    document.getElementById("area-result").innerText = `Area: ${area}`;
}

function toggleModal() {
    let modal = document.getElementById("modal");
    modal.classList.toggle("hidden");
}

function startSpinner() {
    let spinner = document.getElementById("spinner");
    spinner.style.display = "block";
    setTimeout(() => {
        spinner.style.display = "none";
    }, 3000);
}
