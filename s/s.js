
var changednum = 1;

const but1 = document.getElementById('itemBut1');
const but2 = document.getElementById('itemBut2');
const but3 = document.getElementById('itemBut3');
const but4 = document.getElementById('itemBut4');
const but5 = document.getElementById('itemBut5');
const but6 = document.getElementById('itemBut6');
const but7 = document.getElementById('itemBut7');
const but8 = document.getElementById('itemBut8');
const but9 = document.getElementById('itemBut9');
const but10 = document.getElementById('itemBut10');
const but11 = document.getElementById('itemBut11');

const art1 = document.getElementById('skiers');
const art2 = document.getElementById('sticks');
const art3 = document.getElementById('boots1');
const art4 = document.getElementById('hands1');
const art5 = document.getElementById('boards');
const art6 = document.getElementById('boots2');
const art7 = document.getElementById('hands2');
const art8 = document.getElementById('helmet');
const art9 = document.getElementById('glases');
const art10 = document.getElementById('jacket');
const art11 = document.getElementById('bottom');

var Buts = [but1, but2, but3, but4, but5, but6, but7, but8, but9, but10, but11];
var Items = [art1, art2, art3, art4, art5, art6, art7, art8, art9, art10, art11];

function changeItem(num) {

    for(var i = 0; i < Buts.length; i++){
        Buts[i].classList.remove('active');


        Buts[num].classList.add('active');
    }
    for(var i = 0; i < Items.length; i++){
        Items[i].classList.remove('active');


        Items[num].classList.add('active');
    }
}



if(window.innerWidth < 1024){
    setInterval( () => {
        changeItem(changednum);

        changednum++;
    }, 6000);
}


