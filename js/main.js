const project = async()=>{
    try{
        const res = await fetch("../projects/projects.json");
        const data = await res.json();

        data.forEach(produ =>{

            let containerProjectProdu = document.createElement("div");
            containerProjectProdu.classList.add(".container-project-produ");

            containerProjectProdu.innerHTML=
            `
            <div class="project-preview ${produ.class}">
                <div class="project-preview-info ">
        
                    <h2 class="project-preview-name">${produ.name}</h2>
        
                    <div class="project-preview-tech">
                        <a href="${produ.codi}" target="_blank"><i class="ri-github-fill"></i></a>
                        <a href="${produ.url}" target="_blank"><i class="ri-external-link-line"></i></a>
                    </div>
                </div>
    
                <div class="project">
                    <img src="${produ.img}" alt="${produ.name}">
                    <div class="project-info">
                                
                        <div class="project-tech">
                            <p>${produ.tech1}</p>
                            <p>${produ.tech1}</p>
                            <p>${produ.tech1}</p>
                            <p>${produ.tech1}</p>
                            <p>${produ.tech1}</p>
                        </div>
        
                        <div class="project-description">
                            <p>${produ.description}</p>
                        </div>
        
                    </div>
        
                </div>
            </div>    

            `
            document.querySelector(".container-project").appendChild(containerProjectProdu); 
            
        })
        refreshBtn();

    }catch(err){
        console.error("error");
    }


}
project();
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

let previewProject = document.querySelectorAll(".project-preview-info");
let container = document.querySelectorAll(".project-preview");
const btnCopy = document.querySelector(".btn-copy");

function refreshBtn(){
    let previewProject = document.querySelectorAll(".project-preview-info");
    previewProject.forEach(button=>{
        button.addEventListener("click", btnOpenProject)
    })
}
function btnOpenProject(){
    let container = document.querySelectorAll(".project-preview");

        container.forEach(btn=>{
            btn.classList.remove("active");
        })
        container.forEach(btn=>{
            btn.addEventListener("click",(e)=>{
                e.currentTarget.classList.add("active");
            })
        })
}
btnCopy.addEventListener("click",()=>{
    const text = document.querySelector(".email").innerHTML;
    
    navigator.clipboard.writeText(text);
    
})





