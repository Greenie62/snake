let snake;
let scl=20;
let food;
let score=0;

function setup(){
    createCanvas(400,500)
    snake=new Snake()
    frameRate(10)
    updateFood()
}



function draw(){
    background('black')
 
    snake.death()
    snake.update()
    snake.show()

   if(snake.eat(food)){
       updateFood()
       score+=100;
       document.querySelector("#score").innerHTML=score
   }


    fill('purple');
    rect(food.x,food.y,scl*2.5,scl*2.5)
}


document.querySelector(".left").onclick=()=>{
    console.log('left fx fired')
     snake.total++
    snake.move([-1,0])
}

document.querySelector(".right").onclick=()=>{
    console.log('right fx fired')
     snake.total++
    snake.move([1,0])
}

document.querySelector(".top").onclick=()=>{
    console.log('top fx fired')
    snake.total++
    snake.move([0,-1])
}

document.querySelector(".down").onclick=()=>{
    console.log('down fx fired')
    snake.total++
    snake.move([0,1])
}


function updateFood(){
  
    food=createVector(food);
    food.x=random(width-scl)
    food.y=random(height-scl)
 
    console.log(food)
}