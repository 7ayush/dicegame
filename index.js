var x=Math.floor(Math.random()*6)+1;
var y=Math.floor(Math.random()*6)+1;

var i=("images/dice" + x + ".png");
var j=("images/dice" + y + ".png");

var img1=document.querySelectorAll("img")[0];
var img2=document.querySelectorAll("img")[1];

img1.setAttribute("src",i);
img2.setAttribute("src",j);


if(x>y)
{
  document.querySelector("h1").innerHTML=" 🚩Play 1 Wins!";
}
else if(y>x)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}

else
{
  document.querySelector("h1").innerHTML = "🚩Draw 🚩";
}
