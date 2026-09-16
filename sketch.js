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
let ut = [0];
let ui;
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
    background(10,100,50,50)
    textSize(50);
    fill("red");
    text("弾数:" + (30 - bc),10,50);
    for (let i = 0;i < bx.length;i++){
        if (bl[i] == true){
            bz[i] += 1;
            bs[i] = 100 - bz[i];
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
    for (let i = 0;i < ux.length;i++){
        if (ul[i] == true){
            if(millis() - ut[i] >= 1000){
                uz[i] -= 1;
                uy[i] += 1;
                ut[i] = millis();
                Image(ui,ux[i],uy[i],50-uz[i],50-uz[i]);
            }
        }
    }
    if (millis() - st > 1500){
        st = millis() - int(random(100,1000,100));
        ux.push(random(-750,2250));
        uy.push(0);
        ul.push(true);
        ut.push(millis());
        uz.push(0);
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