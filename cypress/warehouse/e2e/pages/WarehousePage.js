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
        //Hamburger
        hamburgerBtn: () => cy.get('.MuiIconButton-colorInherit'),
        //Linehaul
        btnLineHaul: () => cy.get('[href="/line-haul"]'),
        btnNewlineHaul: () => cy.get('.css-1nd99dr > .MuiBox-root > .MuiButtonBase-root'),
        typeNewLineHaul: () => cy.get('#new-linehaul'),
        closeCreateLineHaul: () => cy.get('.css-1l89mu2 > .MuiButton-outlined'),
        addCreateLineHaul: () => cy.get('.css-1l89mu2 > .MuiButton-contained'),
        closeNewLineHaul: () => cy.get('.css-8atqhb > .MuiButtonBase-root'),
        btnOpcionlineHaul: () => cy.get('#basic-button'),
        deletThisLineHaul: () => cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        editThisLineHaul: () => cy.get('.MuiList-root > [tabindex="-1"]'),
        editNameLineHaul: ()=>cy.get('#platformName'),
        btnEditConfirm: () => cy.get('.css-1l89mu2 > .MuiButton-contained'),
        btnEditCancel: () => cy.get('.css-1l89mu2 > .MuiButton-outlined'),
        btnDeletTheLineHaul: () => cy.get('#accept-button'),
        btnCancelTheLineHaul: () => cy.get('.css-1k7a714 > .MuiBox-root > .MuiButton-outlined'),
        //Driver
        btnRegistNewVehicle: () => cy.get('.css-ekpfb0 > .MuiButtonBase-root'),
        typeNewDriver: () => cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root'),
        driverId0: () => cy.get('#driver-select-option-0'),
        typeIdVehicle: () => cy.get('#new-linehaul'),
        cancelRegDriver: () =>cy.get('.css-1l89mu2 > .MuiButton-outlined'),
        confirmRegDriver: () => cy.get('.css-1l89mu2 > .MuiButton-contained'),
        contaninerClose: () => cy.get('.MuiTypography-caption'),
        //destination
        typeDest: () => cy.xpath('//*[@id="location-autocomplete"]'),
        locationOption0: () => cy.get('#location-autocomplete-option-0'),
        typeDepartureTime: () => cy.xpath('//*[@id=":r8:"]'),

        //Container
        btnContainers: () => cy.get('[href="/containers"]'),
        typeFinger: () => cy.get('#scanner-input'),
        btnStartFingerId: () => cy.get('.MuiCardActions-root > .MuiButtonBase-root'),
        //
        btnCreateContainers: () => cy.get(':nth-child(5) > .MuiListItem-root > .MuiButtonBase-root'),
        //Layout
        btnModLayout: () => cy.get(':nth-child(6) > .MuiListItem-root > .MuiButtonBase-root'),
        btnLayoutDowload: ()  => cy.get('.css-1hqast7 > .MuiButtonBase-root'),
        //Create Container
        btnConectImp: () => cy.get('.MuiBox-root > .MuiButton-contained'),
        btnContinueNoImp: () => cy.get('.MuiBox-root > .MuiButton-outlined'),
        closeCreateContainer: () => cy.get('.css-8atqhb > .MuiButtonBase-root'),
        inputCreateContainer: ()=> cy.get('#containers-number'),
        btnCancelCreateCon: () => cy.get('.css-1tcrf2f > .MuiButton-outlined'),
        btnAcceptCreateCon: () => cy.get('#accept-button'),
        //drop
        uploadfile: () => cy.get('.file-drop-target'),
        btnCancelUF: () => cy.get('.css-1tcrf2f > .MuiButton-outlined'),
        btnConfirUF: () => cy.get('#accept-button'),
        assertDone: () => cy.get('.Toastify__toast-body'),
        



    };
    openWebPage(environment) {
        switch(environment) {
            case "Prod":
                cy.visit('https://warehouse-management-frontend-git-release-103-99minutos.vercel.app/');
                break;
            case "Test":
                cy.visit('https://warehouse-management-frontend-git-release-103-99minutos.vercel.app/');
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
    loginWarehouse(station){
        this.elements.userAvatar().click();
        this.elements.changeStation().click();
        this.elements.typeSelectStation().type(`${station}`)
        this.elements.firstOptionStation().click();
        this.elements.acceptChageStation().click();
        this.elements.confirmStation().click();
        this.elements.workInStation().should('have.text',station)
        this.elements.hamburgerBtn().click();
        this.elements.btnContainers().click();
    }
 
    actLayout(layout){
        this.elements.hamburgerBtn().click();
        this.elements.btnModLayout().click();
        //this.elements.btnLayoutDowload().click();
        this.elements.uploadfile().attachFile(layout, { subjectType: 'drag-n-drop' });
        cy.wait(1000);
        this.elements.btnConfirUF().click();
        this.elements.assertDone().should('have.text', 'Se ha actualizado correctamente el layout del almacén' )
        cy.wait(2000);

    }

    createContainer(numContainer){
        this.elements.hamburgerBtn().click();
        this.elements.btnCreateContainers().click();
        this.elements.btnContinueNoImp().click();
        this.elements.inputCreateContainer().type(`{selectAll}{backspace}${numContainer}`);
        this.elements.btnAcceptCreateCon().click();

    }

    addContainer(fingerID){
        cy.wait(2500);
        this.elements.hamburgerBtn().click();
        this.elements.btnContainers().click();
        this.elements.typeFinger().type(`{selectAll}{backspace}${fingerID}`);
        this.elements.btnStartFingerId().click();
    }

    addLineHaul(lineHaul){
        this.elements.hamburgerBtn().click();
        this.elements.btnLineHaul().click();
        this.elements.btnNewlineHaul().click();
        this.elements.typeNewLineHaul().type(`{selectAll}{backspace}${lineHaul}`);
        this.elements.addCreateLineHaul().click();

    }

    deletLineHaul(){
        this.elements.hamburgerBtn().click();
        this.elements.btnLineHaul().click();
        this.elements.btnOpcionlineHaul().click();
        this.elements.deletThisLineHaul().click();
        this.elements.btnDeletTheLineHaul().click();
    }
    editLineHaulEmpty(newNameLineHaul){
        this.elements.hamburgerBtn().click();
        this.elements.btnLineHaul().click();
        this.elements.btnOpcionlineHaul().click();
        this.elements.editThisLineHaul().click();
        this.elements.editNameLineHaul().type(`{selectAll}{backspace}${newNameLineHaul}`);
        this.elements.btnEditConfirm().click();

    }

    regisVehicle(driver,idVehicle,destination,depTime){
        this.elements.hamburgerBtn().click();
        this.elements.btnLineHaul().click();
        this.elements.btnRegistNewVehicle().click();
        this.elements.typeNewDriver().type(`{selectAll}{backspace}${driver}{enter}`);
        this.elements.driverId0().click();
        this.elements.typeIdVehicle().type(`{selectAll}{backspace}${idVehicle}`);
        this.elements.confirmRegDriver().click();
        this.elements.typeDest().type(`{selectAll}{backspace}${destination}`);
        this.elements.locationOption0().click();
        this.elements.typeDepartureTime().click();
        this.elements.typeDepartureTime().type(`{selectAll}${depTime}`);

        
    }
}
export default new LoginPage();

