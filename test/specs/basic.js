//const assert = require('assert')
const internetPage = require("../../pages/internet.page")

describe('test title', () => {
    it('should have the right title', () => {
        browser.url('https://webdriver.io')
        const title = browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
        //expect(title).to.be.equals('WebdriverIO · Next-gen WebDriver test framework for Node.js', "title is not equal")
        //title.should.be.equals('WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
})

describe("Interacting with Elements", function() {
    it("Get text for element", () => {
        browser.url('http://the-internet.herokuapp.com')
        //let text = $("h2").getText()
        //let text  = $(".heading").getText()
        //let text = $("#page-footer").getText()
        let text = $("//*[@id='page-footer']").getText()
        console.log(text)
        internetPage.getLiText()
        internetPage.getSpecificElementText(3)
    })
    it("Is footer Displayed?", () => {
        //console.log(internetPage.pageFooter.isDisplayed())
        expect(internetPage.pageFooter).to.exist
        //expect(a).to.be.equals(b, "a and b are not equal")
    })
    it("Does the header exist?", () => {
         //console.log(internetPage.pageHeader.isExisting())
         expect(internetPage.pageHeader).to.exist
    })
    it("Is footer in viewport?", () => {
        console.log(internetPage.pageFooter.isDisplayedInViewport())
    })

    it("Is header in viewport?", () => {
        console.log(internetPage.pageHeader.isDisplayedInViewport())
    })

    it("Is subheader enabled?", () => {
        console.log(internetPage.subHeading.isEnabled())
    })

    it("Is click Element", () => {
        internetPage.clickOnLink()
    })
})