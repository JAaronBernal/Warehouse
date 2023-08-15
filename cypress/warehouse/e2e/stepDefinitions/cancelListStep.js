import {
    Given,
    When
} from "@badeball/cypress-cucumber-preprocessor"

const loginPage = require("../pages/LoginPage").default;
const cancelEverything = require("../pages/CancelPage").default;


//Omitir Error
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
Cypress.on('uncaught:exception', (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false
    }
})
//Omitir Error

Given("The user login in 3Clics {string} {string} {string}", (enviroment, userName, password) => {
    loginPage.openWebPage(enviroment);
    loginPage.login(userName, password);

});

When("The user does a cancel with a list {string}", (environment) => {
    cancelEverything.cancell(environment);
});