// generate password
function generate(){

    // set password length/complexity
    let complexity = document.getElementById("slider").value;

    // possible values.
let values = "abcdefghijklmnopqrstuvwxyz";
let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let values = "1234567890";
let values = `!"#$%&'(\`)*+,-./:;<=>?@[\\]^_{|}~`;

let password= "";

// create for loop to choose password characters

for( var i=0; i <= complexity; i++);
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(Value.length - 1)));


}

   //add password to textbox/diplay area
   document.getElementById("display").values = password;
