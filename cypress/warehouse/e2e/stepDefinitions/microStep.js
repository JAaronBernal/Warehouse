import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

const micro = require("../pages/LoginPage").default;

Given("A user select the {string}", (environment) => {
    micro.openWebPage(environment);
});
When("the user open microsoft with credential {string}", (station) => {
    //micro.station(station);
});
Then("user login", () => {
    
});