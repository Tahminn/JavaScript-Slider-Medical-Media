let leftIcon = document.querySelector(".left-icon");
let rightIcon = document.querySelector(".right-icon");
let sliderList = document.querySelector(".slider-scroll");

rightIcon.addEventListener("click", function(){
    let matrix = window.getComputedStyle(sliderList).getPropertyValue("transform");
    let matrixArr = matrix.split(", ");
    let translateXNum = parseInt(matrixArr[4]);
    if (translateXNum > -1344) {
        sliderList.style.transform = "translateX(" + (translateXNum - 336) + "px)";
    }
    else{
        return;
    }
})
leftIcon.addEventListener("click", function(){
    let matrix = window.getComputedStyle(sliderList).getPropertyValue("transform");
    let matrixArr = matrix.split(", ");
    let translateXNum = parseInt(matrixArr[4]);
    if (translateXNum < 0) {
        sliderList.style.transform = "translateX(" + (translateXNum + 336) + "px)";
    }
    else{
        return;
    }
})

// let buttons = document.querySelectorAll(".icons button");

// buttons.forEach(button => {
//     button.addEventListener("click", function(){
//         let matrix = window.getComputedStyle(sliderList).getPropertyValue("transform");
//         let matrixArr = matrix.split(", ");
//         let translateXNum = parseInt(matrixArr[4]);
//         if (button.id = "right-icon") {
//             if (translateXNum > -1344) {
//                 sliderList.style.transform = "translateX(" + (translateXNum - 336) + "px)";
//             }
//             else{
//                 return;
//             }
//         }
//         if (button.id = "left-icon") {
//             if (translateXNum < 0) {
//                 sliderList.style.transform = "translateX(" + (translateXNum + 336) + "px)";
//             }
//             else{
//                 return;
//             }
//         }
// })
// })





