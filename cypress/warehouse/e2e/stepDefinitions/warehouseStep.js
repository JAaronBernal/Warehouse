import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

const warehouse = require("../pages/WarehousePage").default;

Given("A user open the Warehouse page in {string} selected", (environment) => {
    warehouse.openWebPage(environment);

});
When("the user select the {string}", (station) => {
    warehouse.station(station);
    warehouse.hamburgerBtn();
    warehouse.container();
});
Then("the user synchronizes the {string}", (fingerId) => {
    
});
