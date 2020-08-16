console.log('This is tut17 on events');

document.getElementById('heading').addEventListener('click', function(e){
    console.log('You have clicked Heading');
    let variable;
    variable = e.target.classList;
    console.log(variable);
    //location.href = '//codewithharry.com'
});