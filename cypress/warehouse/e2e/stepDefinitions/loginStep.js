import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

const loginPage = require("../pages/LoginPage").default;
const homePage = require("../pages/HomePage").default;

Given("A user open Self Services web page {string}", (organization) => {
    loginPage.openWebPage(organization);
});
When("the user login with valid credentials {string} {string}", (user, pwd) => {
    loginPage.login(user, pwd);
});
Then("user should see home page", () => {
    homePage.isHomePageShowing()
});
