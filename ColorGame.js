var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares=document.querySelectorAll(".square");
var pickedColor = pickColor();
var message=document.getElementById("message");
var title=document.getElementById("title");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");


hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	h1.style.backgroundColor="steelblue";
	reset.textContent="NewColors"
	numberOfSquares=6;
	colors=generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	title.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
});

easy.addEventListener("click",function(){
	easy.classList.add("selected");
	hard.classList.remove("selected");
	h1.style.backgroundColor="steelblue";
	reset.textContent="NewColors"
	numberOfSquares=3;
	
	colors=generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	title.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}

	}

});




reset.addEventListener("click",function(){
	colors=generateRandomColors(numberOfSquares);

for(var i=0;i<squares.length;i++)
{
	//initial color
	squares[i].style.backgroundColor=colors[i];
}
	pickedColor=pickColor();
	title.textContent=pickedColor;
	h1.style.backgroundColor="steelblue";
	reset.textContent="NewColors"
	message.textContent="";
});


title.textContent = pickedColor;


for(var i=0;i<squares.length;i++)
{
	//initial color
	squares[i].style.backgroundColor=colors[i];
	//add event listener
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor)
		{
			changeColors(clickedColor);
			message.textContent="Correct";
			h1.style.backgroundColor = clickedColor;
			reset.textContent="Play Again?"


		}
		else
		{
			this.style.backgroundColor = "#232323";
			message.textContent="Try Again";
		}
	});
}

function changeColors(color){
	for(var j=0;j<squares.length;j++)
			{
				squares[j].style.backgroundColor=color;
				
			}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());

	}
	return arr;

}
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+r+", "+g+", "+b+")";


}