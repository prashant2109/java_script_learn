console.log('welcome to tut14 js');
let element = document.getElementById('myfirst');
//element = element.className;
//element = element.childNodes;
//element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Harry is good boy';
element.innerHTML = '<b>TUT 14</b>'

let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = 'green';

// multiline
elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);
Array.from(elems).forEach(ele => {
    console.log(ele);
    ele.style.color = 'blue';
});