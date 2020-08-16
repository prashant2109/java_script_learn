console.log('This is tut42');

let myBtn = document.getElementById('myBtn');

let content = document.getElementById('content');

function getData(){
    url = "https://api.github.com/users"
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}
//getData()

function postData(){
    url = "http://dummy.restapiexample.com/api/v1/create"
    data = '{"name":"test765645634","salary":"123","age":"23"}'
    params = {
        method:'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: data
    }
    fetch(url, params).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}
postData();