import {
    Given,
    When
} from "@badeball/cypress-cucumber-preprocessor"

const loginPage = require("../pages/LoginPage").default;
const cancelEverything = require("../pages/CancelEverythingPage").default;
const homePage = require("../pages/HomePage").default;

//Omitir Error
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
Cypress.on('uncaught:exception', (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false
    }
})
//Omitir Error

Given("The user login in SelfService {string} {string} {string}", (organization, user, pwd) => {
    loginPage.openWebPage(organization);
    loginPage.login(user, pwd);
    homePage.cancelEverything();
});

When("The user does a cancel with a list", () => {
    cancelEverything.cancellPerList();
});