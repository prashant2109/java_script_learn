console.log('This is tut 25');
let divElem = document.createElement('div');
let text = document.createTextNode('This is Element. Click to edit');
divElem.appendChild(text);
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width:154px; margin: 34px; padding:23px;');
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');

container.insertBefore(divElem, first);

console.log(divElem, container, first);

divElem.addEventListener('click', function(){
    let noTextArea = document.getElementsByClassName('textarea').length;
    if (noTextArea == 0){
    let html = Element.iinnerHTML;
    html = `<textarea class="form-control" class="textarea" id="textarea" rows="3">${html}</textarea>`    
    divElem.innerHTML = html;
    }
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function(){
        Element.innerHTML = textarea.nodeValue;
    })
});
