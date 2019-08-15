
let allParagraph = document.querySelectorAll('p');

for(let p of allParagraph){
    p.onclick = function(event){
        event.preventDefault();
        p.classList.add('clicked');
        p.style.backgroundColor = 'yellow';
    }

    p.onmouseover = function(event){
        event.preventDefault();
        p.style.fontStyle = 'italic';
    }

    p.onmouseout = function(event){
        event.preventDefault();
        p.style.fontStyle = 'normal';
    }
}

