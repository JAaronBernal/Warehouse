import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

const warehouse = require("../pages/WarehousePage").default;
const induction = require("../pages/InductionPage").default;

Given("User open the Warehouse page in {string}", (environment) => {
    //induction.inductionToWarehouse(station)
    warehouse.openWebPage(environment);
    

});
When("User select the {string}", (station) => {
    warehouse.loginWarehouse(station);
});
Then("User synchronizes the {string} {string} {string} {string} {string} {string} {string} {string} {string} {string} {string}", (lineHaul, newNameLineHaul,driver,idVehicle,destination,destination2,depTime, reEditName, reEditIdVehicle,reDest1,reEditDriver) => {

    warehouse.addLineHaul(lineHaul);
    warehouse.editLineHaulEmpty(newNameLineHaul);
    warehouse.regisVehicle(driver,idVehicle,destination,destination2,depTime);
    warehouse.reEditLineHaul(reEditName, reEditIdVehicle, reDest1, reEditDriver);
    warehouse.cleanLineHaul();
    warehouse.deletLineHaul();

    
    
    

    
    
});
