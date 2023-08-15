//Omitir Error
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/
Cypress.on('uncaught:exception', (err) => {
    /* returning false here prevents Cypress from failing the test */
    if (resizeObserverLoopErrRe.test(err.message)) {
        return false
    }
})
//Omitir Error
import {
    Given,
    When,
    Then
} from "@badeball/cypress-cucumber-preprocessor"

const shippingPage = require("../pages/ShippingPage").default;
const loginPage = require("../pages/LoginShippingPage").default;

Given("user open 3Clics web page {string} {string} {string}", (enviroment, userName, password) => {
    loginPage.openWebPage(enviroment);
    loginPage.login(userName, password);
});
When("the user enters shipments and adds the data of {string} {string} {string} {string} {string} {string} {string}", (recolecction, typerecolecction, referenceRecolecction, referenceDelivery, delivery, packageSize, shipmentType) => {
    shippingPage.recolecction(recolecction);
    shippingPage.typerecolecction(typerecolecction, referenceRecolecction, referenceDelivery, delivery);
    shippingPage.packageSize(packageSize);
    shippingPage.shipmentType(shipmentType);

});
Then("the user adding receiving person data {string} {string} {string} {string} {string}", (nameReceiver, phoneNumber, email, cod, codValue) => {
    shippingPage.receiver(nameReceiver, phoneNumber, email);
    shippingPage.cod(cod, codValue);

});

Then("the user select additional Services {string} {string} {string}", (ecoGuia, assurance, valueAssurence,orderNum) => {
    shippingPage.additionalServices(ecoGuia, assurance, valueAssurence);
    shippingPage.ongoing(orderNum);

});