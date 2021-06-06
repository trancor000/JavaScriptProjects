var hello;

hello = () => {
    return "Hello World";
}

document.getElementById("Arrow").innerHTML = hello();

var ages = [3, 5, 9, 12, 15];

//Using the arrow function to pass in a parameter of age
checkAge = (age) => age >= 18;

function myFunction() {
    //Use the .some() to iterate through the array of ages and display the result.
    document.getElementById('displayAge').innerHTML = ages.some(checkAge);
}