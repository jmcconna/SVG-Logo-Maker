


//Constructor for Shape Class
class Shape {
    constructor(color="green") {  //default color is green
        this.color = color;
    }
    setColor(color) {
        //change the shape color
        this.color = color;
    }
    render() {
        //draw the shape 
        const svgText =
        `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="green" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>
        </svg>`

        return svgText;
    }
}

//Constructor for Circle Class
class Circle extends Shape {

    constructor() {
        super();
    }
    setColor(color) {
        //change the shape color
        this.color = color;
    }
    render() {
        //draw the shape 
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }

}
// //<circle cx="25" cy="75" r="20"/>
// <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

// <circle cx="150" cy="100" r="80" fill="green" />

// <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>

// }

//Constructor for Square Class

//<rect x="10" y="10" width="30" height="30"/>

//Constructor for Triangle Class

class Triangle extends Shape {

    constructor() {
        super();
    }
    setColor(color) {
        //change the shape color
        this.color = color;
    }
    render() {
        //draw the shape 
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }

}
//const shape = new Triangle();
//shape.setColor("blue");
//expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');



//Export object constructors
module.exports = Shapes;