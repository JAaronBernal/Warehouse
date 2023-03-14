import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

//Omitir Error
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
Cypress.on('uncaught:exception', (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false
    }
})
//Omitir Error

const loginPage = require("../pages/LoginPage").default;
const newMassiveLoadPage = require("../pages/newMassiveLoadPage").default;

Given("A user login in massive front with credentials {string} {string} {string}", (organization, user, pwd) => {
    loginPage.openWebPage(organization);
    newMassiveLoadPage.login(user, pwd);
    
    

});
When("The user does a masive loads", () => {
    newMassiveLoadPage.skipBanner();
    newMassiveLoadPage.buttonUploadFile();
    
});
Then("user should upload the file {string}", (numOrders) => {
    newMassiveLoadPage.upLoadfile(numOrders);
    newMassiveLoadPage.itemCenterOption();
    newMassiveLoadPage.columnMappingTable();
    newMassiveLoadPage.itemCenterOption();
    newMassiveLoadPage.itemCenterOption();
    newMassiveLoadPage.proccesDocProd();

});
