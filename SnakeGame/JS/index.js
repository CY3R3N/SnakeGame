//Cons and var
let inputDir = {x:0, y:0};
let speed =2;
let score =0;
let lastPaintTime = 0;
let arr=[{x:13,y:15}]
food ={x:6,y:7};

//functions
function main(ctime){
    window.requestAnimationFrame(main);
    //console.log(ctime)
    if((ctime - lastPaintTime)/1000<1/speed){
        return
    }
        lastPaintTime = ctime;
        Engine();
    }
    function ifCollapse(snarr){
        for(let i=1; i< arr.length;i++){
            if(snakeElement)
        }
    }
function Engine(){
    //snake array
    if(ifCollapse(arr)){
        inputDir = {x:0, y:0};
        arr = [{x:13,y:15}];
        score = 0;


    }
// Score increase and food respawn
if(arr[0].y === food.y && arr[0].x ===food.x){
    arr.unshift({x:arr[0].x + inputDir.x, y:arr[0].y + inputDir.y});
    let a = 2;
    let b = 16;
    food ={x: Math.round(a+(b-a)*Math.random()),y: Math.round(a+(b-a)*Math.random())}
}
//snake movement
arr[0].x += inputDir.x;
arr[0].y += inputDir.y;


//Snake display
background.innerHTML ="";
arr.forEach((e,index)=>{
snakeElement= document.createElement('div');
snakeElement.style.gridRowStart =e.y;
snakeElement.style.gridColumnStart =e.x;

if(index === 0){
    snakeElement.classList.add('head');
}else{
    snakeElement.classList.add('snake');
}
background.appendChild(snakeElement);
    });
    //Food display
foodElement= document.createElement('div');
foodElement.style.gridRowStart =food.y;
foodElement.style.gridColumnStart =food.x;
foodElement.classList.add('food')
background.appendChild(foodElement);
}    

//Logic
window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
inputDir = {x:0, y:1}//game start
switch (e.key) {
    case "ArrowUp":
        console.log("ArrowUp")
        inputDir.x=0;
        inputDir.y=-1;
        break;

        case "ArrowDown":
        console.log("ArrowDown")
        inputDir.x=0;
        inputDir.y=1;
        break;

        case "ArrowLeft":
        console.log("ArrowLeft")
        inputDir.x=-1;
        inputDir.y=0;
        break;

        case "ArrowRight":
        console.log("ArrowRight")
        inputDir.x=1;
        inputDir.y=0;
        break;


    default:
        break;
}

});
