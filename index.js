const inquirer = require('inquirer'); //include inquirer package
const fs = require("fs"); //include the file system package
const {Shape, Circle, Triangle, Square} = require("./lib/shapes");
const { listenerRemoved } = require('emittery');
const validateColor = require("validate-color").default;
let shapeText = "";

const questions = [
    {
      type: 'input',
      message: 'What text would you like displayed on your logo? Enter up to three characters.',
      name: 'logoText',
      validate: async (input) => {
        if (input && input.length <=3) {
           return true;
        }
        console.log("\nPlease try again. Enter 1-3 characters.");
        return false;
     }
    },
    {
      type: 'input',
      message: 'What color would you like for the text? Enter a color keyword or hexadecimal number.',
      name: 'textColor',
      validate: async (input) => {
        if (input && validateColor(input)) {
           return true;
        }
        console.log("\nPlease try again. Enter a valid HTML color.");
        return false;
     } 
    },
    //choose a shape
    {
    type: 'checkbox',
    name: 'shape',
    message: 'Choose a shape for your logo:',   
    choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: 'input',
        message: 'What color would you like for the logo? Enter a color keyword or hexadecimal number.',
        name: 'logoColor',
    },
  ];

//Create a function to write SVG file
function writeToFile(fileName, data) {
    let logoShape = "";
    switch(data.shape[0]) {
        case "Circle":
            //call circle constructor
            logoShape = new Circle(data.logoColor);
            shapeText = logoShape.render();
            break;

        case "Triangle":
            //call triangle constructor
            logoShape = new Triangle(data.logoColor);
            shapeText = logoShape.render();
            break;

        case "Square":
            //call square constructor
            logoShape = new Square(data.logoColor);
            shapeText = logoShape.render();
            break;
    }

    const svgText =
        `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">

           ${shapeText}

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.logoText}</text>

        </svg>`


    //create new file and stuff all that SVG goodness into it
    fs.writeFile(fileName, svgText, (err) => err ? console.log(err) : console.log('Success!'));
}


//Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("logo.svg", data);
        }
        )
}

// Function call to initialize app
init();