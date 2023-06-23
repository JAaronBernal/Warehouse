import { guias } from './guias.js';
class InboundPage {
    elements = {
        //Login
        email: () => cy.xpath('//*[@id="i0116"]'),
        pwd: () =>cy.xpath('//*[@id="i0118"]'),
        //Option
        welcome: () => cy.get('.css-12xa9h0'),
        userOption: () => cy.get('.css-camaj1 > .MuiButtonBase-root'),
        btnCloseSesion: () => cy.get('[tabindex="0"][role="menuitem"]'),
        btnChangeStation: () => cy.get('.MuiList-root > [tabindex="-1"]'),
        assertinbound: () => cy.get('.Toastify__toast-body'),
        closeassert: () => cy.get('.Toastify__close-button'),
        //Select Station
        typeNewStation: () => cy.xpath("//div[@class='MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd MuiAutocomplete-inputRoot css-lcqi4i']"),
        selectFirtOptionStation: () => cy.xpath('//*[@id=":r7:-listbox"]'),
        changeStationBtn: () => cy.get('form > :nth-child(2) > .MuiButtonBase-root'),
        //option
        btnVelozSinApp: () => cy.get('.css-15vdlyy > .MuiButton-outlined'),
        btnEscanerQrVeloz: () => cy.get('.MuiButton-contained'),
        btnUnirmeASesion: () => cy.get('.css-23khg1 > .MuiStack-root > :nth-child(1)'),
        btnVerTodasLasSesiones: () => cy.get('.css-23khg1 > .MuiStack-root > :nth-child(2)'),
        assertBanner: () => cy.get('.Toastify__toast-body'),
        //InputInformation
        //Veloz whitout Mobile app
        emailDriver: () => cy.xpath('//*[@id="form-no-app"]/div[1]/div[1]/div/div'),
        emailDriverOption0: () => cy.xpath('//*[@id=":r9:-option-0"]'),
        inputDriverFullName: () => cy.get('#DriverFullName'),
        inputProviderType: () => cy.get('#ProviderType'),
        providerTypeOption0: () => cy.get('#ProviderType-option-0'),
        inputProviderName: () => cy.get('#ProviderName'),
        providerNameOption0: () => cy.get('#ProviderName-option-0'),
        inputVehicleType: () => cy.get('#VehicleType'),
        vehicleTypeOption0: () => cy.get('#VehicleType-option-0'),
        inputVehiclePlates: () => cy.get('#VehiclePlates'),
        inputDriverReasonNoQR: () => cy.get('#DriverReasonNoQR'),
        inputPackageAmount: () => cy.get('#PackageAmount'),
        btnCancel: () => cy.get('#form-no-app > .MuiStack-root > .MuiButton-outlined'),
        btnStartInbound: () => cy.get('.MuiStack-root > .MuiButton-contained'),
        //User Activity
        reccolectionActivity: () => cy.get('.css-lc19os > :nth-child(1) > .MuiBox-root'),
        returnActivity: () => cy.get('.css-lc19os > :nth-child(2) > .MuiBox-root'),
        halfMileActivity: () => cy.get(':nth-child(3) > .MuiBox-root'),
        typeStationOrigin: () => cy.get('.MuiInputBase-root'),
        stationOriginOption0: () => cy.xpath('//*[@id=":rl:-option-0"]'),
        btnConfirmStationOption: () => cy.get('.MuiStack-root > .MuiButtonBase-root'),
        mixedActivity: () => cy.get(':nth-child(4) > .MuiBox-root'),

        //Finish Dowload
        finishDownload: () => cy.get('.css-utnmr3 > .MuiButtonBase-root'),
        btnCancelFinishDownload: () => cy.get('.MuiButton-outlined'),
        btnConfirmFinishDownoad: () => cy.get('.MuiStack-root > .MuiButton-contained'),
        btnCloseFinishDownload: () => cy.get('#alert-dialog-title > .MuiButtonBase-root'),

        //LogOut
        btnReview: () => cy.get('.css-1yxzqbp'),
        btnCloseReview: () => cy.get('#alert-dialog-title > .MuiButtonBase-root'),
        checkboxDownloadAllPackage: () => cy.get('.PrivateSwitchBase-input'),
        btnConfirmDownloadAllPackage: () => cy.get('.css-70qvj9 > .MuiButton-root'),
        btnRespOperators: () => cy.get('.css-dtk4g > .MuiButtonBase-root'),
        btnDownloadSummary: () => cy.get('.css-1agm92o > .MuiButton-outlined'),

        //Add Other user
        btnPlusAddUser: () => cy.get('.MuiAvatar-img'),
        truncateQR: () => cy.get('.truncate'),
        btnCloseQR: () => cy.get('#alert-dialog-title > .MuiButtonBase-root'),

        //enter code
        enterCodeScan: () => cy.get('#scan'),





    };
    openWebPage(environment) {
        switch(environment) {
            case "Test2FA":
                cy.visit('https://inbound-induction-frontend-git-release-101-99minutos.vercel.app/');
                break;
            case "Test":
                cy.session("login", ()=>{
                cy.visit('https://inbound-induction-frontend-git-release-101-99minutos.vercel.app/')
                this.elements.email().should('be.visible').type('qa@99minutos.com{enter}');
                this.elements.pwd().should('be.visible').type('Logistics.99m{enter}')

            })
                break;
                
        }

    }

