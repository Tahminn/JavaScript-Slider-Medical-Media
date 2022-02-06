let leftIcon = document.querySelector(".left-icon");
let rightIcon = document.querySelector(".right-icon");
let sliderList = document.querySelector(".slider-scroll");
let arrLi = document.querySelectorAll(" ul li");

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


let leftBottomIcon = document.querySelector(".left-bottom-icon");
let rightBottomIcon = document.querySelector(".right-bottom-icon");
let clickCount = 0;

rightBottomIcon.addEventListener("click", function rightIcon(){
    clickCount++;
    console.log(clickCount);
    let valueProp = window.getComputedStyle(sliderList).getPropertyValue("transform");
    let valueArr = valueProp.split(", ");
    let translateXValue = parseInt(valueArr[4]);
        if (clickCount >=0 && clickCount < arrLi.length - 3) {
            sliderList.style.transform = "translateX(" + (- 336 * clickCount) + "px)";
        }
        else{
            clickCount = arrLi.length - 4;
            sliderList.style.transform = "translateX(" + (- 336 * clickCount) + "px)";
        }
});
leftBottomIcon.addEventListener("click", function rightIcon(){
    clickCount--;
    let valueProp = window.getComputedStyle(sliderList).getPropertyValue("transform");
    let valueArr = valueProp.split(", ");
    let translateXValue = parseInt(valueArr[4]);
    if (clickCount < 0) {
        clickCount = 0;
        if (clickCount > 0 ||  clickCount == 0) {
            sliderList.style.transform = "translateX(" + (-336 * clickCount) + "px)";
            console.log(clickCount);
            return;
        }
        else{
            return;
        }
    }
    else{
        if (clickCount > 0 ||  clickCount == 0) {
            sliderList.style.transform = "translateX(" + (-336 * clickCount) + "px)";
            console.log(clickCount);
            return;
        }
        else{
            return;
        }
    }
       
});
console.log(clickCount);


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





