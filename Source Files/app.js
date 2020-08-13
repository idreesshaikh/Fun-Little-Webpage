//Some JS
var pics = [
    "Pictures/two.jpg",
    "Pictures/three.jpg",
    "Pictures/four.jpg",
    "Pictures/seven.jpg",
    "Pictures/nine.jpg",
    "Pictures/ten.jpg",
    "Pictures/eleven.jpg",
    "Pictures/twelve.jpg",
    "Pictures/thirteen.jpg"
];

var BT = document.querySelector("button");

var IMG = document.querySelector("img");

var CNT = 1;

BT.addEventListener("click", function(){
    if(CNT===9) {
        CNT=1;
    }
    IMG.src = pics[CNT]
    CNT = CNT +1;
});