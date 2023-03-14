import {
    Given,
    When
} from "@badeball/cypress-cucumber-preprocessor"

const loginPage = require("../pages/LoginPage").default;
const homePage = require("../pages/HomePage").default;
const cancelEverything = require("../pages/CancelEverythingPage").default;

//Omitir Error
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
Cypress.on('uncaught:exception', (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false
    }
})
//Omitir Error

Given("The user login in SelfService with credentials {string} {string} {string}", (organization, user, pwd) => {
    loginPage.openWebPage(organization);
    loginPage.login(user, pwd);
    homePage.cancelEverything();
});

When("The user does a cancel every order with {string} {string} {string} {string}", (status, mod, numOfIterations, numOrder) => {
    cancelEverything.cancellFirstOrder(status, mod, numOfIterations,numOrder);
});