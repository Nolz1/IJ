
window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if(revealTop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
};

const dropButton = document.getElementById('dropbutton');

dropButton.addEventListener('click', (e) => {
    const item = document.getElementById('drop-down-menue');

    if(item.style.display == 'flex'){
        item.style.display = 'none';
        item.style.height = '0px';
    }
    else {
        item.style.display = 'flex';
        item.style.height = 'auto';
    }
});



function showAside(num){
    const a1 = document.getElementById('as-1');
    const a2 = document.getElementById('as-2');
    const a3 = document.getElementById('as-3');
    const a4 = document.getElementById('as-4');
    const a5 = document.getElementById('as-5');
    const a6 = document.getElementById('as-6');
    const a7 = document.getElementById('as-7');

    let As = [a1, a2, a3, a4, a5, a6, a7];

    for(let i = 0; i < As.length; i++){
        As[i].style.height = "0px";
        As[i].style.display = "none";
        

        As[num].style.height = "auto";
        As[num].style.display = "block";
    }
}
