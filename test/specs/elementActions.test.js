//const assert = require('assert').strict
var plugin = require('chai-jq')
internetPage = require('../../pages/internet.page')

describe('Test elements actions', function () {
    it('should click element', () => {
        browser.url('http://the-internet.herokuapp.com')
        internetPage.clickOnLink()
        //assert(browser.getUrl()).equal('http://the-internet.herokuapp.com/abtest')
        //assert.strictEqual((browser.getUrl()),('http://the-internet.herokuapp.com/abtest'))
        expect(browser.getUrl()).to.equal('http://the-internet.herokuapp.com/abtest')
    })

    it('should get text', () => {
        browser.url('http://the-internet.herokuapp.com')
        assert.strictEqual((internetPage.getSpecificElementText(1)),('A/B Testing'))
    })

    it('should get text', () => {
        browser.url('http://the-internet.herokuapp.com')
        expect(internetPage.getSpecificElementText(2)).to.equal('Add/Remove Elements')
    })

    it.only('should click checkbox', () => {
        browser.url('http://the-internet.herokuapp.com')
        internetPage.clickLink(6)
        internetPage.clickCheckbox(1)
        assert((internetPage.checkboxes(1)).isSelected())
        
    })

    it('should uncheck checkbox', () => {
        internetPage.clickCheckbox(1)
        assert((internetPage.checkboxes(1)).isSelected())
    })

    it('should enter username', () => {
        browser.url('http://the-internet.herokuapp.com/login')
        internetPage.enterUsername('Chico')
        assert.strictEqual(('Chico'), (internetPage.username.getValue()))
    })

    it('should enter password', () => {
        browser.url('http://the-internet.herokuapp.com/login')
        internetPage.enterPassword('Password')
        assert.strictEqual(('Password'), (internetPage.password.getValue()))
    })

    it('should clear value', () => {
        internetPage.username.click()
        internetPage.username.clearValue()
        assert.strictEqual((''), (internetPage.username.getValue())) 
    })
})