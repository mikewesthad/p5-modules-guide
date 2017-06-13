import p5 from "p5";
import "p5/lib/addons/p5.dom";
import "p5/lib/addons/p5.sound";

let character = "a";

window.setup = function () {
    createCanvas(windowWidth, windowHeight);
    background(0);
    textAlign(CENTER, CENTER);
    textSize(100);
};

window.draw = function () {
    if (mouseIsPressed && mouseButton === LEFT) {
        fill(255);
        stroke(0);
        strokeWeight(3);
        text(character, mouseX, mouseY);
    }
};

window.keyTyped = function () {
    character = key;
};