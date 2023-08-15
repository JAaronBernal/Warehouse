import { guias } from './guias.js';
import { guiasT } from './guiasT.js';

class InductionPage {
    elements = {
        station: () => cy.get('strong.CurrentStation_labelStation__1Ixmu'),
        //Banner geolocalización
        closeBanner: () => cy.get('.ModalWrapper_closeButton__mAMQK'),
        autGeo: () => cy.get('h1'),
        btnAssignOrdToVel: () => cy.get('[style="display: flex; gap: 1.5rem;"] > .button'),
        stationAct: () => cy.get('[style="display: flex; gap: 1.5rem;"] > .button'),
        btnRestCount: () => cy.get('.InputScanner_truckIcon__Z_PSk'),
        //Scan to sorting
        scanPac: () => cy.get('.InputScanner_subheaderInput__daZPT'),



        userAct: () => cy.get('.UserSession_userSession__o7Mnm'),
        btnChangeSecIndContainer: () => cy.get('.InductionSubheader_subheader__B69ao > .btn-secondary'),
        btnDownloadReportOrd: () => cy.get('.Footer_flexElement__jRyHa > .button'),
        btnOptionImp: () => cy.get('.Footer_buttonContainer__7EQ_1'),
        //Change Station
        currentBtnStation: () => cy.get('.CurrentStation_buttonStation__xW7wH'),
        inputStation: () => cy.get('.select-search__input'),
        firstOptionInput: () => cy.get('[data-index="0"] > .select-search__option'),
        btnChangeStation: () => cy.get('.Induction_modalShipment__B8z5x > .button'),
        btnConfirmChangeStation: () => cy.get(':nth-child(2) > .container > .card > .Induction_modalShipment__B8z5x > .Induction_optionsContainer__Icquv > :nth-child(1)'),
        btnCancellChangeStation: () => cy.get('.Induction_optionsContainer__Icquv > :nth-child(2)'),

    };
    openWebPage(environment) {
        switch(environment) {
            case "UAT":
                cy.visit('https://induction-sorting-console-uat.vercel.app/');
                cy.wait(2500);

                cy.origin(
                    'login.microsoftonline.com',
                    () => {
                        cy.get('#i0116').type(`qa@99minutos.com{enter}`, {
                        log: false,})
                        cy.wait(1500);
                        cy.get('#i0118').type(`Logistics.99m{enter}`, {
                            log: false,})
                        cy.get('#idSIButton9').click();
                        }
                )
                break;
            case "Test":
                cy.visit('https://induction-sorting-console-dw5uwc7ru-99minutos.vercel.app/')
                break;
            case "E2ETest":
                cy.visit('https://induction-sorting-console-dw5uwc7ru-99minutos.vercel.app/')
                break;

            case "E2EUAT":
                cy.visit('https://induction-sorting-console-dw5uwc7ru-99minutos.vercel.app/')
                break;
        }
    }

    bannerGeo(){
        this.elements.closeBanner().should('be.visible').click();
    }

    station(station) {
        this.elements.currentBtnStation().should('be.visible').click();
        cy.wait(1500)
        this.elements.inputStation().should('be.visible').type(`${station}`)
        cy.wait(1500)
        this.elements.firstOptionInput().should('be.visible').click();
        this.elements.btnChangeStation().should('be.visible').click();
        this.elements.btnConfirmChangeStation().should('be.visible').click();
        this.elements.station().should('have.text',station)
    }
    inductionSorting(environment){
        switch(environment) {
            case "Test":
                for (var i = 0; i < guiasT.length; i++) {
                this.elements.scanPac().type(`${guiasT[i]}{enter}`)
                }
                cy.wait(1000);
            break;

            case "UAT":            
                for (var i = 0; i < guias.length; i++) {
                this.elements.scanPac().type(`${guias[i]}{enter}`)
                 }
                cy.wait(1000);
            break;
            
            case "E2ETest":
                cy.readFile('cypress/fixtures/orderNum.json').then(({ orderNum }) => {
                cy.log('El número de orden es: ', orderNum);
                this.elements.scanPac().type(`${orderNum}{enter}`)
                });
                break;

            case "E2EUAT":
                cy.readFile('cypress/fixtures/orderNum.json').then(({ orderNum }) => {
                cy.log('El número de orden es: ', orderNum);
                this.elements.scanPac().type(`${orderNum}{enter}`)
                 });
                break;
        }
    }
}
export default new InductionPage();