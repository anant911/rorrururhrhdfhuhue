img="";

function preload()
{
img=loadImage("dog_cat.jpg");
}

function setup()
{
canvas=createCanvas(600,400);
canvas.center();

} 

function draw()
{
image(img, 0,0, 600,400);
fill("#31e0c0");
text("Dog",250,70);
text("CAT",350,100)
stroke("#0e3318");
noFill();
rect(100,60,400,300);
rect(270,80,300,300)



}