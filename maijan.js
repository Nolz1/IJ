
let num = 2;


function swichNav(){
    const nav = document.getElementById("nav");

    if(num == 1){
        nav.style.opacity = "0";
        nav.style.width = "0";
        nav.style. right = "-100vw";
        nav.style.zIndex = "-4";

        num = 2;
    }
    else if(num == 2){
        nav.style.opacity = "1";
        nav.style.width = "50vw";
        nav.style. right = "25vw";
        nav.style.zIndex = "4";

        num = 1;
    }

}