const logDiv = document.getElementById("log");
const stateDiv= document.getElementById("state");
const start = document.getElementById("start-btn");
const stop = document.getElementById("stop-btn");

start.addEventListener("click",()=>{
    document.addEventListener("keydown",handleDown)
    document.addEventListener("keyup",handleUp)
    start.disabled="true";
    stop.disabled="false";
})

stop.addEventListener("click",()=>{
    document.removeEventListener("keydown",handleDown)
    document.removeEventListener("keyup",handleUp)
    logDiv.textContent="";
    stateDiv.textContent="";
    start.disabled="false";
    stop.disabled="true";
})

function handleDown(a){
logDiv.textContent='Key $(e.key) pressed down'
stateDiv.textContent='Key is down';
}

function handleUp(a){
    logDiv.textContent='Key $(e.key) pressed up'
    stateDiv.textContent='Key is down';
    }