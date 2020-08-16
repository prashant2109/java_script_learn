console.log('This is tut 18');
let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);
btn.addEventListener('mousedown', func3);

function func1(e){
    console.log('Thanx', e);
    e.preventDefault();
};

function func2(e){
    console.log('Thanx it is a double click', e);
    e.preventDefault();
};

function func3(e){
    console.log('Thanx it is a mouse down', e);
    e.preventDefault();
};


