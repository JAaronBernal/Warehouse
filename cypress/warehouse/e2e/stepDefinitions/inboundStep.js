import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

const inboundPage = require("../pages/inboundPage").default;

Given("A user open the inbound page in {string} selected", (environment) => {
    inboundPage.openWebPage(environment);
});
When("the user must be at the selected {string} to use inbound", (station) => {
    //inboundPage.selectStation(station);
});
Then("user should use inbound with {string} {string} {string} {string} {string} {string} {string} {string} {string} {string}", (emailVeloz, nameVeloz, kindOfDriver, providerName, vehicleType, vehiclePlates, driverReasonNoQR, packageAmount, userActivity, stationOrigin) => {
    //inboundPage.velozWithoutMobileApp(emailVeloz, nameVeloz, kindOfDriver, providerName, vehicleType, vehiclePlates, driverReasonNoQR, packageAmount);
    //inboundPage.userActivity(userActivity,stationOrigin);
    //inboundPage.addOtherUser();
    inboundPage.scanEnterCode();
    inboundPage.scanEnterCode();
    inboundPage.scanErrorEnterCode();
    inboundPage.finishDownload();
    inboundPage.logOut();
    

});
