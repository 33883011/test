// Select the elements
var toggle_btn;
var big_wrapper;
var humbager_menu;

function declare() {
    toggle_btn = document.querySelector(".toggle-btn");
    big_wrapper = document.querySelector(".big-wrapper");
    humbager_menu = document.querySelector(".humbager-menu"); // Fix the selector
}

const main = document.querySelector("main");

declare();
let dark = false;

function toggleAnimation() {
    // Clone the wrapper
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if (dark) {
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else {
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scrolling");
        big_wrapper.remove();
        clone.classList.remove("copy");
        // Reset variables
        declare();
        events();
    });
}

function events() {
    toggle_btn.addEventListener("click", toggleAnimation);
    humbager_menu.addEventListener("click", () => {
        big_wrapper.classList.toggle("active");
    });
}

events();

//-------------------------------------------------------------------------------------------------------------------------------------

const span = document.querySelector('.text-change');

// Set up an array with different job titles
const jobTitles = ["Graphic Designer ", "web Designer "];

let currentTitleIndex = 0;

// Function to change the text content and update the color
function changeTextAndColor() {
    span.textContent = jobTitles[currentTitleIndex];
    currentTitleIndex = (currentTitleIndex + 1) % jobTitles.length;
}

// Trigger the text change every 4 seconds
setInterval(changeTextAndColor, 1000);



//-------------------------------------------------------------------------------------------------------------------------------------

// ... (Previous code)

document.addEventListener('DOMContentLoaded', function() {
    // Add a short delay to make sure the animation is applied after the content is fully loaded
    setTimeout(function() {
        document.querySelector('.big-wrapper').style.opacity = '1';
    }, 300);
});

const bganimation = document.getElementById('bganimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bganimation.append(colorBox);
}



