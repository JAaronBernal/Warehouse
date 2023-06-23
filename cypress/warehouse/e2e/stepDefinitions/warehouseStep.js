import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

const warehouse = require("../pages/WarehousePage").default;
const induction = require("../pages/InductionPage").default;

Given("A user open the Warehouse page in {string} selected", (environment,station) => {
    //induction.inductionToWarehouse(station)
    warehouse.openWebPage(environment);
    

});
When("the user select the {string}", (station) => {
    warehouse.loginWarehouse(station);
});
Then("the user synchronizes the {string} {string} {string} {string} {string} {string} {string} {string} {string} {string} {string} {string} {string} {string} {string} {string} {string}", (layout, numContainer, TransferPack, fingerID, ordeID,secondOrderID, lineHaul, newNameLineHaul,driver,idVehicle,destination,destination2,depTime, reEditName, reEditIdVehicle,reDest1,reEditDriver) => {
    //warehouse.actLayout(layout);

    warehouse.assignContainerInLineHaul(numContainer,fingerID,ordeID,lineHaul,driver,idVehicle,destination,destination2,depTime);
    warehouse.deletLineHaul();
    
    
    

    
    
});
