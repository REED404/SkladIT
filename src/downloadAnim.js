document.addEventListener('DOMContentLoaded', function () {
    let downIco = document.querySelector("#hard");
    let icon = document.querySelector("#icon");
    let downButt = document.querySelector("#button");

    downButt.addEventListener('click', function () {
        icon.style.animation = "icon 2s ease-in-out forwards";
        downIco.style.animation = "downIco 2s cubic-bezier(0.6, 0, 0.35, 1.32) forwards";
    });
});