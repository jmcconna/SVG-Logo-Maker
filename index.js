const inquirer = require('inquirer'); //include inquirer package
const fs = require("fs"); //include the file system package
const Shapes = require("./lib/shapes");

const questions = [
    {
      type: 'input',
      message: 'What text would you like displayed on your logo? Enter up to three characters.',
      name: 'logoText',
      validate: async (input) => {
        if (input !== 'y' || input !== 'n') {
           return 'Incorrect asnwer';
        }
        return true;
     }
    },
    {
      type: 'input',
      message: 'What color would you like for the text? Enter a color keyword or hexadecimal number.',
      name: 'textColor',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
    //choose a license
    {
    type: 'checkbox',
    name: 'shape',
    message: 'Choose a shape for your logo:',   
    choices: ["Circle", "Triangle", "Square"]
    },
  ];

//Create a function to write SVG file
function writeToFile(fileName, data) {

    const svgText =
        `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">

           ${shapeText}
           

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoText}</text>

        </svg>`

    //call shape constructor based on answers from data


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