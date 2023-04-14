//your code here
document.getElementById("letterCount").innerHTML = 0;

document.getElementById('evaluatedText').onkeyup = function(){
   
	document.getElementById("letterCount").innerHTML = this.value.length;
}


  
