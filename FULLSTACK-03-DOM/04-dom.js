var button = document.querySelector("button");

// --- version 1 ---

// var isRed = false;
// button.addEventListener("click", function() {
//     if (isRed) {
//        document.body.style.background = "white";
//     } else {
//         document.body.style.background = "red";
//     }
//     isRed = !isRed;
// });


// --- version 2 ---

button.addEventListener("click", function() {
    document.body.classList.toggle("red");
});