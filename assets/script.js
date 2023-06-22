// creating varibales to hold values for each charcater type inside of an array
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharts = ["!", "#", "$", "%", "&", ")", "*", "+", "-", "/", "<", "=", "?", "@", "[", "]", "~"];
// values is kind of like a container for "names" to go into so that we can pick from one by one to finally build a password
var values = [];
// answer is gonna be the string, which we pick from our array of characters to build a password
var answer = "";

// this function grabs all criteria to build a password 
function generatePassword() {
    // make a variable that holds the value of password length
    var charLength = prompt("Enter the amount of characters. Must be between 8 - 128 characters");
    
    // if password is not a numeric number or too short or too long, we need to tell the user, and restart the prompts
    if (isNaN(charLength) || charLength < 8 || charLength > 128) {
        (alert("Character length must be between 8 - 128. Please select desired amount of characters."));
        writePassword()
        // if password length is between 8 and 128 then we want to...(else)
    } else {
        // ask the user "Allow uppercase letters?" and if they do want uppercase, were gonna add all uppercase values to pick from
        if (confirm("Allow uppercase letters?")) {
            values = values.concat(upperCase)
        }
        // ask the user "Allow lowercase letters?" and if they do want lowercase, were gonna add all lowercase values to pick from
        if (confirm("Allow lowercase letters?")) {
            values = values.concat(lowerCase)
        }
        // ask the user "Allow numbers?" and if they do want numbers, were gonna add all number values to pick from
        if (confirm("Allow numbers?")) {
            values = values.concat(numbers)
        }
        // ask the user "Allow special characters?" and if they do want special characters, were gonna add all special characters values to pick from
        if (confirm("Allow special characters ($, #, @, etc. )")) {
            values = values.concat(specialCharts)
        }
        // if the user clicks no and all prompts (we have nothing to build a password with) we need to tell them, and restart the prompts
        if (values.length === 0) {
            alert("You must choose atleast one type of character to generate a password.")
            writePassword()
        } else {
            // loop aka do something as many times as the length of the password desired
            for (var i = 0; i < charLength; i++) {
                // erverytime we loop, we want to randomize a number between 0 and the length of our hat 
                var randomIndex = [Math.floor(Math.random() * values.length)];
                // take the random number from randomIndex and grab that index in the array of values aka the HAT
                answer += values[randomIndex];
            }
        }
        // return aka send out the answer that we build(the password)
        return answer
    }
}
// This function writes the password generated and inputs in text area
function writePassword() {
    // make variable that will hold the value of the return from generatePassword aka the output of the funtion
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    
}


var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);