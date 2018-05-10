//Create word bank array
var wordBank = ["Old Fashioned", "Tom Collins", "Cubalibre", "Paloma"];

var chances = 6;

//grab random word from array
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase();
    console.log(randomWord);

// array/string to check agains alpha only characters
var alphaOnly = "abcdefghijklmnopqrstuvwxyz";
//empty array to add "used letters" to
var usedLetterArr = [];

//grabs the keyboard event
document.onkeyup = function(event){
    //stores the key "value" that was pressed
    var keyPress = event.key;
    
    //checks to see if the key value is in the alpha string
    if (alphaOnly.includes(keyPress)){
        //changes the value to upper case
        var upperKey = keyPress.toLocaleUpperCase();
        //stores the inner html of the "usedLetters" div in the index.html
        var usedLetters = document.getElementById("usedLetters").innerHTML;

        
        //checks to see if the letter has bee tried yet
        if(usedLetterArr.includes(keyPress)){
           //flash css message that letter has been used.
            document.getElementById("tempMessage").innerHTML = "That letter has already been used";
            document.getElementById("tempMessage").className = "show";
            setTimeout(function(){
            document.getElementById("tempMessage").className = "hidden";
            }, 1600);
        } else {
            //takes the valid keypress and adds it to the used array
            usedLetterArr.push(keyPress);
            //this is showing that it is updating the array
            console.log(usedLetterArr);
            //adds letter to the "usedLetters" div in index.html
            document.getElementById("usedLetters").innerHTML = usedLetters + upperKey;  
            
            //checks to see if letter chosen is correct
            if (randomWord.includes(keyPress)){
                console.log("GOT ONE!");
                //TO DO:  
                    //find how many of that letter are in the word and where they are
                    //uncover/display letter(s)
            } else {
                console.log("not one...");
                document.getElementById("chances").innerHTML = "Remaining Chances: " + (chances - 1);
                chances -= 1;
            }

            }
        
        
        
       
        
    
    
    
    
    } else {
        //flash css message that character is not valid.
        document.getElementById("tempMessage").innerHTML = "That is not a recognized character...";
        document.getElementById("tempMessage").className = "show";
            setTimeout(function(){
            document.getElementById("tempMessage").className = "hidden";
            }, 1600);
    }
}




