
//Running Score
var score = 0;
var losses = 0;

//Create word bank array
var wordBank = ["Old Fashioned", "Tom Collins", "Cubalibre", "Paloma", "margarita", "Rob Roy"]; 

// array/string to check agains alpha only characters
var alphaOnly = "abcdefghijklmnopqrstuvwxyz";
//empty array to add "used letters" to
var usedLetterArr = [];
var correctLetters = 0;


//set chanches to 6
var chances = 6;


//grab random word from array
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase();
    console.log(randomWord);
    

    for (i = 0; i < randomWord.length; i++) {
        var letterIndex = randomWord.indexOf(randomWord[i]);
        var letterLi = document.getElementById("wordUl").innerHTML;
        
        if(randomWord[i] == " ") {
            console.log(randomWord[i],letterIndex);
            document.getElementById("wordUl").innerHTML = letterLi + '<li class="space"><div class="space">'+randomWord[i].toUpperCase();+'</div></li>';
            } else {
            console.log(randomWord[i],letterIndex);
            document.getElementById("wordUl").innerHTML = letterLi + '<li class="ltrLi'+letterIndex+'"><div class="ltrBox'+letterIndex+'"><div class="ltrBoxContents'+letterIndex+' hidden">'+randomWord[i].toUpperCase();+'</div></div></li>';
            }
    }


for (var i = 0; i < randomWord.length; i++) {
    var letterIndex = randomWord.indexOf(randomWord[i]);

        if (randomWord[i] == " ") {
            correctLetters += 1;
        }
    }

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
            document.getElementById("popupContent").innerHTML = "<strong>Aww snap! You've already used that letter... Try again.</strong>";
            document.getElementById("popupWrapper").className = "show";
            setTimeout(function(){
            document.getElementById("popupWrapper").className = "hidden";
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
                
                for (var i = 0; i < randomWord.length; i++) {
                    var letterIndex = randomWord.indexOf(randomWord[i]);

                        if (randomWord[i] == " ") {
                            console.log("this word has a space");
                        }

                        if (randomWord[i] === keyPress) {
                            correctLetters = correctLetters+1;
                            console.log(correctLetters);           

                            // console.log(document.getElementsByClassName("ltrBoxContents"+letterIndex));
                            document.getElementsByClassName("ltrBoxContents"+letterIndex+" hidden")[0].className = "ltrBoxContents";
                            
                        }

                }
                
                if (correctLetters == randomWord.length) {
                    score++;
                    console.log("game wone")
                    document.getElementById("score").innerHTML = "<h5>Score: "+score+"</h5>";
                    $('#gameWin').modal('show');
                    //Reset Game
                }

            } else {
                console.log("not one...");
                document.getElementById("chances").innerHTML = "<h5>Chances: " + (chances - 1)+"</h5>";
                chances -= 1;

                if (chances == 0) {
                    losses += 1;
                    $('#gameLose').modal('show');
                }
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




