let paragraph = document.querySelectorAll('div.answer');
let arrow = document.querySelectorAll('div.question > span');
let firstClick = 0;

for(let i = 0; i < arrow.length; i++){
    arrow[i].addEventListener("click",function(){
        toggleP(arrow[i], paragraph[i]);
    })
}







function toggleP(ar, pa){
    if(firstClick === 0){
        ar.style.transform = 'rotate(0deg)';
        pa.style.animation = 'Increaseheight 0.5s ease-in-out';
        pa.style.animationFillMode = 'forwards';
        firstClick = 1;
    }else{
        ar.style.transform = 'rotate(180deg)';
        pa.style.animation = 'Decreaseheight 0.5s ease-in-out';
        pa.style.animationFillMode = 'backwards';
        firstClick = 0;
    }
}












/*

arrow.addEventListener("click",function(){
    if(firstClick === 0){
        this.style.transform = 'rotate(0deg)';
        paragraph.style.animation = 'Increaseheight 0.5s ease-in-out';
        paragraph.style.animationFillMode = 'forwards';
        firstClick = 1;
    }else{
        this.style.transform = 'rotate(180deg)';
        paragraph.style.animation = 'Decreaseheight 0.5s ease-in-out';
        paragraph.style.animationFillMode = 'backwards';
        firstClick = 0;
    }
});

*/