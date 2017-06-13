// When building a site, think of main.js as the entry point for all javascript in your project.
// It's the gatekeeper that can call other javascript files.

// There are two sketches in the project - one for p5 in global mode and one for p5 in instance
// mode: 
//  - Global: p5 and its variables are exposed as global variables. This is wonderful for
//            learning and bad for development outside of p5.
//  - Instance: all p5 variables are exposed as local variables (inside of a closure). This requires
//              a little more typing but is much better when it comes to development outside of p5. 

// Uncomment one of thse to import it:
// import "./global-sketch";
import "./instance-sketch";