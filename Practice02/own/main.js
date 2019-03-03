// imageArr store urls of image to display
var imageArr = ["https://img.buzzfeed.com/thumbnailer-prod-us-east-1/dc23cd051d2249a5903d25faf8eeee4c/BFV36537_CC2017_2IngredintDough4Ways-FB.jpg?output-quality=60&resize=1000:*",
    "https://food-images.files.bbci.co.uk/food/recipes/quick_pepperoni_pizza_64616_16x9.jpg",
    "https://recipes.timesofindia.com/photo/53110049.cms"
]

// count for which image to display
var imageCount = 0;
// arr index of imageArr
var imagePos = document.getElementById("display");
// position of url of image
var imageHref = document.getElementById("source");
// buttons
var buttons = document.querySelectorAll(".image-viewer__button img");

// make right arrow to be disabled
buttons[0].classList.add("disabled");

// click button to change image to next one
function nextImage() {
    imageCount++;
    if (imageCount >= imageArr.length) {
        imageCount = imageArr.length - 1
        return;
    } else {
        if (imageCount === imageArr.length - 1) {
            buttons[1].classList.add("disabled");
        }
        // remone another direction's disabled class
        buttons[0].classList.remove("disabled");
        // before main image finish downloading , we need another smaller image
        imagePos.src = "./images/loading.gif";
        imagePos.style.width = "5rem";
        imagePos.style.height = "3rem";
        // main image
        imagePos.src = imageArr[imageCount];
        imagePos.style.width = "50rem";
        imagePos.style.height = "30rem";
        // change url
        imageHref.innerHTML = imageArr[imageCount];
        imageHref.href = imageArr[imageCount];
        return;
    }
}

// click buttion to change image to previous one
function previousImage() {
    imageCount--;
    if (imageCount < 0) {
        imageCount = 0;
        return;
    } else {
        if (imageCount === 0) {
            buttons[0].classList.add("disabled");
        }
        // remone another direction's disabled class
        buttons[1].classList.remove("disabled");
        // before main image finish downloading , we need another smaller image
        imagePos.src = "./images/loading.gif";
        imagePos.style.width = "5rem";
        imagePos.style.height = "3rem";
        // main image
        imagePos.src = imageArr[imageCount];
        imagePos.style.width = "50rem";
        imagePos.style.height = "30rem";
        // change url
        imageHref.innerHTML = imageArr[imageCount];
        imageHref.href = imageArr[imageCount];

        return;
    }
}