class Snake{
    constructor(){
        this.x=0;
        this.y=0;
        this.dx=0;
        this.dy=0;
        this.tail=[];
        this.total=0;
    }


    update(){
        for(let i=0;i<this.tail.length-1;i++){
            this.tail[i]=this.tail[i+1]
        }

        if(this.total >= 1){
        this.tail[this.total-1]=createVector(this.x,this.y)
        }


        this.x+=this.dx*10
        this.y+=this.dy*10

        this.x=constrain(this.x,0,width-scl)
        this.y=constrain(this.y,0,height-scl)
    }

    show(){

        for(let i=0;i<this.tail.length;i++){
            fill('green')
            rect(this.tail[i].x,this.tail[i].y,scl,scl)
        }
        fill('white');
        rect(this.x,this.y,scl,scl)
    }


    death(){
        for(let i=0;i<this.tail.length;i++){
            let d=dist(this.x,this.y,this.tail[i].x,this.tail[i].y);
            if(d < 1){
                this.tail=0;
                console.log("you died!!")
                score=0;
                document.querySelector("#score").innerHTML=0;
                return;
            }
        }
    }


    move(dir){
        // if(this.dx === 0 && dir[0] !== 0){
        //     this.dx=dir[0]
        //     this.dy=dir[1]
        // }
        // else if(this.dy === 0 && dir[1] !== 0){
        //     this.dx=dir[0]
        //     this.dy=dir[1]
        // }
        // else{
        //     console.log("Cant reverse that way. Its suicide!")
        // }

        if(this.dx !== 0 && dir[0] !== 0){
            console.log("cant do that!")
        }
        else if(this.dy !== 0 && dir[1] !== 0){
            console.log("cant do taht either")
        }
        else{
        this.dx=dir[0]
        this.dy=dir[1]
        }
      
    }

    eat(food){
        var d=dist(this.x,this.y,food.x,food.y)
        if(d < 25){
            console.log('snake ate')
            this.total++
            return true;
        }
        else{
            return false;
        }
    }
}