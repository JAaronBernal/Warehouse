import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

const warehouse = require("../pages/WarehousePage").default;
const induction = require("../pages/InductionPage").default;

Given("the user in the Warehouse page in {string}", (environment) => {
    //induction.inductionToWarehouse(station)
    warehouse.openWebPage(environment);

});
When("User select the {string} to work", (station) => {
    warehouse.loginWarehouse(station);
});
Then("the user works in containersP99 with {string} {string} {string} {string}", (layout, numContainer, TransferPack, fingerID) => {
    warehouse.actLayout(layout);
    warehouse.createAddTransferContainerP99(numContainer,TransferPack,fingerID);
    //warehouse.descContainer();
    //warehouse.closeContainer(fingerID);
    
    
});
