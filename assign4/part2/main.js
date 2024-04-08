const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const alternativeImageText = {"pic1.jpg" : "Closeup of a blue human eye", "pic2.jpg" : "A rock formation", "pic3.jpg" : "Some purple and white flowers", "pic4.jpg" : "Egyptian hieroglyphics", "pic5.jpg" : "A butterfly on a leaf"};

/* Looping through images */
for (const image of images) {
    const newImage = document.createElement("img");
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute("alt", alternativeImageText[image]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', event => {
        displayedImage.src = event.target.src;
        displayedImage.alt = event.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    const buttonClass = btn.getAttribute("class");
    if (buttonClass === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent("Lighten");
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";

    } else {
        btn.setAttribute("class", "dark");
        btn.textContent("Darken");
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }

})