var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceİmage="dice" +randomNumber1+ ".png";
var randomimageSource="image/"+ randomDiceİmage;
var image1=document.querySelectorAll('img')[0];
image1.setAttribute("src",randomimageSource);

var randomNumber2=Math.floor(Math.random() * 6) +1;

var randomimageSource2="image/dice"+ randomNumber2 + ".png";
document.querySelectorAll('img')[1].setAttribute("src",randomimageSource2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=` Play 1 Wins`;
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML=` Play 2 Wins`;
}
else{
    document.querySelector("h1").innerHTML=` Draw`;
}
