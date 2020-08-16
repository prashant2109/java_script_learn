console.log('This is tut20');
let imp = ['sas', 'sdsd', 'fefe']
localStorage.setItem('Name', 'Harry');
localStorage.setItem('Name2', 'Rohan');
localStorage.setItem('sbz', JSON.stringify(imp));
//localStorage.clear();
//localStorage.removeItem('Name');
let name = JSON.parse(localStorage.getItem('sbz'));
console.log(typeof name);