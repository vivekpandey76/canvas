
var canvas=document.querySelector("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var cxt=canvas.getContext("2d");

var mouse={                 //  DEFINIG POSITION OF X AND Y TO UNDEFINED
  x: undefined,
  y: undefined
}
//INTIALIZING MAX AND MIN WIDTH 
var maxRadius=40
var minRadius=2
var colorArray=[
  '#2e3E50',
  '#E74C3C',
  '#ECF0F1',
  '#349808',
  '#298889',
];

window.addEventListener('mousemove',function(event){          //EVENTLISTENER FOR MOUSEMOVE
  mouse.x=event.x;
  mouse.y=event.y;
  
});

window.addEventListener('resize',function(){         //EVENTLISTENER FOR RESIZE THE WINDOW
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  init();
});

function Circle(x,y,dx,dy,radius){                          //CLASS FOR DRAWING THE CIRCLE
  this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  this.radius=radius;
  this.color=colorArray[Math.floor(Math.random()*colorArray.length)];
  this.draw=function(){
    cxt.beginPath();
    cxt.arc(this.x,this.y,this.radius,0,2*Math.PI,true);
    cxt.strokeStyle="black";
    cxt.stroke();
    cxt.fillStyle=this.color;
    cxt.fill();

  }
  this.update=function(){                                         //UPDATE FUNCTION
    if(this.x + this.radius > innerWidth ||this.x-this.radius < 0){
      this.dx=-this.dx;
    }
    if(this.y+this.radius > innerHeight || this.y-this.radius <0){
      this.dy=-this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;

    //interacting
    if(mouse.x - this.x <50 && mouse.x-this.x>-50 && mouse.y-this.y<50 && mouse.y-this.y>-50)
      {
      if(this.radius<maxRadius){
        this.radius+=1;
      }
    } else if (this.radius >minRadius) {
        this.radius-=1;
      }
    

    this.draw();
  }
  }
 

    var circleArray= [];

  function init(){

    circleArray=[];
    console.log(circleArray);
    for(var i=0;i<700;i++){
      var x=Math.random()*(innerWidth-radius*2)+radius;
      var y=Math.random()*(innerHeight-radius*2)+radius;
      var dx=(Math.random()-0.5);
      var dy=(Math.random()-0.5);
      var radius=30;
      circleArray.push(new Circle(x,y,dx,dy,radius));
    }
  }
 
  

function animate(){
  requestAnimationFrame(animate);
  cxt.clearRect(0,0,innerWidth,innerHeight);
  for(var i=0;i<circleArray.length;i++){
    circleArray[i].update();
  }
 
}
init();
animate();



