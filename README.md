# Modules in p5

A series of guided demos that explain how to organize code using modules in [p5](https://p5js.org/) (via a tool called [Webpack](https://webpack.js.org/)). Along the way, we'll cover [ES6 JavaScript](https://github.com/lukehoban/es6features)).

## Motivation

[p5](https://p5js.org/) is a wonderful framework for learning to use JavaScript for creative purposes. I love teaching with it because it is so easy to [get started](https://p5js.org/get-started/). The downside to the ease of use is that all of the p5 variables and functions are tossed into the global scope. That means that in any JS file, you can type `ellipse(mouseX, mouseY, 20, 20)` and the appropriate bits of p5 will be invoked. When you start building more complex sketches or start integrating external JS libraries into your projects, this can become problematic.

When you use global variables, they can be accessed from anywhere in any JS file that has been loaded. What if two scripts try to both use the same name for a variable? They will most likely clash and can introduce bugs. But there is a deeper reason to minimize global variables...

One guiding principles in software development is to keep your code "local." If you want to understand what a particular function does, and it involves a global variable called `key`... then you'll need to mentally keep track of every place where the `key` variables is changed. On the other hand, if the function only uses local variables, then you don't have to look very far to understand what that function is doing. Local variables keep things isolated, and isolated chunks are often easier to read, use, debug and maintain.

**Add some code snippets**

## Modules

One of the common code patterns in the JS world is the module. The core idea is that each module you write is an isolated chunk of code, and you control which parts of it are made accessible to code outside of the module. A module is just a special way of handling a JS file. As an example, imagine you've got a module called `randomAdjective.js`: 

```js
// randomAdjective.js, a module to generate random adjectives
const adjectives = ["adamant", "gustatory", "obtuse", "puckish", "barbarous", "debonair"];

function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomAdjective() {
    const index = getRandomInteger(0, adjectives.length - 1);
    return adjectives[index];
}
```

The module can find random adjectives by looking them up in a list. Don't worry if you don't recognize some of the syntax here. The file has an `adjectives` variable and two functions `getRandomInteger` and `getRandomAdjective`. Only one of those three things has a special word next to it: `export`. Everything in a module defaults to being local, and stays that way, unless you explicitly "export" it. So then in another JS file, `main.js`:

```js
// main.js, your main JS file
import {getRandomAdjective} from "./randomAdjective.js";

const adj = getRandomAdjective();
const sentence = `The ${getRandomAdjective()} boy decided that he wanted a ${getRandomAdjective()} cat.`;
console.log(sentence);
// -> "The adamant boy decided that he wanted a debonair cat."
```

Ah! `import` and `export`. Things that are `export`ed by one module can thus be `import`ed elsewhere. (Again, don't worry too much on the syntax). Modules are about managing privacy. 

To drive that home, the following would cause errors:

```js
// main.js, your main JS file
console.log(adjectives); // ERROR!
```

There is no variable called `adjectives`. In fact, `main.js` could have its own, independent variable that is also called `adjectives` without a conflict.

```js
// main.js, your main JS file
import {adjectives, getRandomInteger} from "./randomAdjective.js";
// ERROR! Those things aren't being exporte, so they can't be imported.
```

## Build Process

In the future, modules are going to be something built into the browser. For now, the main way to create modules is by relying on external tools. And since people have different perspectives and goals, there have correspondingly been different tools over the years. Each with its own flavor of how you write a module. We are going to focus in on the [ES6 module syntax](http://exploringjs.com/es6/ch_modules.html#sec_overview-modules). That's the module syntax that is going to land in browsers.

We still need a tool to package up our code. There are a number of tools that can do that. [Webpack](https://webpack.js.org/), [Gulp](http://gulpjs.com/) and [Grunt](https://gruntjs.com/) are a few of the popular choices. We are going to use [Webpack](https://webpack.js.org/).

TODO. Finish this:

- In particular talk about the idea of `src` files vs `build` files.
- NPM scripts
- Node & NPM install

## Instance Mode in p5

TODO

## ES6 Primer

TODO

## Examples to Create

TODO

- Multiple, independent sketches on the same page
- Integrating with libraries that would otherwise cause a conflict
- Simple particle system module