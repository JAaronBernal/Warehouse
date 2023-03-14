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
            case "Prod":
                cy.visit('https://warehouse.99minutos.com/');
                break;
            case "Test":
                cy.visit('https://induction-sorting-console-dw5uwc7ru-99minutos.vercel.app/')
                break;
            case "x":
                cy.visit('https://landing-99m-git-develop-99minutos.vercel.app/')
                break;
                //;

        }

    }

    bannerGeo(){
        this.elements.closeBanner().click();

    }

    station(station) {
        //this.elements.userName().type(`${user}{enter}`);
        
        this.elements.currentBtnStation().click();
        cy.wait(1000)
        this.elements.inputStation().type(`${station}`)
        this.elements.firstOptionInput().click();
        this.elements.btnChangeStation().click();
        this.elements.btnConfirmChangeStation().click();
        this.elements.station().should('have.text',station)
    }
    inductionSorting(numOrder){
        this.elements.scanPac().type(`${numOrder}{enter}`)
    }
}
export default new InductionPage();