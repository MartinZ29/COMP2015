
let allLinks = document.querySelectorAll('a');

let questionThree = function(){
    for(let link of allLinks){
        if(link.getAttribute('href').indexOf('bcit')>=0){
            link.setAttribute('href', '#');
        }
    }
}

questionThree();
