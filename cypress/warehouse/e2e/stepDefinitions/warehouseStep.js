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
Then("the user synchronizes the {string} {string} {string} {string} {string} {string} {string} {string} {string}", (layout, numContainer, fingerID, lineHaul, newNameLineHaul,driver,idVehicle,destination,depTime) => {
    //warehouse.actLayout(layout);
    //warehouse.createContainer(numContainer);
    //warehouse.addContainer(fingerID);
    warehouse.creatAndAddContainer(numContainer,fingerID);
    //warehouse.addLineHaul(lineHaul);
    //warehouse.editLineHaulEmpty(newNameLineHaul);
    //warehouse.deletLineHaul();
    //warehouse.regisVehicle(driver,idVehicle,destination,depTime);
    
    
});
