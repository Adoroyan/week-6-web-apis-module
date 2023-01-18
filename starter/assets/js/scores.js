var clearButton = document.getElementById("clear");
var list = document.getElementById("highscores");


function showHighScores()
{
	var result = JSON.parse(localStorage.getItem("score"));
	console.log(localStorage.getItem("score"));
	list.innerHTML="";
	var li = document.createElement("li");
	li.textContent = result;
	list.appendChild(li);
}
showHighScores();

