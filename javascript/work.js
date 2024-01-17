
const dropButton = document.getElementById('headerswich');

dropButton.addEventListener('click', (e) => {
    const item = document.querySelector('header');
    const part = document.querySelector('nav');

    if(  part.style.bottom == '15vh'){
        item.style.height = '50vh';
        part.style.bottom = '10vh';
        
    
    }
    else {
        item.style.height = '8vh';
        part.style.bottom = '15vh';
    }
});

window.addEventListener('scroll', reveal);

function reveal(){

    if(window.innerWidth > 1024){
        
            var reveals1 = document.querySelectorAll(".reveal1");

        for(var i = 0; i < reveals1.length; i++){

            var windowheight = window.innerHeight;
            var revealTop = reveals1[i].getBoundingClientRect().top;
            var revealpoint = 100;

            if(revealTop < windowheight - revealpoint){
                reveals1[i].classList.add('active');
            }
            else{
                reveals1[i].classList.remove('active');
            }
        }
        var reveals2 = document.querySelectorAll(".reveal2");

        for(var i = 0; i < reveals2.length; i++){

            var windowheight = window.innerHeight;
            var revealTop = reveals2[i].getBoundingClientRect().top;
            var revealpoint = 150;

            if(revealTop < windowheight - revealpoint){
                reveals2[i].classList.add('active');
            }
            else{
                reveals2[i].classList.remove('active');
            }
        }
        var reveals3 = document.querySelectorAll(".reveal3");

        for(var i = 0; i < reveals3.length; i++){

            var windowheight = window.innerHeight;
            var revealTop = reveals3[i].getBoundingClientRect().top;
            var revealpoint = 200;

            if(revealTop < windowheight - revealpoint){
                reveals3[i].classList.add('active');
            }
            else{
                reveals3[i].classList.remove('active');
            }
        }
        var reveals4 = document.querySelectorAll(".reveal4");

        for(var i = 0; i < reveals4.length; i++){

            var windowheight = window.innerHeight;
            var revealTop = reveals4[i].getBoundingClientRect().top;
            var revealpoint = 250;

            if(revealTop < windowheight - revealpoint){
                reveals4[i].classList.add('active');
            }
            else{
                reveals4[i].classList.remove('active');
            }
        }
    }
};

function slapSide(decidenum, num){
    const side1 = document.getElementById('s1');
    const side2 = document.getElementById('s2');
    const side3 = document.getElementById('s3');
    const side4 = document.getElementById('s4');

    var Is = [side1, side2, side3, side4];

    

    if(decidenum == 1){
        for(var i = 0; i < Is.length; i++){
            Is[i].classList.remove('show');
            Is[num].classList.add('show');
        }
    }
    else{
        for(var i = 0; i < Is.length; i++){
            Is[i].classList.remove('show');
        }
    }
  

    

}

