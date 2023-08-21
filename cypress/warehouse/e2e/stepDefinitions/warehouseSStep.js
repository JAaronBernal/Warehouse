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
    warehouse.loginWarehouse(station);
});
Then("the user synchronizes this {string} {string} {string} {string} {string} {string} {string}", (environment,numContainer,fingerID,lineHaul,driver,idVehicle,destination) => {
    warehouse.assignContainerInLineHaulStress(environment,numContainer,fingerID,lineHaul,driver,idVehicle,destination);    
    warehouse.deletLineHaul();
     
});
