console.log('Ajax tut');

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    //xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.setRequestHeader('content-type', 'application/json');

    // What to do on progress
    xhr.onprogress = function () {
        console.log('On progress');
    }

    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        }

        else {
            console.error('some error occured');
        }
    }
    params = JSON.stringify({ "name": "test", "salary": "123", "age": "23" })
    // send the request
    xhr.send(params);
    console.log('We are done');

}

let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler)

function popHandler() {

    console.log('You have clecked pop Handler');
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
    //xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    //xhr.setRequestHeader('content-type', 'application/json');

    // What to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj['data']);
            let list = document.getElementById('list');
            str = ""
            for (key in obj['data'])
                //console.log(key);
            {
                str += `<li>${obj[key].employee_name}</li>`
            }
            list.innerHTML = str;
        }

        else {
            console.error('some error occured');
        }
    }
    
    xhr.send();
    console.log('We are fetching employees');
}