    login(){
        this.elements.email().should('be.visible').type('qa@99minutos.com{enter}');
        this.elements.pwd().should('be.visible').type('Logistics.99m{enter}')

    }

    selectStation(station) {

        this.elements.welcome().should('be.visible')
        this.elements.userOption().click();
        this.elements.btnChangeStation().click();
        this.elements.typeNewStation().type(`${station}`)
        this.elements.selectFirtOptionStation().click();
        this.elements.changeStationBtn().click();
        this.elements.assertBanner().should('be.visible')
        this.elements.assertinbound().should('be.visible')
        this.elements.closeassert().click();

    }

    velozWithoutMobileApp(emailVeloz, nameVeloz, kindOfDriver, providerName, vehicleType, vehiclePlates, driverReasonNoQR, packageAmount){
        this.elements.btnVelozSinApp().should('be.visible').click();
        this.elements.emailDriver().type(`${emailVeloz}`)
        this.elements.emailDriverOption0().should('be.visible').click();
        //this.elements.inputDriverFullName().type(`${nameVeloz}`)
        this.elements.inputProviderType().type(`${kindOfDriver}`)
        this.elements.providerTypeOption0().should('be.visible').click();
        this.elements.inputProviderName().type(`${providerName}`)
        this.elements.providerNameOption0().should('be.visible').click();
        this.elements.inputVehicleType().type(`${vehicleType}`)
        this.elements.vehicleTypeOption0().should('be.visible').click();
        this.elements.inputVehiclePlates().type(`${vehiclePlates}`)
        this.elements.inputDriverReasonNoQR().type(`${driverReasonNoQR}`)
        this.elements.inputPackageAmount().type(`${packageAmount}`)
        this.elements.btnStartInbound().click();
    }

    userActivity(userActivity, stationOrigin){
        cy.wait(1500);
        switch (userActivity) {
            case 'Recolección':
                this.elements.reccolectionActivity().click();
                break;

            case 'Retorno':
                this.elements.returnActivity().click();
                break;

            case 'Media milla':
                this.elements.halfMileActivity().click();
                this.elements.typeStationOrigin().type(`${stationOrigin}`)
                this.elements.stationOriginOption0().click();
                this.elements.btnConfirmStationOption().click();

                break;
            
            case 'Mixtas':
                this.elements.mixedActivity().click();
                break;
        }
    }
    addOtherUser(){
        cy.intercept('POST', 'https://inbound-bff-develop-qndxoltwga-uc.a.run.app/api').as('scan')
        this.elements.btnPlusAddUser().click();
        this.elements.truncateQR().click();
        cy.wait('@scan')
            .wrap({scan:'response.data.GetSessionInbound.inbound.InboundId'}).its('scan')
            .then(response => {cy.log(response)})
    }
    scanEnterCode(){
        for (var i = 0; i < guias.length; i++) {
            this.elements.enterCodeScan().type(`${guias[i]}{enter}`)
        }
    }
    scanErrorEnterCode(){
        this.elements.enterCodeScan().type('2158020493{enter}')
    }

    finishDownload(){
        this.elements.finishDownload().click();
        cy.wait(1000);
        this.elements.btnConfirmFinishDownoad().should('be.visible').click();
    }

    logOut(){
        this.elements.btnReview().click();
        this.elements.btnCloseReview().click();
        cy.wait(1000);
        this.elements.checkboxDownloadAllPackage().click();
        this.elements.btnConfirmDownloadAllPackage().should('be.visible').click();
    }

    scanQRVeloz(){
        cy.wait(1500)
        this.elements.btnEscanerQrVeloz().click();

    }
    inductionSorting(numOrder){
        cy.intercept('POST', 'https://induction-bff-dev-qndxoltwga-uc.a.run.app/api').as('IdP99')
            
        for (var i = 0; i < guias.length; i++) {
        this.elements.scanPac().type(`${guias[i]}{enter}`)
        cy.wait('@IdP99')
            .its('response.body.data.induct.order.route.hasP99Coverage')
            .then(response => {cy.log(response)}) 
        }
        cy.wait(1000);
        
        

    }
}
export default new InboundPage();