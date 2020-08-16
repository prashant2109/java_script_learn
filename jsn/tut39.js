console.log('This is tut 39');
function func1(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const error = true;
            if (!error){
                console.log('Your Promise has been resolved');
                resolve();
            }
            else{
                console.log('Your promise is not resolved');
                reject();
            }
        }, 2000);
    })   
}

func1().then(function(){
    console.log('Issue is resolved');
}).catch(function(){
    console.log('Issue is not resolved');
})