var menu = document.getElementById("menu");
var x = document.getElementById("topnav");
menu.onclick = function myFunction() {
    if (x.className === "topnav") {
        x.className += " active";
    } else {
        x.className = "topnav";
    }
}




// var header = document.getElementById("headerTop");
// var nextElem = document.getElementsByClassName("main_welcome");
// var nextElemPosition = nextElem[0].getBoundingClientRect().bottom + window.pageYOffset;
// window.onscroll = function() {
//     if (header.classList.contains('fixed') && window.pageYOffset < nextElemPosition) {
//         header.classList.remove('fixed');
//     } else if (window.pageYOffset > nextElemPosition) {
//         header.classList.add('fixed');
//     }
// };
