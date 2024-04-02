export class Homepage {

    webLocators = {

        search_input: ".form-control.input-lg",
        click_search: ".btn.btn-default.btn-lg",
        product: "img[title='MacBook']",
        addcartbutton: "Add to Cart",
        successmassage: ".alert.alert-success.alert-dismissible"
    }

    searchProduct(procductName) {
        cy.get(this.webLocators.search_input).type(procductName);
        cy.get(this.webLocators.click_search).click();
    }

    addToCart() {
        cy.contains(this.webLocators.addcartbutton).first().click()
    }

    verifySuccessMassage() {
       return cy.get(this.webLocators.successmassage);
        //cy.get(this.webLocators.successmassage).should('have.text',text)
    }
}