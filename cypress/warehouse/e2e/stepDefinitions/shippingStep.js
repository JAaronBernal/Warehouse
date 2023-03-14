import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

const shippingPage = require("../pages/ShippingPage").default;
const loginSSPage = require("../pages/LoginPage").default;

Given("A user login in Self-Services web page with credentials {string} {string} {string}", (environment, user, pwd) => {
    loginSSPage.openWebPage(environment);
    loginSSPage.login(user, pwd);
});

When("the user make shipment introducing {string} {string} {string} {string} {string} {string}"
    + " {string} {string} {string} {string} {string} {string} {string} {string} {string}",
    (shippingType, locationRecollect, typeOfHousing, reference, shippingWeight, schedule, nameThatRecollect, phoneThatRecollect,
         emailThatRecollect, locationReceives, typeOfHousingReceives, nameThatReceives, phoneThatReceives, emailThatReceives, 
         referenceReceives) => {
        shippingPage.makeAShipment();
        shippingPage.shippingType(shippingType);
        shippingPage.recollectData(locationRecollect, typeOfHousing, reference);
        shippingPage.shippingWeight(shippingWeight);
        shippingPage.whenWePassed(schedule);
        shippingPage.userDataThatRecolelct(nameThatRecollect, phoneThatRecollect, emailThatRecollect);
        //shippingPage.userDataThatRecolelctCol(nameThatRecollect, phoneThatRecollect, emailThatRecollect);
        shippingPage.userDataThatReceives(locationReceives, typeOfHousingReceives, nameThatReceives, phoneThatReceives, emailThatReceives, referenceReceives);
        shippingPage.aditional();
    });

Then("the user print the shipping guide", () => {
    shippingPage.confirmedPackage();
})


