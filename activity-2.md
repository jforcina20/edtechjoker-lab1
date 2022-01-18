# package.json

For the dependencies section it looks like it's detailing that the current package depends on previous version of the lit library. I don't know what commands can be run here since these are libraries that your project need in order to run.

The devDependencies are packages that are required for developing and testing. I'm pretty sure you can add more devDependencies based on the type of project, but I don't know what code to run or how to achieve any of this

Scripts in package.json allows you to run npm scripts to reduce repetitive task. They are basically a bundle of shell commands.

# index.html

The index html is the basic markup language a browser uses. In this lab I don't know why the script tag is inside the html. This is not an example on using custom html tags. I can see why we use custom tags for reusability, faster and shorter code. You can definitely make this simpler using web components. All of this can be pull of in the HelloWorld.js file using the Lit library.

# your-element-name.js, while the class JS object is found in src/YourElementName.js

I really don't know why these two files are separated. I understand that one file is importing all of the information out of another but no clear picture on why. If I have to guess it has to do something with the DOM to render and download the scripts faster.

# Lit

Lit is a library that is use to build web components. I don't know why Open-wc came with the lit library. After messing around with lit I can see how fast and short it is to build web components.
