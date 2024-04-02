export class RegisterPage {
    webLocators = {

        firstName: "#input-firstname",
        lastName: "#input-lastname",
        email: "#input-email",
        telephone: "#input-telephone",
        password: "#input-password",
        confirmpassword: "#input-confirm",
        policycheckbox: "[name='agree']",
        continue: ".btn.btn-primary"

    }

    openURL()
    {
        cy.visit(Cypress.env("baseURL"));
    }

    enterFirstName(FName)
    {
        cy.get(this.webLocators.firstName).type(FName);
    }

    enterLastName(LName)
    {
        cy.get(this.webLocators.lastName).type(LName);
    }

    enterEmail(eMail)
    {
        cy.get(this.webLocators.email).type(eMail);
    }

    enterTelephoneNumber(TNumber)
    {
        cy.get(this.webLocators.telephone).type(TNumber);
    }

    enterPassword(Password)
    {
        cy.get(this.webLocators.password).type(Password);
        cy.get(this.webLocators.confirmpassword).type(Password);
    }

    checkPolicyCheckbox()
    {
        cy.get(this.webLocators.policycheckbox).check();
    }

    clickOnContinueBtn()
    {
        cy.get(this.webLocators.continue).click();
    }
}
