import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

const warehouse = require("../pages/WarehousePage").default;
const induction = require("../pages/InductionPage").default;

Given("the user in the Warehouse page in {string} selected", (environment) => {
    //induction.inductionToWarehouse(station)
    warehouse.openWebPage(environment);
    

});
When("the user select the {string} to work", (station) => {
    warehouse.loginWarehouse(station);
});
Then("the user works in containers with {string} {string} {string} {string} {string} {string}", (layout, numContainer, TransferPack, fingerID, orderID,secondOrderID) => {
    warehouse.actLayout(layout);
    warehouse.createAddTransferContainer(numContainer,TransferPack,fingerID,orderID);
    //warehouse.descContainer();
    //warehouse.addOrder(secondOrderID);
    //warehouse.actContainer();
    //warehouse.closeContainer(fingerID);
    //warehouse.closeContainer(fingerID);
    
    
});
