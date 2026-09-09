let bx = [0];
let by = [0];
let bz = [0];
let bc = 0;
let bs = [0];
let bl = [false]
let zx = [0];
let zy = [0];
let zz = [0];
let zl = [false];

function setup() {
    createCanvas(1500, 800);
    imageMode(CENTER);
}

function draw() {
    background(10,100,50,100)
    for (let i = 0;i < bx.length;i++){
        if (bl[i] == true){
            bz[i] += 1;
            bs[i] = 50 - bz[i] / 2;
            if (bz[i] >= 50){
                by[i] += 0.5;
            }
            noStroke();
            fill("red");
            circle(bx[i],by[i],bs[i])
            if (bs[i] <= 0){
                bl[i] = false;
                bz[i] = 0;
            }
        }
    }
}

function keyPressed() {
    if (key == "d"){
        bx[bc] = mouseX;
        by[bc] = mouseY;
        bz[bc] = 0;
        bs[bc] = 50;
        bl[bc] = true;
        bc += 1;
    }
}