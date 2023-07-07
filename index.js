
const addInput = ()=>{

//taking the input values     
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;

//storing in localstorage
localStorage.setItem('name', name);
localStorage.setItem('email',email);

//showing one alert after saving the data
alert('form data saved !');
}