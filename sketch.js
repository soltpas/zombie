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
let r;
let rr = false;

function setup() {
    createCanvas(1500, 800);
}

function draw() {
    background(10,100,50,50)
    for (let i = 0;i < bx.length;i++){
        if (bl[i] == true){
            bz[i] += 1;
            bs[i] = 100 - bz[i];
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
    if (rr == true){
        if(millis() % 1000 <= 50){
            textSize(100);
            text("リロード中",500,400)
        }
        if(millis() - r >= 3000){
            bc = 0;
            rr = false;
        }
    }
}

function keyPressed() {
    if (key == "d" && rr == false){
        if (bc < 30){
            bx[bc] = mouseX;
            by[bc] = mouseY;
            bz[bc] = 0;
            bs[bc] = 100;
            bl[bc] = true;
            bc += 1;
        }
    }
    if (key == "f"){
        r = millis();
        rr = true;
    }
}