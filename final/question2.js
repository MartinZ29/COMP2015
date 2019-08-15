
let allImg = document.querySelectorAll('img');

for(let img of allImg){
    img.style.border = '4px solid red';
}

let today = new Date();
let thatDay = new Date(2020, 10, 03);
let oneDay = 1000*60*60*24;

let questionTwo = function(){
    return (thatDay.getTime() - today.getTime())/oneDay;
}

