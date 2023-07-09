
const addInput = ()=>{
localStorage.clear();

//taking the input values     
let name = document.getElementById('name').value;
let email = document.getElementById('email').value;

//Storing in local storage in object form
let myObj = {
    name: name,
    email: email
};
localStorage.setItem("UserDetails", JSON.stringify(myObj));
alert('form data saved !');
}
