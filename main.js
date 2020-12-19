canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_img="mars.jpg";
rover_img1="rover.png";
function add(){
   back_img=new Image();
   back_img.onload=uploadbackground;
   back_img.src=background_img;
   rover_img=new Image();
   rover_img.onload=uploadrover;
   rover_img.src=rover_img1;
}
function uploadbackground(){
    ctx.drawImage(back_img,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    key_pressed=e.keyCode;
    console.log(key_pressed);
    if (key_pressed=='38'){
        up();
        console.log("Up");
    }
    if (key_pressed=='40'){
        down();
        console.log("Down");
    }
    if (key_pressed=='37'){
        left();
        console.log("Left");
    }
    if (key_pressed=='39'){
       right();
        console.log("Right");
    }
}
function up() { 
    if(rover_y >=0) { 
        rover_y = rover_y - 10; 
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
        uploadbackground(); 
        uploadrover(); 
    } }
    function down() { 
        if(rover_y <=500) { 
            rover_y = rover_y + 10; 
            console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
            uploadbackground(); 
            uploadrover(); 
        } }
        function left(){
            if(rover_x >=0) { 
                rover_x = rover_x - 10; 
                console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
                uploadbackground(); 
                uploadrover();  
        }}
        function right(){
            if(rover_x <=700) { 
                rover_x = rover_x + 10; 
                console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
                uploadbackground(); 
                uploadrover();  
        }}  
