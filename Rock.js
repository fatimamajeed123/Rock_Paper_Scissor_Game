var useresult=0;
var compresult=0;
let currentindex=0;

const choices = document.querySelectorAll(".choice ");
const msg =document.querySelector(".result");
const userres=document.querySelector(".user-result");
const compres=document.querySelector(".comp-result");

console.log(choices);
choices.forEach((choiceselected) => {
    choiceselected.addEventListener("click",()=>{
        const userchoiceid=choiceselected.getAttribute("id");
        
        playgame(userchoiceid);
    });
});

function playgame(userchoice){
    comptchoice=computerrandomchoice();
    stopAnimation();
    
    animatedImage.src = "Images/"+comptchoice+".png";
    console.log("Computer choice: ",comptchoice);
    console.log("User choice: ",userchoice);

    if(userchoice===comptchoice){
        console.log("Match draw");
        msg.innerText='Match has been draw';
    }
    else{
        var userwin=true;
        if(userchoice==="rock"){
            userwin=comptchoice==="paper"? false: true;
        }
        else if(userchoice==="paper"){
            userwin=comptchoice==="scissor"? false: true;
        }
        else{
            userwin=comptchoice==="rock"?false:true;
        }
        showwinner(userwin,comptchoice,userchoice);
    }
    
}

const showwinner=(userwin,comptchoice,userchoice)=>{
    if(userwin==true){
        console.log("You win! ");
        msg.innerText='You win! your '+userchoice +" beats "+comptchoice;
        useresult++;
        userres.innerText=useresult;
    }
    else{
        console.log("You lose");
        msg.innerText='You loose!  '+comptchoice +" beats "+userchoice;
        compresult++;
        compres.innerText=compresult;
    }
}

const computerrandomchoice=()=>{
    
    const options =["rock","paper","scissor"];
    const randomno=Math.floor(Math.random()*3);
    return options[randomno];
}



const animatedimage =document.querySelector("#animatedImage");

const computer_selection_animation=()=>{
    
    const comptchoices = ["Images/scissor.png", "Images/rock.png", "Images/paper.png"];
    
    currentindex = (currentindex + 1) % comptchoices.length;
    animatedImage.src = comptchoices[currentindex];
    
}

function startAnimation() {
    interval = setInterval(computer_selection_animation, 100); // Change image every 100ms
}

function stopAnimation() {
    clearInterval(interval);
    
}
window.onload = startAnimation();
const startagain=()=>{
    stopAnimation();
    
    startAnimation();
    msg.innerText='Result';
}


    

