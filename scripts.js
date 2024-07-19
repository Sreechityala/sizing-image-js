let imageElement = document.getElementById("image");
let imageWidthElement = document.getElementById("imageWidth");
let warningMessageElement = document.getElementById("warningMessage");

let originalImageWidth = 200;

imageElement.style.width = originalImageWidth + "px";
imageWidthElement.textContent = originalImageWidth + "px";

function incrementButton() {
    if (originalImageWidth >= 300) {
        warningMessageElement.textContent = "Too big. Decrease the size of Image.";
    } else {
        warningMessageElement.textContent = "";
        originalImageWidth = originalImageWidth + 5;
        let widthOfImage = originalImageWidth + "px";
        imageElement.style.width = widthOfImage;
        imageWidthElement.textContent = widthOfImage;
    }
}

function decrementButton() {
    if (originalImageWidth <= 100) {
        warningMessageElement.textContent = "Can't Visible. Increase the size of Image.";
    } else {
        warningMessageElement.textContent = "";
        originalImageWidth = originalImageWidth - 5;
        let widthOfImage = originalImageWidth + "px";
        imageElement.style.width = widthOfImage;
        imageWidthElement.textContent = widthOfImage;
    }
}