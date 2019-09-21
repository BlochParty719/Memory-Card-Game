console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";
console.log("User flipped" + cardOne);
console.log("User flipped" + cardTwo);
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank:"queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
const cardsInPlay = [cardOne, cardTwo, cardThree, cardFour];
function checkForMatch (){
var cardId = this.getAttribute("src", cards[cardId].cardImage);
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
function flipCard (){
var cardId = this.getAttribute("data-id")	
console.log("User flipped + cards[cardId].rank");
this.src = (cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].rank);
checkForMatch (this);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
}
function createBoard () {
for(var i = 0; i <cardsInPlay.length; i++)
	var cardElement = document.createElement("img");
	cardElement.setAttribute("src", "images/back.png");
	cardElement.setAttribute("data-id",i);
	cardElement.addEventListener("click", flipCard);
	document.getElementbyID("game-board").appendChild(cardElement);}