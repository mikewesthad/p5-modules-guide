import p5 from "p5";
import "p5/lib/addons/p5.dom";
import "p5/lib/addons/p5.sound";

let character = "a";

new p5(function (p) {

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(0);
        p.textAlign(p.CENTER, p.CENTER);
        p.textSize(100);
    }

    p.draw = function () {
        if (p.mouseIsPressed && p.mouseButton === p.LEFT) {
            p.fill(255);
            p.stroke(0);
            p.strokeWeight(3);
            p.text(character, p.mouseX, p.mouseY);
        }
    }

    p.keyTyped = function () {
        character = p.key;
    }
    
});