// let desktopHover = document.querySelector('.card__share__icon');
// let shareOn = document.querySelector('.share');
// let child = document.querySelector('.parent');
// console.log(shareOn);

// desktopHover.addEventListener("mouseenter", function(event) {
//     event.target.style.backgroundColor = "blue";
// });

// desktopHover.addEventListener("mouseleave", function(event) {
//     event.target.style.backgroundColor = "red";
// });

// child.addEventListener("click", (child) => {
//     child.target.style.backgroundColor = "green";
// })

// console.log(child + " got clicked");

// console.log(desktopHover);

// console.log("this is child " + child);

document.querySelector(".card__share__img").addEventListener("click", () => {
    document.querySelector(".share").style.backgroundColor = "red";
}); 

