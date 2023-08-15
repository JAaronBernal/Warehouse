import { guias } from './guias.js';
import { guiasT } from './guiasT.js';
class CancelEverythingPage {
    elements = {
      firstOrder: () => cy.get(':nth-child(2) > :nth-child(2) > .desktop_emphasis__1WIl2'),
      secondOrder: () => cy.get(':nth-child(3) > :nth-child(3) > :nth-child(2)'),
      thirdOrder: () => cy.get('.module_container > :nth-child(3) > :nth-child(4) > :nth-child(2)'),
      quarterOrder: () => cy.get(':nth-child(3) > :nth-child(5) > :nth-child(2)'),
      fifthOrder: () => cy.get(':nth-child(3) > :nth-child(6) > :nth-child(2)'),
      middleOrder: () => cy.get(':nth-child(48) > :nth-child(2)'),
      lastOrder: () => cy.get(':nth-child(95) > :nth-child(2)'),
      cancelBtn: () => cy.get('.styles_cancelOrderBtn__hU3U3 > button'),
      printBtn: () => cy.get('.styles_icon__10pyx'),
      closeBtn: () => cy.get('.styles_btnClose__19WMs > img'),
      viewActivity: () => cy.get('h4'),
      generatedByMistake: () => cy.get(':nth-child(2) > label > span'),
      theInfoIsWrong: () => cy.get(':nth-child(3) > label > span'),
      theCostIsTooExpensive: () => cy.get(':nth-child(4) > label > span'),
      notGoneThroughThePackage: () => cy.get(':nth-child(5) > label > span'),
      hasNotBeenDelivered: () => cy.get(':nth-child(6) > label > span'),
      otherOption: () => cy.get(':nth-child(7) > label > span'),
      textOption: () => cy.get('textarea'),
      continueBtn: () => cy.get('.cancelOrder_btnDelete__3WJ4x'),
      wait1seg: () => cy.wait(1000),
      wait2seg: () => cy.wait(2000),
      comeBack: () => cy.get('.cancelOrder_actionsModal__3yla7 > :nth-child(2)'),
      orderInput: () => cy.get('.Orders_formInput__1cX0i'),
      selectNumOrder: () => cy.get('.desktop_flexCard__3-0MD > :nth-child(2)'),
      //Filter
      filterOrder: () => cy.get('.styles_historyOrdersFilters__button__320-y'),
      statusOrderAll: () => cy.get(':nth-child(2) > .styles_marginFirstRadioBtn__12IVW > span'),
      statusOrderCreated: () => cy.get(':nth-child(3) > .styles_marginFirstRadioBtn__12IVW > span'),
      statusOrderRecolLected: () => cy.get(':nth-child(4) > .styles_marginFirstRadioBtn__12IVW > span'),
      statusOrderCancell: () => cy.get(':nth-child(5) > .styles_marginFirstRadioBtn__12IVW > span'),
      statusOrderReturn: () => cy.get(':nth-child(1) > :nth-child(6) > label > span'),
      statusOrderStole: () => cy.get(':nth-child(7) > label > span'),
      acceptFilter: () => cy.get('.styles_button__1aW16'),
      //type
      typeAll: () => cy.get(':nth-child(2) > :nth-child(2) > label > span'),
      typeSameDay: () => cy.get(':nth-child(2) > :nth-child(3) > label > span'),
      typeNextDay: () => cy.get(':nth-child(2) > :nth-child(4) > label > span'),
      type99Minutos: () => cy.get(':nth-child(2) > :nth-child(5) > label > span'),
      typeCO2Free: () => cy.get(':nth-child(2) > :nth-child(6) > label > span'),
      cleanFilter: () => cy.get('.styles_historyOrdersFiltersForm__form__buttons__1XY7H > span')

    };
    cancelEverything() {
      this.elements.ongoingOrders().click();
    }
    cancellPerList() {
      for (var i = 0; i < guias.length; i++) {

        this.elements.wait2seg();
        this.elements.orderInput().type(`${guias[i]}{enter}`);
        this.elements.selectNumOrder().scrollIntoView().should('be.visible').click();
        this.elements.cancelBtn().should('be.visible').click();
        this.elements.otherOption().should('be.visible').click();
        this.elements.textOption().type("Cancelado por medio de Automatización");
        this.elements.continueBtn().should('be.visible').click();
        this.elements.orderInput().type(`{selectAll}{backspace}{enter}`);
      }
    }

    cancell(environment) {
      switch(environment) {

        case "Test":
          for (var i = 0; i < guiasT.length; i++) {

            this.elements.wait2seg();
            this.elements.orderInput().type(`${guiasT[i]}{enter}`);
            this.elements.selectNumOrder().scrollIntoView().should('be.visible').click();
            this.elements.cancelBtn().should('be.visible').click();
            this.elements.otherOption().should('be.visible').click();
            this.elements.textOption().type("Cancelado por medio de Automatización");
            this.elements.continueBtn().should('be.visible').click();
            this.elements.orderInput().type(`{selectAll}{backspace}{enter}`);
          }
          break;

        case "UAT":
          for (var i = 0; i < guias.length; i++) {
  
            this.elements.wait2seg();
            this.elements.orderInput().type(`${guias[i]}{enter}`);
            this.elements.selectNumOrder().scrollIntoView().should('be.visible').click();
            this.elements.cancelBtn().should('be.visible').click();
            this.elements.otherOption().should('be.visible').click();
            this.elements.textOption().type("Cancelado por medio de Automatización");
            this.elements.continueBtn().should('be.visible').click();
            this.elements.orderInput().type(`{selectAll}{backspace}{enter}`);
          }
          break;

        case "SelfSandbox":
          cy.readFile('cypress/fixtures/orderNum.json').then(({ orderNum }) => {
            cy.log('El número de orden es: ', orderNum);
            this.elements.wait2seg();
            this.elements.orderInput().type(`${orderNum}{enter}`);
            this.elements.selectNumOrder().scrollIntoView().should('be.visible').click();
            this.elements.cancelBtn().should('be.visible').click();
            this.elements.otherOption().should('be.visible').click();
            this.elements.textOption().type("Cancelado por medio de Automatización");
            this.elements.continueBtn().should('be.visible').click();
            this.elements.orderInput().type(`{selectAll}{backspace}{enter}`);
          });
          break;

        case "E2EUAT":
          cy.readFile('cypress/fixtures/orderNum.json').then(({ orderNum }) => {
            cy.log('El número de orden es: ', orderNum);
            this.elements.wait2seg();
            this.elements.orderInput().type(`${orderNum}{enter}`);
            this.elements.selectNumOrder().scrollIntoView().should('be.visible').click();
            this.elements.cancelBtn().should('be.visible').click();
            this.elements.otherOption().should('be.visible').click();
            this.elements.textOption().type("Cancelado por medio de Automatización");
            this.elements.continueBtn().should('be.visible').click();
            this.elements.orderInput().type(`{selectAll}{backspace}{enter}`);
          });
          break;
    }
  }
  }
  export default new CancelEverythingPage();

