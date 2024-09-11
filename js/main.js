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

const previewProject = document.querySelectorAll(".project-preview-info");
const container = document.querySelectorAll(".project-preview");
const btnCopy = document.querySelector(".btn-copy");

previewProject.forEach(button =>{  
    button.addEventListener("click", (e)=>{      
        container.forEach(btn=>{
            btn.classList.remove("active");
        })
    })
    container.forEach(btn=>{
        btn.addEventListener("click",(e)=>{
            e.currentTarget.classList.add("active");
        })
    })
})



btnCopy.addEventListener("click",()=>{
    const text = document.querySelector(".email").innerHTML;
    
    navigator.clipboard.writeText(text);
    
})





