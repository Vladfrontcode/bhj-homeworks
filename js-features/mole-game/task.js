const win = document.getElementById('dead');
const lost = document.getElementById('lost');

getHole = index => document.getElementById(`hole${index}`);

getHole(1).onclick = function() {
    if (getHole(1).className.includes( 'hole_has-mole' ))  {
            win.textContent=++win.textContent;
    }else{
        lost.textContent=++lost.textContent;    
    };
    if (lost.textContent === '5') {
        alert ('Вы проиграли!');
        lost.textContent = 0;
        win.textContent = 0;
    };
    if (win.textContent === '10') {
        alert ('Вы победили!');
        lost.textContent = 0;
        win.textContent = 0;
    }
};

getHole(2).onclick = function() {
    if (getHole(2).className.includes( 'hole_has-mole' ))  {
            win.textContent=++win.textContent;
    }else{
        lost.textContent=++lost.textContent;    
    }
    if (lost.textContent === '5') {
        alert ('Вы проиграли!');
        lost.textContent = 0;
        win.textContent = 0;
    };
    if (win.textContent === '10') {
        alert ('Вы победили!');
        lost.textContent = 0;
        win.textContent = 0;
    }
};

getHole(3).onclick = function() {
    if (getHole(3).className.includes( 'hole_has-mole' ))  {
            win.textContent=++win.textContent;
    }else{
        lost.textContent=++lost.textContent;    
    }
    if (lost.textContent === '5') {
        alert ('Вы проиграли!');
        lost.textContent = 0;
        win.textContent = 0;
    };
    if (win.textContent === '10') {
        alert ('Вы победили!');
        lost.textContent = 0;
        win.textContent = 0;
    }
};

getHole(4).onclick = function() {
    if (getHole(4).className.includes( 'hole_has-mole' ))  {
            win.textContent=++win.textContent;
    }else{
        lost.textContent=++lost.textContent;    
    }
    if (lost.textContent === '5') {
        alert ('Вы проиграли!');
        lost.textContent = 0;
        win.textContent = 0;
    };
    if (win.textContent === '10') {
        alert ('Вы победили!');
        lost.textContent = 0;
        win.textContent = 0;
    }
};

getHole(5).onclick = function() {
    if (getHole(5).className.includes( 'hole_has-mole' ))  {
            win.textContent=++win.textContent;
    }else{
        lost.textContent=++lost.textContent;    
    }
    if (lost.textContent === '5') {
        alert ('Вы проиграли!');
        lost.textContent = 0;
        win.textContent = 0;
    };
    if (win.textContent === '10') {
        alert ('Вы победили!');
        lost.textContent = 0;
        win.textContent = 0;
    }
};

getHole(6).onclick = function() {
    if (getHole(6).className.includes( 'hole_has-mole' ))  {
            win.textContent=++win.textContent;
    }else{
        lost.textContent=++lost.textContent;    
    }
    if (lost.textContent === '5') {
        alert ('Вы проиграли!');
        lost.textContent = 0;
        win.textContent = 0;
    };
    if (win.textContent === '10') {
        alert ('Вы победили!');
        lost.textContent = 0;
        win.textContent = 0;
    }
};

getHole(7).onclick = function() {
    if (getHole(7).className.includes( 'hole_has-mole' ))  {
            win.textContent=++win.textContent;
    }else{
        lost.textContent=++lost.textContent;    
    }
    if (lost.textContent === '5') {
        alert ('Вы проиграли!');
        lost.textContent = 0;
        win.textContent = 0;
    };
    if (win.textContent === '10') {
        alert ('Вы победили!');
        lost.textContent = 0;
        win.textContent = 0;
    }
};

getHole(8).onclick = function() {
    if (getHole(8).className.includes( 'hole_has-mole' ))  {
            win.textContent=++win.textContent;
    }else{
        lost.textContent=++lost.textContent;    
    }
    if (lost.textContent === '5') {
        alert ('Вы проиграли!');
        lost.textContent = 0;
        win.textContent = 0;
    };
    if (win.textContent === '10') {
        alert ('Вы победили!');
        lost.textContent = 0;
        win.textContent = 0;
    }
};

getHole(9).onclick = function() {
    if (getHole(9).className.includes( 'hole_has-mole' ))  {
            win.textContent=++win.textContent;
    }else{
        lost.textContent=++lost.textContent;    
    }
    if (lost.textContent === '5') {
        alert ('Вы проиграли!');
        lost.textContent = 0;
        win.textContent = 0;
    };
    if (win.textContent === '10') {
        alert ('Вы победили!');
        lost.textContent = 0;
        win.textContent = 0;
    }
};