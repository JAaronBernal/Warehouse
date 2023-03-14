class LoginPage {
    elements = {
        userAvatar:() => cy.get('.MuiAvatar-root'),
        workInStation: () => cy.get('.css-1efi6ye > .MuiTypography-root'),
        logOut: () => cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        changeStation: () => cy.get('.MuiList-root > [tabindex="-1"]'),
        typeSelectStation: () => cy.get('.MuiInputBase-root'),
        acceptChageStation: () => cy.get('.MuiBox-root > .MuiButton-contained'),
        cancelChangeStation: () => cy.get('.MuiBox-root > .MuiButton-outlined'),
        firstOptionStation: () => cy.get('#autoCompleteStation-option-0'),
        confirmStation: () => cy.get('#accept-button'),
        cancelStation: () => cy.get('.MuiBox-root > .MuiButton-outlined'),
        hamburgerBtn: () => cy.get('.MuiIconButton-colorInherit'),
        btnContainers: () => cy.get('[href="/containers"]'),
        btnLineHaul: () => cy.get('[href="/line-haul"]'),
        btnCreateContainers: () => cy.get(':nth-child(5) > .MuiListItem-root > .MuiButtonBase-root'),
        btnLayout: () => cy.get(':nth-child(6) > .MuiListItem-root > .MuiButtonBase-root'),




    };
    openWebPage(environment) {
        switch(environment) {
            case "Prod":
                cy.visit('https://warehouse-management-frontend-52cqssmz2-99minutos.vercel.app/');
                break;
            case "Test":
                cy.visit('https://warehouse-management-frontend-52cqssmz2-99minutos.vercel.app/');
                break;

        }

    }

    station(station) {
        this.elements.userAvatar().click();
        this.elements.changeStation().click();
        this.elements.typeSelectStation().type(`${station}`)
        this.elements.firstOptionStation().click();
        this.elements.acceptChageStation().click();
        this.elements.confirmStation().click();
        this.elements.workInStation().should('have.text',station)
    }

    hamburgerBtn(){
        this.elements.hamburgerBtn().click();
    }
    container(){
        this.elements.btnContainers().click();
    }
}
export default new LoginPage();

