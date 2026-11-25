let btn = document.getElementById("btn");
let navs = document.getElementById("navs");

btn.addEventListener("click", function() {
    navs.classList.toggle("show");
});

let popupOverlay = document.getElementById('popupOverlay');
setTimeout(function () {
    popupOverlay.classList.add('popupshow');
}, 2000);

let close = document.getElementById('closebtn');
close.addEventListener('click', function () {
    popupOverlay.classList.remove('popupshow');
});


