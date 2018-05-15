
//Running Score
var score = 0;
var losses = 0;

//Create word bank array
var wordBank = ["Old Fashioned", "Tom Collins", "Cubalibre", "Paloma", "margarita", "Rob Roy", "Mojito", "Manhatten", "Cosmo", "Negroni", "Martini", "Bloody Mary", "Sangria", "Moscow Mule", "Sidecar", "Pisco Sour", "Long Island", "Hurricane", "Aviation"]; 

// array/string to check agains alpha only characters
var alphaOnly = "abcdefghijklmnopqrstuvwxyz";

//empty array to add "used letters" to
var usedLetterArr = [];
var correctLetters = 0;

//set chanches to 6
var chances = 6;


window.onload = function () {     
    $('#gameStart').modal('show'); 
    setTimeout( function () {
        document.onkeyup = function() {
        $('#gameStart').modal('hide');
        gamePlay();
    }}, 500);
};


function resetGame() {
    // Set chances back to 6 in the script & html
    chances = 6;
    document.getElementById("chances").innerHTML = "<h5>Chances: 6</h5>";
    //reset word
    document.getElementById("wordUl").innerHTML = " ";
    //reset used letter array & html
    usedLetterArr = [];
    document.getElementById("usedLetters").innerHTML = " ";
    //reset correct letter count
    correctLetters = 0;
    gamePlay();
};

function gamePlay() {
//grab random word from array
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)].toLowerCase();
    console.log(randomWord);
    
    //loop to check each letter of the word and create a list item in the html
    for (i = 0; i < randomWord.length; i++) {
        var letterIndex = randomWord.indexOf(randomWord[i]);
        var letterLi = document.getElementById("wordUl").innerHTML;
        
        // checks to see if there is a space in the word to style it differently on the DOM
        if(randomWord[i] == " ") {
            console.log(randomWord[i],letterIndex);
            //This increases the correct letters by 1 if there is a "space" in the word.
            correctLetters += 1;
            document.getElementById("wordUl").innerHTML = letterLi + '<li class="space"><div class="space">'+randomWord[i].toUpperCase();+'</div></li>';
            } else {
            console.log(randomWord[i],letterIndex);
            document.getElementById("wordUl").innerHTML = letterLi + '<li class="ltrLi'+letterIndex+'"><div class="ltrBox'+letterIndex+'"><div class="ltrBoxContents'+letterIndex+' hidden">'+randomWord[i].toUpperCase();+'</div></div></li>';
            }
    }

//grabs the keyboard event
document.onkeyup = function(event){
    //stores the key "value" that was pressed
    var keyPress = event.key.toLowerCase();
    
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
                
                //loops to check if keypress matches one or more of the letters in the word
                for (var i = 0; i < randomWord.length; i++) {
                    var letterIndex = randomWord.indexOf(randomWord[i]);
                        
                        // if letter(s) are correct, removes the "hidden" class value to display the letter
                        if (randomWord[i] === keyPress) {
                            correctLetters = correctLetters+1;
                            console.log(correctLetters);           

                            document.getElementsByClassName("ltrBoxContents"+letterIndex+" hidden")[0].className = "ltrBoxContents";
                            
                        }

                }
                
                
                if (correctLetters == randomWord.length) {
                    score++;
                    console.log("game won")
                    document.getElementById("score").innerHTML = "<h5>Score: "+score+"</h5>";
                    $('#gameWin').modal('show');
                    //Reset Game
                    document.onkeyup = function() {
                        $('#gameWin').modal('hide');
                        resetGame();
                    };
                }

            } else {
                console.log("not one...");
                document.getElementById("chances").innerHTML = "<h5>Chances: " + (chances - 1)+"</h5>";
                chances -= 1;

                if (chances == 0) {
                    losses += 1;
                    document.getElementById("losses").innerHTML = "<h5>Losses: " + (losses)+"</h5>";
                    $('#gameLose').modal('show');
                    //Reset Game
                    document.onkeyup = function() {
                        $('#gameLose').modal('hide');
                        resetGame();}
                    ;
                }
            }

            }
        
        
        
       
        
    
    
    
    
    } else {
        //flash css message that character is not valid.
        document.getElementById("popupContent").innerHTML = "That is not a recognized character...";
        document.getElementById("popupWrapper").className = "show";
            setTimeout(function(){
            document.getElementById("popupWrapper").className = "hidden";
            }, 1600);
    }
}
} 
