//Constructor for Shape Class
class Shape {
    constructor(color="green") {   
        this.color = color;
    }
    setColor(color) {
        //change the shape color
        this.color = color;
    }
}

//Constructor for Circle Class
class Circle extends Shape {

    render() {
        //draw the shape 
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    }

}

//Constructor for Triangle Class
class Triangle extends Shape {

    setColor(color) {
        //change the shape color
        this.color = color;
    }
    render() {
        //draw the shape 
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    }

}

//Constructor for Square Class

class Square extends Shape {

    setColor(color) {
        //change the shape color
        this.color = color;
    }
    render() {
        //draw the shape 
        return `<rect x="70" y="20" width="160" height="160"/>`
    }

}




//Export object constructors
module.exports = {Shape, Circle, Triangle, Square};