// This creates the word bank from which words from the game will be chosen
// I've created an array to do this
var  wordBank = ["Old Fashioned" , "Tom Collins" , "Cubralibre"];

// Math.random generates a number between 0 & 1.
// We multiply that number by the amount of choices in the array using .length.
// Math.Floor takes this number and rounds it down to the nearest whole number.
var randomWord = wordBank[Math.floor(Math.random()*wordBank.length)];
console.log(randomWord);

//While working on the functions, this is just here temporarily
document.getElementById("word").innerHTML = document.getElementById("word").innerHTML + randomWord;

/* We will need to create an inline <ul> with the letters of randomWord in the <li>s.
I'm guessing that's a for() loop (or 2 with one nested) 


// Set an EventListener to start the game with any key press
// I'm adding this to the window because it's not dependent on a specific element
// window.addEventListener("keypress", function () {
//     // This will be the function that starts the game.
//     console.log("This will be the function that starts the game.")

// });

// tester code to listen for keypress and output pressed key
window.addEventListener("keypress", function(event) {
    
//pass value of key pressed to var key
var keyPressed = event.key;

//Pass the keyCode value so we know if the keys pressed were in the alpha range
var keyCode = event.keyCode;

//change value of "keyPressed" to uppercase for display purposes
var upperKey = keyPressed.toLocaleUpperCase();

//get current value of the letters id in the html
var existingKey = document.getElementById("letters").innerHTML;

    // Check to see if characters are letters by using keyCodes
    if(keyCode >= 97 && keyCode <=122 ) {

        //Now that we have a letter we need to check it against the Used Letter bank (array probably?)
            //(if) used, send message to pick again
            //(else) if not used, check it against the hangman word
                //(if) correct, display letter
                //(else) if wrong, subtract 1 from remaining choices
        //Add letter to Used Letter Bank
        

        


        
        //get the element "letters" in the html and update/change its contents to the most recent content it had and add the latest key pressed.
        document.getElementById("letters").innerHTML = existingKey + upperKey;
        console.log("Alpha key pressed: " + keyPressed);




    } else {
        // Display message - change class name to invoke css animation/change class back.
        document.getElementById("tempMessage").innerHTML = "That is not a recognized character...";
        document.getElementById("tempMessage").className = "show";
            setTimeout(function(){
            document.getElementById("tempMessage").className = "hidden";
            }, 1600);
    };

});