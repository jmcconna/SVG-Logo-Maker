//Import the Shapes constructors
const {Shape, Circle, Triangle, Square} = require('./shapes');

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

//Create testing suite for Shapes
describe('Shapes', () => {
    // test to make sure we can make a blue triangle with the setColor method.
    describe('blueTriangle', () => {
      it('should return a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
      });
    });

    // test to make sure we can make a blue triangle with the color argument in the constructor.
    describe('blueTriangle2', () => {
        it('should return a blue triangle', () => {
          const shape = new Triangle("blue");
          expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
      });

      // test to make sure we can make a blue triangle with the color argument in the constructor.
    describe('redCircle', () => {
        it('should return a red circle', () => {
          const shape = new Circle("red");
          expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
        });
      });

    // test to make sure we can make a blue triangle with the color argument in the constructor.
    describe('purpleSquare', () => {
        it('should return a purple square', () => {
          const shape = new Square("purple");
          expect(shape.render()).toEqual(`<rect x="70" y="20" width="160" height="160" fill="purple"/>`);
        });
      });

  });
  