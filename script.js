//your code here
function countLetter(){
	var text = document.getElementById("evaluatedText").value
	var numWords = 0;
	for (var i = 0; i < text.length; i++) {
          var currentCharacter = text[i];
                        
         if (currentCharacter == " ") {
                    numWords += 1;
                }
            }
	return numWords;
}
document.getElementById("letterCount").innerHTML = numWords ;