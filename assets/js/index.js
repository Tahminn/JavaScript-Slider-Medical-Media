let leftIcon = document.querySelector(".left-icon");
let rightIcon = document.querySelector(".right-icon");
let sliderList = document.querySelector(".slider-scroll");
let arrLi = document.querySelectorAll(" ul li");
console.log(arrLi.length);
rightIcon.addEventListener("click", function rightIcon(){
    let valueProp = window.getComputedStyle(sliderList).getPropertyValue("transform");
    let valueArr = valueProp.split(", ");
    let translateXValue = parseInt(valueArr[4]);
    if (translateXValue > (arrLi.length -4) * -336) {
        sliderList.style.transform = "translateX(" + (translateXValue - 336) + "px)";
        return;
    }
    else{
        return;
    }
});
leftIcon.addEventListener("click", function leftIcon(){
    let valueProp = window.getComputedStyle(sliderList).getPropertyValue("transform");
    let valueArr = valueProp.split(", ");
    let translateXValue = parseInt(valueArr[4]);
    if (translateXValue < 0) {
        sliderList.style.transform = "translateX(" + (translateXValue + 336) + "px)";
        return;
    }
    else{
        return;
    }
});

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





