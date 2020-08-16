console.log('Tut 42');

let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');

function getData(){
    url = 'sample.txt'
    fetch(url).then((response) => {
        console.log('Inside 1st then');
        return response.text()
    }).then((data) =>{
        console.log('Inside 2nd then');
        console.log(data);
    })
}

getData()