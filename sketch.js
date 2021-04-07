const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

var hour = dateTime.slice(11,13);
      

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
   
    if(backgroundImg){
        background(backgroundImg);
        }

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour == 0){
        textSize(20);
        text("Time : 12am", 200,50);
    }
    else if(hour <= 12){
        textSize(20);
        text("Time : " + hour +"am",200,50)
    }
    else{
        textSize(20);
        text("Time : " + hour%12 +"pm",200,50)
    }
}

async function getBackgroundImg(){

var    response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var  responseJSON = await response.json();
var   dateTime = responseJSON.datetime;
    hour = dateTime.slice(11,13);
      
        if(hour>=04 && hour<=06){
            bg = "sunrise1.png";
        }else if(hour>=06 && hour<=08){
            bg = "sunrise2.png"
        }
        else if(hour>=08 && hour<=10){
            bg = "sunrise3.png"
        }
        else if(hour>=10 && hour<=12){
            bg = "sunrise4.png"
        }
        else if(hour>=12 && hour<=14){
            bg = "sunrise5.png"
        }
        else if(hour>=14 && hour<=16){
            bg = "sunrise6.png"
        }
        else if(hour>=16 && hour<=18){
            bg = "sunset7.png"
        }
        else if(hour>=18 && hour<=20){
            bg = "sunset8.png"
        }
        else if(hour>=20 && hour<=22){
            bg = "sunset11.png"
        }
        else if(hour>=22 && hour<=24){
            bg = "sunset11.png"
        }
        else if(hour>=24 && hour<=0){
            bg = "sunset11.png"
        }
        else if(hour>=0 && hour<=2){
            bg = "sunset12.png"
        }
       
        backgroundImg = loadImage(bg);
       
    }
    

