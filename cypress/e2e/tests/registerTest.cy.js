import { RegisterPage } from "../../Pages/registerPage"
//import{registerData } from"../../fixtures/registerData.json"
import registerData from "../../fixtures/registerData.json"

const registerObj = new RegisterPage();

describe("Test Automation", () => {

    it("Registration Form", () => {

        registerObj.openURL();
        registerObj.enterFirstName(registerData.firstName);
        registerObj.enterLastName(registerData.lastName);
        registerObj.enterEmail(registerData.email);
        registerObj.enterTelephoneNumber(registerData.telephone);
        registerObj.enterPassword(registerData.password);
        registerObj.checkPolicyCheckbox();
        registerObj.clickOnContinueBtn();

    })
})