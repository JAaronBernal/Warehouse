import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

const inductionPage = require("../pages/InductionPage").default;

Given("A user open the induction page in {string} selected", (environment) => {
    inductionPage.openWebPage(environment);
});
When("the user must be at the selected {string}", (station) => {
    inductionPage.bannerGeo();
    inductionPage.station(station);
});
Then("user should induction a {string}", (numOrder) => {
    inductionPage.inductionSorting(numOrder);
});
