var chai = require('chai')
var should = chai.should()

//chai.config.includeStack = true// Turns on stack trace
//chai.config.showDiff = false//false by default: include or exclude difference in assertion error
//chai.config.truncateThreshold = 0 //control actions and expected values in assertion errors /disablw truncating

describe("objects", function() {
    it("should equal", function() {
        var a = {
            a:1,
            b:2,
            c: {
                a:1,
                b:2,
                c: {
                    a:1,
                    b:2,
                    x:3
                }
            }
        };

        var b = {
            a:1,
            b:2,
            c: {
                a:1,
                b:2,
                c: {
                    a:1,
                    b:2,
                    x:4
                }
            }
        };
        a.should.deep.equal(b);
    })
})