import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

const inductionPage = require("../pages/InductionPage").default;

Given("User open the induction page in {string} selected", (environment) => {
    inductionPage.openWebPage(environment);
});
When("the user must be at the selected {string} to work", (station) => {
    inductionPage.bannerGeo();
    inductionPage.station(station);
});
Then("user should induction to assert P99", () => {
    inductionPage.inductionSortingP99();
});
