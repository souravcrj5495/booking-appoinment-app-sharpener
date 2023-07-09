
const addInput = ()=>{

//taking the input values     
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let key = "user_" + email;
//Storing in local storage in object form
let myObj = {
    name: name,
    email: email
};
localStorage.setItem(key,JSON.stringify(myObj));
alert('form data saved !');

}
