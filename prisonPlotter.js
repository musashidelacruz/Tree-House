//name Mu
//Project Prison Data Visualization
//Description
//CC
//Coordinace also
//How do I flip the Grid?:  400-y?

function setup() {
  //1 = 100people

  createCanvas(400, 400);
  textSize(10);
}

function draw() {
  background(245, 220, 230);
  
  //set perfect state, black
  //circle(x, y, radious)
  //y=400-y=400-4=396
  circle(4, 396,10);
  //fill(-225, -2555, -255)
  fill(54, 21, 30);
  let z = 'Freer State';
  text(z, 9, 398);

//set Hawaii, Crimson Lake
  fill(130, 24, 24)
  //circle(x, y, radious)
//y=400-y=400-16=384
  circle(57, 384,10);
  //pink//fill(255, 128, 100);
  let h = 'Hawaii';
  text(h, 63, 388);
  
  //set Wyoming, Peacock Green
  fill(0, 51, 44);
  //y=400-y=400-30=370
  circle(36, 370,10);
  let wy = 'Wyoming';
  text(wy, 41, 370);
  
//set Utah, Dahlia Purple
  fill(129, 25, 112);
  //y=400-y=400-107=293
  circle(126, 293,10);
  let u = 'Utah';
  text(u, 135, 295);
   

//set Washington, Parrot Green
  fill(3, 50, 32);
    //y=400-y=400-283=117
  circle(319, 117,10);
  let w = 'Washington'
  text(w, 325, 120);
  
  //Lable X Axis , Black Raspberry
  fill(54, 21, 30);
  triangle(60,395,390,380,390,395);
  x = "People in Prison +>"
  text(x, 200, 380)
  
    //Lable Y Axis , Black Raspberry
  triangle(5,10,20,10,5,388);
  y = "  \n ^ \nIndigious \nPeople \n in \nPrison"
  text(y, 20, 20)
  rotate(90)


}