//import { AssertionError } from "assert";

// const chai = require('chai')
// const expect = chai.expect
// const should = chai.should()

//Assert - TDD style
//const assert = chai.assert; //no chaining possible

//let a=1, b=1
//expect(a).to.be.equals(b, "a and b are not equal")
//should
//a.should.be.equals(b);
//assert
//assert.equal(a,b, "a and be are not equal");

// function myObj() {
//     return {
//         a:100,
//         b: 'Hello'
//     }
// }
// x = new myObj()
// y = new myObj()

//expect(x).to.be.an('object');
//expect(x).to.be.equals(y, 'x and y are not equal');

//deep.equal or deep.equals
//expect(x).to.be.deep.equals(y, 'x and y are not equal');
//x.should.be.deep.equals(y, 'x and y are not equal');
//assert.deepEqual(x, y, "x and y are not equal");

//chaining expressions
//x is an object; x and y are equal
//keywords- and, with, but, ...
//expect(x).to.be.an('object').and.to.be.deep.equals(y);
//(x).should.be.an('object').and.to.be.deep.equals(y);  

// })

//arrays

// let numbers = [1,2,3,4];
// expect(numbers).to.be.an('array').that.includes(4)
//should
// (numbers).should.be.an('array).that.includes(4)
//assert
//assert.isArray(numbers, 'numbers is not an array');

//SHOULD EXTRAS
//should -> Object.Prototype - a.should
//existence of an object
//function writeToAFile(error){
    //should extras 
    //normal scenario
    //error.should.not.exist()

    //Given that error is undefined
    //should.not.exist(error)
//}
//writeToAFile(error:undefined)

//should.exist
//should.not.exist
//should.equal
//should.not.equal
//should.Throw
//should.not.Throw

//Chai Configurations


