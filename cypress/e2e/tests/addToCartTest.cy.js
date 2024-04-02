import { Homepage } from "../../Pages/homePage";
import testData from "../../fixtures/testData.json"

const homeObj = new Homepage();

describe('Test Automation', () => {

    before(() => {
        cy.login(testData.login.username, testData.login.password);
    })

    it('add to cart flow', () => {

        homeObj.searchProduct(testData.product.productname);
        homeObj.addToCart();
        homeObj.verifySuccessMassage().should('contain', testData.massage.successmassage)

    })
})