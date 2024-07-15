


function animationDots(){
    const dotContainer = document.querySelector(".dots");
    let text = "...";
    let element = -1;
    
    setInterval(()=>{
        element++;
        dotContainer.textContent += text[element];
        if(element > text.length -1){
            dotContainer.textContent="";
            element= -1;
        }
    },1000); 
 
}

animationDots();