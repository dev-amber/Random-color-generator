function getcolor() {
    const randomnumber = Math.floor(Math.random() * 16777215); // Corrected the syntax
    const randomcode = "#" + randomnumber.toString(16);
    document.body.style.backgroundColor = randomcode;
    document.getElementById("color-code").innerText = randomcode;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn").addEventListener("click", getcolor);
});

getcolor(); // This line will set the initial color when the DOM is loaded
