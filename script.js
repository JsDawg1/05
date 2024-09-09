const btnsBtn = document.querySelectorAll(".btns");
for(let btn of btnsBtn){
    btn.addEventListener('click', getValue);
}

let value;
function getValue(event){
    const clicked = event.target.innerText;
    value = clicked;
} 


const submit = document.querySelector(".submitBtn");
submit.addEventListener('click', changeToThanks)


function changeToThanks(event){
    const mainWin = document.querySelector(".main");
    const thanksWin = document.querySelector(".thanksWin");
    const ratings = document.querySelector("#rate");

    ratings.innerText = value;

    mainWin.style.transition = "opacity 0.5s ease, max-height 0.5s ease";  // Transition for opacity and max-height
    mainWin.style.opacity = "0";       
    mainWin.style.maxHeight = "0";
    mainWin.style.display = "none";
     
    thanksWin.style.display = "flex";
    thanksWin.style.opacity = "1"; 
    
}