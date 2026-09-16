let bx = [0];
let by = [0];
let bz = [0];
let bc = 0;
let bs = [0];
let bl = [false]
let ux = [0];
let uy = [0];
let uz = [0];
let ul = [false];
let ui;
let us = [0];
let st = 0;
let r;
let rr = false;
let a = 0;

function preload() {
    ui = loadImage("ufo.png");
}

function setup() {
    createCanvas(1500, 800);
}

function draw() {
    background(10,30,100,50)
    for (let i = 0;i < ul.length;i++){
        if (ul[i] == true){
            uz[i] -= 1;
            uy[i] += 0.5;
            us[i] = 500 - uz[i];
            image(ui,ux[i]-a,uy[i],us[i],us[i]);
            if (uz[i] <= 0){
                ul[i] = false;
            }
        }
    }
    for (let i = 0;i < bl.length;i++){
        if (bl[i] == true){
            bz[i] += 1;
            bs[i] = (500 - bz[i]*10) // 5;
            if (bz[i] >= 50){
                by[i] += 0.5;
            }
            noStroke();
            fill("red");
            circle(bx[i] - a,by[i],bs[i])
            if (bs[i] <= 0){
                bl[i] = false;
                bz[i] = 0;
            }
        }
    }
    for (let i = 0;i < ul.length;i++){
        if (ul[i] == true){
            for (let j = 0;j < bl.length;j++){
                if (bl[j] == true &&
                    bx[j] - a - ux[i] <= us[i] + 10 &&
                    bx[j] - a - ux[i] >= -us[i] - 10 &&
                    by[j] - uy[i] <= us[i] + 10 &&
                    by[j] - uy[i] >= -us[i] - 10 && bz[j] - uz[i] <= 10 && bz[j] + uz[i] >= 10){
                    ul[i] = false;
                    bl[j] = false;
                    break;
                }
            }
        }
    }
    if (millis() - st > 2000){
        st = millis() - int(random(100,1000,100));
        ux.push(random(-750,2250));
        uy.push(0);
        ul.push(true);
        uz.push(500);
    }
    if (rr == true){
        if(millis() % 1000 <= 50){
            textSize(100);
            text("RELOADING...",500,400)
        }
        if(millis() - r >= 3000){
            bc = 0;
            rr = false;
        }
    }
    textSize(50);
    fill("red");
    text("弾数:" + (30 - bc),10,50);
}

function keyPressed() {
    if (key == "d" && rr == false){
        if (bc < 30){
            bx[bc] = mouseX + a;
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
    if (key == "a"){
        if (a >= -740){
            a -= 10;
        }
    }
    if (key == "s"){
        if (a <= 740){
            a += 10;
        }
    }
}