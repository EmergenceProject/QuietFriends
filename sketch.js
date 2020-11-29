function preload() {
  l_images_leaf = [];
  for (let idx_leaf=0; idx_leaf< l_name_leafs.length; idx_leaf++) {
    img = loadImage('images/'+l_name_leafs[idx_leaf]);
    append(l_images_leaf, img);
  }
  back = loadImage('images/Dummy_road.svg');
}

let l_name_leafs = ["norway_maple.png", "norway_maple.png", "norway_maple.png"];
let l_proper_name_leafs = ["Norway maple", "Norway maple", "Norway maple"];
var realWidth;
var x_pos = 0;
var y_pos = 0;
var l_score_type_tree = [0, 0, 0];
var l_type_tree = [0, 2, 1, 0];
let l_position_tree_x = [50, 150, 50, 200];
let l_position_tree_y = [50, 150, 150, 200];
let l_bool_discovered = [false, false, false, false];
let l_bool_already_discovered = [false, false, false, false];
let millisecond = 0;

function setup() {
   var canvas = createCanvas(windowWidth/1.5, windowHeight/1.5);
   imageRatio = back.height/back.width;
   realWidth=windowWidth/1.5
   canvas.parent('sketch-holder');
   rectMode(CENTER);
   background(250, 250, 250);
   draw_character(0,0)
 }

function draw() {
   draw_background();
   fill(255);
   move_character();
   draw_character(x_pos, y_pos, windowWidth, windowHeight);
   draw_trees();
   check_max_score();
   on_tree_discovery();
   draw_upper_panel();
}

function draw_background(){
  var backWidth;
  var backHeight;
  backWidth = back.width;
  backHeight= back.height;
  if (windowWidth/1.5 < realWidth) {
        backWidth = windowWidth/1.5;
    backHeight= backWidth*imageRatio;
  }
  //image(back,0,0,backWidth*3,backHeight*3); //To draw the background, doesn't work so well :(
  background(250, 250, 250);
}

function draw_trees(){
  for (let idx_pos=0; idx_pos< l_position_tree_x.length; idx_pos++) {
  fill('green');
  ellipse(l_position_tree_x[idx_pos], l_position_tree_y[idx_pos],50,50);
  }
}

function move_character(){
  if (keyIsDown(LEFT_ARROW) && x_pos>-80) {
      x_pos -= 5;
  }
  if (keyIsDown(RIGHT_ARROW) && x_pos<windowWidth/1.5-50 ) {
      x_pos += 5;
  }
  if (keyIsDown(UP_ARROW) && y_pos>-80) {
      y_pos -= 5;
  }
  if (keyIsDown(DOWN_ARROW)&& y_pos<windowHeight/1.5-50) {
      y_pos += 5;
  }
}

function draw_character(x,y, width, height){
  stroke(0);
  rect(100+x,100+y,20,100);
  ellipse(100+x,70+y,60,60);
  ellipse(81+x,70+y,16,32);
  ellipse(119+x,70+y,16,32);
  line(90+x,150+y,80+x,160+y);
  line(110+x,150+y,120+x,160+y);

  //let revealSize = 150;
  let npoints = 30;
  let angle = TWO_PI / npoints;

  for (let revealSize = 150; revealSize > 80 ; revealSize -= 10) {
    fill(0, 100);
    stroke(255);
    beginShape();
    // Exterior part of shape, clockwise winding
    vertex(-width, -height);
    vertex(width, -height);
    vertex(width, height);
    vertex(-width, height);
    // Interior part of shape, counter-clockwise winding
    beginContour();
    for (let a = TWO_PI; a > 0 ; a -= angle) {
      let sx = x + 100 + cos(a) * revealSize + random(0,2);
      let sy = y + 100 + sin(a) * revealSize + random(0,2);
      vertex(int(sx), int(sy));
    }
    endContour();
    endShape(CLOSE);
  }
}

function check_max_score() {
  if (max(l_score_type_tree)>=10) {
    fill('red');
    //stroke(255, 255)
    noStroke();
    textSize(40);
    text('Congrats bae, you just won my love <3' , 300, 400);
  }
}

function draw_upper_panel() {
  fill(255);
  stroke(0);
  rect(0,0,windowWidth*2,50);
  fill(0);
  stroke(255);
  textSize(20);
  text('Tree 1: ' + str(l_score_type_tree[0]), 20, 18);
  text('Tree 2: ' + str(l_score_type_tree[1]), 170, 18);
  text('Tree 3: ' + str(l_score_type_tree[2]), 320, 18);
}

function on_tree_discovery() {

  for (let idx_pos=0; idx_pos< l_position_tree_x.length; idx_pos++) {
    if (l_bool_discovered[idx_pos] && !l_bool_already_discovered[idx_pos] && millisecond ===0){
      millisecond = millis();
    }
  }

  for (let idx_pos=0; idx_pos< l_position_tree_x.length; idx_pos++) {
    if (l_bool_discovered[idx_pos] && !l_bool_already_discovered[idx_pos]){
      if (millis()-millisecond<1000){
        //fill(90,160,141);
        //noStroke()
        //rect(l_position_tree_x[idx_pos]+150, l_position_tree_y[idx_pos]+50, 200, 150);
        image(l_images_leaf[l_type_tree[idx_pos]], l_position_tree_x[idx_pos]+50, l_position_tree_y[idx_pos]-50, img.width / 10, img.height / 10);
        //fill(255);
        //text('Congratulations!\nYou found a ' + l_proper_name_leafs[l_type_tree[idx_pos]] , l_position_tree_x[idx_pos]+50, l_position_tree_y[idx_pos]+100);
        textSize(30);
        text('+1', l_position_tree_x[idx_pos]+105, l_position_tree_y[idx_pos]+13);
      }
      else {
      l_bool_already_discovered[idx_pos] = true;
      millisecond = 0;
      }
    }
  }
}

function mouseClicked() {
  for (let idx_pos=0; idx_pos< l_position_tree_x.length; idx_pos++) {
    if ((mouseX > l_position_tree_x[idx_pos]-30 && mouseX < l_position_tree_x[idx_pos]+30) && (mouseY > l_position_tree_y[idx_pos]-30 && mouseY < l_position_tree_y[idx_pos]+30)) {
      l_score_type_tree[l_type_tree[idx_pos]] += 1;
      if (!l_bool_discovered[idx_pos]) {
        l_bool_discovered[idx_pos] = true;
      }
    }
  }
}
