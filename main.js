canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
rover_width = 100;
rover_height = 90;
rover_x = 20;
rover_y = 20;
nasa_images= ["mars.jpg", "mars1.jpg", "mars2.jpg", "mars3.jpg", "mars4.jpg"];
var background_img = nasa_images[random_number];
var random_number= Math.floor(Math.random()*5);
console.log(random_number);
rover_img = "rover.png";
function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src= background_img;
    
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src= rover_img;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag , 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", myKeydown);
function myKeydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        up();
        console.log("up");
    }
    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    if(keyPressed == '37'){
        left();
        console.log("left");
    }
    if(keyPressed == '39'){
        right();
        console.log("right");
    }
}
    function up(){
            if(rover_y>=0){
                rover_y= rover_y-20;
                console.log("When up key is pressed, x="+ rover_x +"& y="+ rover_y);
                uploadBackground();
                uploadRover();
            }
    }
    function down(){
            if(rover_y<=500){
                rover_y= rover_y+10;
                console.log("When down key is pressed, x="+ rover_x + "& y="+ rover_y);
                uploadBackground();
                uploadRover();
            }
    }
    function right(){
            if(rover_x<=690){
                rover_x= rover_x+20;
                console.log("When right key is pressed, x="+ rover_x + "& y="+ rover_y);
                uploadBackground();
                uploadRover();
            }
    }
    function left(){
            if(rover_x>=0){
                rover_x= rover_x-20;
                console.log("When left key key is pressed, x="+ rover_x + "&y="+ rover_y);
                uploadBackground();
                uploadRover();
            }
    }
