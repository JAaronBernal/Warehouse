import { guias } from './guias.js';
import { guiasT } from './guiasT.js';
class WarehousePage {
    elements = {
        wait1seg: () => cy.wait(1000),
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
        btnOpcionInLH: () => cy.get('#basic-button'),
        //Temporal
        deletThisLineHaulTemp: () => cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        btnOpcionLineHaulTemp: () => cy.get(':nth-child(4) > .css-10b2cka > .css-1r9gd80 > #basic-button'),
        editThisLineHaulTemp: () => cy.get('.MuiList-root > [tabindex="-1"]'),
        //reedit
        reEditThisLineHaul: () => cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        reEditIdVehicle: () =>cy.get('#vehicleLicencePlates'),
        reEditTypeDet: () => cy.get('#location-autocomplete'),
        reEditSelctFirtOption: () => cy.get('#location-autocomplete-listbox'),
        reEditDriver: () => cy.xpath('//*[@id=":rg:"]'),
        reEditCloseBtn: () => cy.get('.css-1l89mu2 > .MuiButton-outlined'),
        reEditEditBt: () => cy.get('.css-1l89mu2 > .MuiButton-contained'),

        //Clean Line Haul
        
        cleanLineHaul: () => cy.get('.MuiList-root > [tabindex="-1"]'),
        cancelCleanBtn: () => cy.get('.css-1k7a714 > .MuiBox-root > .MuiButton-outlined'),
        confirmCleanBtn: () => cy.get('#accept-button'),

        //LineHaul Scan
        scanContainerLineHaul: () => cy.get('#scanner-input'),
        transferPackLineHaul: () => cy.get('.css-1n8vnop > .MuiButton-outlined'),
        letOutLineHaul: () =>  cy.get('.css-1n8vnop > .MuiButton-contained'),
        letOutConfirmBtn: () => cy.get('#accept-button'),
        letOutCancelBtn: () => cy.get('.css-1k7a714 > .MuiBox-root > .MuiButton-outlined'),
        letOutCommentType: () => cy.get('.css-1k7a714 > .MuiFormControl-root > .MuiInputBase-root'),
        letOutCommentConfirm: () => cy.get('#accept-button'),
        letOutCommentCancel: () => cy.get('.css-1k7a714 > .MuiBox-root > .MuiButton-outlined'),
        deletThisLineHaul: () => cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        editThisLineHaul: () => cy.get('.MuiList-root > [tabindex="-1"]'),
        editNameLineHaul: ()=>cy.get('#platformName'),
        btnEditConfirm: () => cy.get('.css-1l89mu2 > .MuiButton-contained'),
        btnEditCancel: () => cy.get('.css-1l89mu2 > .MuiButton-outlined'),
        btnDeletTheLineHaul: () => cy.get('#accept-button'),
        btnCancelTheLineHaul: () => cy.get('.css-1k7a714 > .MuiBox-root > .MuiButton-outlined'),
        
        //Driver
        btnRegistNewVehicle: () => cy.get('.css-ekpfb0 > .MuiButtonBase-root'),
        btnRegistNewVehicleTemp: () => cy.get(':nth-child(4) > .css-10b2cka > .MuiStack-root > .css-ekpfb0 > .MuiButtonBase-root'),
        typeNewDriver: () => cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root'),
        driverId0: () => cy.get('#\\:r7\\:-listbox'),
        driverWId0: () => cy.xpath('//*[@id=":r7:-option-0"]'),

        typeIdVehicle: () => cy.get('#new-linehaul'),
        cancelRegDriver: () =>cy.get('.css-1l89mu2 > .MuiButton-outlined'),
        confirmRegDriver: () => cy.get('.css-1l89mu2 > .MuiButton-contained'),
        contaninerClose: () => cy.get('.MuiTypography-caption'),
        //destination
        typeDest: () => cy.get('#location-autocomplete'),
        locationOption0: () => cy.get('#location-autocomplete-option-0'),
        typeDepartureTime: () => cy.get('#\\:rc\\:'),
        typeDepartureTimeLineHual: () => cy.xpath('//*[@id=":ra:"]'),
        cancelRegisDriverBtn: () => cy.get('.css-1k7a714 > .MuiBox-root > .MuiButton-outlined'),
        confitRegisDriverBtn: () => cy.get('.css-1k7a714 > .MuiBox-root > .MuiButton-contained'),

        //Container
        btnContainers: () => cy.get('[href="/containers"]'),
        typeFinger: () => cy.get('#scanner-input'),
        btnStartFingerId: () => cy.get('.MuiCardActions-root > .MuiButtonBase-root'),
        //btnPlusContainers: () => cy.get('.css-zdpt2t > .MuiButtonBase-root'),
        btnPlusContainers: () => cy.get(':nth-child(1) > .css-zdpt2t > .MuiButtonBase-root'),
        typeScanContainers: () => cy.get('.css-3xkt66 > .MuiFormControl-root > .MuiInputBase-root > #scanner-input'),
        btnCancelAddContainer: () =>cy.get('.css-1tcrf2f > .MuiButton-outlined'),
        btnConfirmAddContainer: () =>cy.get('#accept-button'),
        seeOrder: () => cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        seeLaber: () => cy.get('.MuiPaper-root > .MuiList-root > :nth-child(2)'),
        closeContainer: () => cy.get('.MuiPaper-root > .MuiList-root > :nth-child(3)'),
        cancelCloseContainer: () => cy.get('.MuiBox-root > .MuiButton-outlined'),
        confirmCloseContainer: () => cy.get('#accept-button'),
        containerLongBtn: () => cy.get('#long-button'),
        containerLongBtn2: () => cy.get('#__next > main > div.MuiBox-root.css-z1l42k > div.MuiBox-root.css-b64ain > div.MuiBox-root.css-qog72m > div > div.MuiBox-root.css-1wkbtf3 > div:nth-child(2) > div.MuiBox-root.css-1k06pwf > div:nth-child(2)'), 
        containerLongBtn3: () => cy.get('#__next > main > div.MuiBox-root.css-z1l42k > div.MuiBox-root.css-b64ain > div.MuiBox-root.css-qog72m > div > div.MuiBox-root.css-1wkbtf3 > div:nth-child(3) > div.MuiBox-root.css-1k06pwf > div:nth-child(2)'),
        containerLongBtn4: () => cy.get('#__next > main > div.MuiBox-root.css-z1l42k > div.MuiBox-root.css-b64ain > div.MuiBox-root.css-qog72m > div > div.MuiBox-root.css-1wkbtf3 > div:nth-child(4) > div.MuiBox-root.css-1k06pwf > div:nth-child(2)'),
        containerLongBtn5: () => cy.get('#__next > main > div.MuiBox-root.css-z1l42k > div.MuiBox-root.css-b64ain > div.MuiBox-root.css-qog72m > div > div.MuiBox-root.css-1wkbtf3 > div:nth-child(5) > div.MuiBox-root.css-1k06pwf > div:nth-child(2)'),
        //Transfer package 
        transferPack: () => cy.get('.MuiPaper-root > .MuiList-root > :nth-child(4)'),
        typeIdContainer: () => cy.get('.css-3xkt66 > .MuiFormControl-root > .MuiInputBase-root > #scanner-input'),
        cancelTransferPack: () => cy.get('.css-1tcrf2f > .MuiButton-outlined'),
        confirmTransferPack: () => cy.get('#accept-button'),

        switchContainer: () => cy.get('.css-1k06pwf > :nth-child(1) > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input'),

        //AddOrder
        typeOrderID: () => cy.get('#scanner-input'),

        //Incative Container
        toggleBtnContainer: () => cy.get('#__next > main > div.MuiBox-root.css-z1l42k > div.MuiBox-root.css-b64ain > div.MuiBox-root.css-qog72m > div > div.MuiBox-root.css-1wkbtf3 > div:nth-child(1) > div.MuiBox-root.css-1k06pwf > div:nth-child(1) > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.Mui-checked.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.Mui-checked.Mui-checked.css-17ii7m0 > input'),
        toggleBtnContainer2: () => cy.get('#__next > main > div.MuiBox-root.css-z1l42k > div.MuiBox-root.css-b64ain > div.MuiBox-root.css-qog72m > div > div.MuiBox-root.css-1wkbtf3 > div:nth-child(2) > div.MuiBox-root.css-1k06pwf > div:nth-child(1) > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.Mui-checked.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.Mui-checked.Mui-checked.css-17ii7m0 > input'),
        toggleBtnContainerAct: () => cy.get('#__next > main > div.MuiBox-root.css-z1l42k > div.MuiBox-root.css-b64ain > div.MuiBox-root.css-qog72m > div > div.MuiBox-root.css-1wkbtf3 > div:nth-child(1) > div.MuiBox-root.css-1k06pwf > div:nth-child(1) > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-17ii7m0 > input'),
        toggleBtnContainer2Act: () => cy.get('#__next > main > div.MuiBox-root.css-z1l42k > div.MuiBox-root.css-b64ain > div.MuiBox-root.css-qog72m > div > div.MuiBox-root.css-1wkbtf3 > div:nth-child(2) > div.MuiBox-root.css-1k06pwf > div:nth-child(1) > span > span.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.css-17ii7m0 > input'),
        
        

        //
        closeBtn: () => cy.get('.Toastify__close-button'),
        btnCreateContainers: () => cy.get(':nth-child(5) > .MuiListItem-root > .MuiButtonBase-root'),
        
        //Layout
        btnModLayout: () => cy.get(':nth-child(6) > .MuiListItem-root > .MuiButtonBase-root'),
        btnLayoutDowload: ()  => cy.get('.css-1hqast7 > .MuiButtonBase-root'),
        //Create Container
        btnConectImp: () => cy.get('.MuiBox-root > .MuiButton-contained'),
        btnContinueNoImp: () => cy.get('.MuiBox-root > .MuiButton-outlined'),
        btnContinueNoImp_2: () => cy.get('.css-1z13ce1 > .MuiBox-root > .MuiButton-outlined'),
        closeCreateContainer: () => cy.get('.css-8atqhb > .MuiButtonBase-root'),
        inputCreateContainer: ()=> cy.get('#containers-number'),
        btnCancelCreateCon: () => cy.get('.css-1tcrf2f > .MuiButton-outlined'),
        btnAcceptCreateCon: () => cy.get('#accept-button'),
        //drop
        uploadfile: () => cy.get('.file-drop-target'),
        btnCancelUF: () => cy.get('.css-1tcrf2f > .MuiButton-outlined'),
        btnConfirUF: () => cy.get('#accept-button'),
        assertDone: () => cy.get('.Toastify__toast-body'),
        //UAT
        userEmail: () => cy.get('#i0116'),
        userPwd: () => cy.get('#i0118'),
        closeAssert33: () => cy.get('#\\33  > .Toastify__close-button'),
        closeAssert34: () => cy.get('#\\34  > .Toastify__close-button'),



    };
    openWebPage(environment) {
        switch(environment) {
            case "UAT":
                cy.visit('https://warehouse-management-frontend-uat.vercel.app/');
                cy.wait(2500);
                //this.elements.userEmailUat().should('be.visible').type(`qa@99minutos.com{enter}`);
                //this.elements.userPwdUat().should('be.visible').type(`Logistics.99m{enter}`);

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

            case "E2EUAT":
                cy.visit('https://warehouse-management-frontend-uat.vercel.app/');
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
                cy.visit('https://warehouse-management-frontend-test.vercel.app/line-haul');
                cy.wait(2500);
                //this.elements.userEmailUat().should('be.visible').type(`qa@99minutos.com{enter}`);
                //this.elements.userPwdUat().should('be.visible').type(`Logistics.99m{enter}`);

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
            case "E2ETest":
                cy.visit('https://warehouse-management-frontend-test.vercel.app/line-haul');
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

        }

    }
    loginWarehouse(station){
        this.elements.userAvatar().click();
        this.elements.changeStation().click();
        this.elements.typeSelectStation().type(`${station}`)
        //cy.wait(2500);
        //this.elements.firstOptionStation().click();
        this.elements.acceptChageStation().click();
        this.elements.confirmStation().click();
        this.elements.workInStation().should('have.text',station)
        this.elements.hamburgerBtn().click();
        this.elements.btnContainers().click();
    }

    actLayout(layout){
        this.elements.hamburgerBtn().click();
        this.elements.btnModLayout().click();
        this.elements.btnLayoutDowload().click();
        this.elements.uploadfile().attachFile(layout, { subjectType: 'drag-n-drop' });
        this.elements.btnConfirUF().should('be.visible').click();
        this.elements.assertDone().should('have.text', 'Se ha actualizado correctamente el layout del almacén' )

    }
    deletLineHaul(){
        this.elements.hamburgerBtn().should('be.visible').click();
        this.elements.btnLineHaul().click();
        this.elements.btnOpcionInLH().should('be.visible').click();
        this.elements.deletThisLineHaulTemp().click();
        this.elements.btnDeletTheLineHaul().click();
    }
   
    assignContainerInLineHaulStress(environment,numContainer,fingerID,lineHaul,driver,idVehicle,destination){

        switch(environment) {
            case "UAT":
                cy.intercept('POST', 'https://inductionx.99minutos.com/api').as('IdContainer')
                this.elements.hamburgerBtn().click();
                this.elements.btnCreateContainers().click();
                this.elements.btnContinueNoImp().click();
                this.elements.inputCreateContainer().type(`{selectAll}{backspace}${numContainer}`);
                cy.wait(3500)
                this.elements.btnAcceptCreateCon().click();
                cy.wait(1500)
                cy.wait('@IdContainer')
                    .its('response.body.data.createContainers.containers[0].id')
                    .then(response => {cy.log(response)})  
                cy.get('@IdContainer').then(request =>{

                    this.elements.hamburgerBtn().click();
                    this.elements.btnContainers().click();
                    this.elements.typeFinger().type(`{selectAll}{backspace}${fingerID}`);
                    this.elements.btnStartFingerId().click();


                    this.elements.btnPlusContainers().should('be.visible').click();
                    const idContainer = request.response.body.data.createContainers.containers[0].id
                    this.elements.typeScanContainers().type(`${idContainer}`);
                    this.elements.btnConfirmAddContainer().click();
                    cy.wait(1500)
                    
                    //console.log(guias);
                    for (var i = 0; i < guias.length; i++) {
                    this.elements.typeOrderID().type(`${guias[i]}{enter}`);
                    cy.wait(500)
                    }

                    this.elements.containerLongBtn().should('be.visible').click();
                    this.elements.closeContainer().click();
                    this.elements.confirmCloseContainer().click();

                    
                    //Linehaul
                    this.elements.hamburgerBtn().should('be.visible').click();
                    this.elements.btnLineHaul().click();
                    this.elements.btnNewlineHaul().click();
                    this.elements.typeNewLineHaul().type(`{selectAll}{backspace}${lineHaul}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`);
                    this.elements.addCreateLineHaul().click();

                    //LineHaul
                    this.elements.hamburgerBtn().should('be.visible').click();
                    this.elements.btnLineHaul().click();
                    this.elements.btnRegistNewVehicle().click();
                    this.elements.typeNewDriver().type(`{selectAll}{backspace}${driver}{enter}`);
                    this.elements.driverId0().should('be.visible').click();
                    this.elements.typeIdVehicle().type(`{selectAll}{backspace}${idVehicle}`);
                    this.elements.confirmRegDriver().click();
                    this.elements.typeDest().type(`${destination}{enter}`);
                    this.elements.locationOption0().click();
                    //Date
                    const currentDate = new Date();
                    const formattedDate = currentDate.toISOString().slice(0, 19);
                    console.log(formattedDate);
                    this.elements.closeAssert33().should('be.visible').click();
                    this.elements.closeAssert34().should('be.visible').click();
                    this.elements.typeDepartureTime().type(`${formattedDate}`);
                    this.elements.confitRegisDriverBtn().click();
                    this.elements.scanContainerLineHaul().type(`${idContainer}{enter}`);
                    cy.wait(5001)
                    this.elements.letOutLineHaul().click();
                    this.elements.letOutConfirmBtn().click();
                    this.elements.letOutCommentType().type('Test')
                    this.elements.letOutCommentConfirm().click();
                    })
                break;
            case "E2EUAT":
                //Agregar Num order
                cy.intercept('POST', 'https://inductionx.99minutos.com/api').as('IdContainer')
                this.elements.hamburgerBtn().click();
                this.elements.btnCreateContainers().click();
                this.elements.btnContinueNoImp().click();
                this.elements.inputCreateContainer().type(`{selectAll}{backspace}${numContainer}`);
                cy.wait(3500)
                this.elements.btnAcceptCreateCon().click();
                cy.wait(1500)
                cy.wait('@IdContainer')
                    .its('response.body.data.createContainers.containers[0].id')
                    .then(response => {cy.log(response)})  
                cy.get('@IdContainer').then(request =>{

                    this.elements.hamburgerBtn().click();
                    this.elements.btnContainers().click();
                    this.elements.typeFinger().type(`{selectAll}{backspace}${fingerID}`);
                    this.elements.btnStartFingerId().click();
    
    
                    this.elements.btnPlusContainers().should('be.visible').click();
                    const idContainer = request.response.body.data.createContainers.containers[0].id
                    this.elements.typeScanContainers().type(`${idContainer}`);
                    this.elements.btnConfirmAddContainer().click();
                    cy.wait(1500)
                        
                        //console.log(guias);
                    for (var i = 0; i < guias.length; i++) {
                    this.elements.typeOrderID().type(`${guias[i]}{enter}`);
                    cy.wait(500)
                    }
    
                    this.elements.containerLongBtn().should('be.visible').click();
                    this.elements.closeContainer().click();
                    this.elements.confirmCloseContainer().click();
    
                        
                    //Linehaul
                    this.elements.hamburgerBtn().should('be.visible').click();
                    this.elements.btnLineHaul().click();
                    this.elements.btnNewlineHaul().click();
                    this.elements.typeNewLineHaul().type(`{selectAll}{backspace}${lineHaul}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`);
                    this.elements.addCreateLineHaul().click();
    
                    //LineHaul
                    this.elements.hamburgerBtn().should('be.visible').click();
                    this.elements.btnLineHaul().click();
                    this.elements.btnRegistNewVehicle().click();
                    this.elements.typeNewDriver().type(`{selectAll}{backspace}${driver}{enter}`);
                    this.elements.driverId0().should('be.visible').click();
                    this.elements.typeIdVehicle().type(`{selectAll}{backspace}${idVehicle}`);
                    this.elements.confirmRegDriver().click();
                    this.elements.typeDest().type(`${destination}{enter}`);
                    this.elements.locationOption0().click();
                        //Date
                    const currentDate = new Date();
                    const formattedDate = currentDate.toISOString().slice(0, 19);
                    console.log(formattedDate);
                    this.elements.closeAssert33().should('be.visible').click();
                    this.elements.closeAssert34().should('be.visible').click();
                    this.elements.typeDepartureTime().type(`${formattedDate}`);
                    this.elements.confitRegisDriverBtn().click();
                    this.elements.scanContainerLineHaul().type(`${idContainer}{enter}`);
                    cy.wait(5001)
                    this.elements.letOutLineHaul().click();
                    this.elements.letOutConfirmBtn().click();
                    this.elements.letOutCommentType().type('Test')
                    this.elements.letOutCommentConfirm().click();
                    })
                break;

            case "Test":
                cy.intercept('POST', 'https://induction-bff-dev-qndxoltwga-uc.a.run.app/api').as('IdContainerT')
                this.elements.hamburgerBtn().click();
                this.elements.btnCreateContainers().click();
                this.elements.btnContinueNoImp().click();
                this.elements.inputCreateContainer().type(`{selectAll}{backspace}${numContainer}`);
                cy.wait(3500)
                this.elements.btnAcceptCreateCon().click();
                cy.wait(1500)
                cy.wait('@IdContainerT')
                    .its('response.body.data.createContainers.containers[0].id')
                    .then(response => {cy.log(response)})  
                cy.get('@IdContainerT').then(request =>{
    
                    this.elements.hamburgerBtn().click();
                    this.elements.btnContainers().click();
                    this.elements.typeFinger().type(`{selectAll}{backspace}${fingerID}`);
                    this.elements.btnStartFingerId().click();
    
    
                    this.elements.btnPlusContainers().should('be.visible').click();
                    const IdContainerT = request.response.body.data.createContainers.containers[0].id
                    this.elements.typeScanContainers().type(`${IdContainerT}`);
                    this.elements.btnConfirmAddContainer().click();
                    cy.wait(1500)
                        
                    //console.log(guias);
                    for (var i = 0; i < guiasT.length; i++) {
                    this.elements.typeOrderID().type(`${guiasT[i]}{enter}`);
                    cy.wait(500)
                    }
    
                    this.elements.containerLongBtn().should('be.visible').click();
                    this.elements.closeContainer().click();
                    this.elements.confirmCloseContainer().click();
    
                        
                    //Linehaul
                    this.elements.hamburgerBtn().should('be.visible').click();
                    this.elements.btnLineHaul().click();
                    this.elements.btnNewlineHaul().click();
                    this.elements.typeNewLineHaul().type(`{selectAll}{backspace}${lineHaul}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`);
                    this.elements.addCreateLineHaul().click();

                    this.elements.hamburgerBtn().should('be.visible').click();
                    this.elements.btnLineHaul().click();
                    this.elements.btnRegistNewVehicle().click();
                    this.elements.typeNewDriver().type(`{selectAll}{backspace}${driver}{enter}`);
                    this.elements.driverId0().should('be.visible').click();
                    this.elements.typeIdVehicle().type(`{selectAll}{backspace}${idVehicle}`);
                    this.elements.confirmRegDriver().click();
                    this.elements.typeDest().type(`${destination}{enter}`);
                    this.elements.locationOption0().click();
                    //Date
                    const currentDate = new Date();
                    const formattedDate = currentDate.toISOString().slice(0, 19);
                    console.log(formattedDate);
                    this.elements.closeAssert33().should('be.visible').click();
                    this.elements.closeAssert34().should('be.visible').click();
                    this.elements.typeDepartureTime().type(`${formattedDate}`);
                    this.elements.confitRegisDriverBtn().click();
                    this.elements.scanContainerLineHaul().type(`${IdContainerT}{enter}`);
                    cy.wait(5001)
                    this.elements.letOutLineHaul().click();
                    this.elements.letOutConfirmBtn().click();
                    this.elements.letOutCommentType().type('Test')
                    this.elements.letOutCommentConfirm().click();
                     })
                break;

            case "E2ETest":
                cy.readFile('cypress/fixtures/orderNum.json').then(({ orderNum }) => {
                    cy.log('El número de orden es: ', orderNum);
                    cy.intercept('POST', 'https://induction-bff-dev-qndxoltwga-uc.a.run.app/api').as('IdContainerT')
                    this.elements.hamburgerBtn().click();
                    this.elements.btnCreateContainers().click();
                    this.elements.btnContinueNoImp().click();
                    this.elements.inputCreateContainer().type(`{selectAll}{backspace}${numContainer}`);
                    this.elements.btnAcceptCreateCon().click();
                    cy.wait(1500)
                    //data.createContainers.containers[0].id
                    //body.data.createContainers.containers[0].id
                    cy.wait('@IdContainerT')
                        .its('response.body.data.createContainers.containers[0].id')
                        .then(response => {cy.log(response)})  
                    cy.get('@IdContainerT').then(request =>{
                        
                        this.elements.hamburgerBtn().click();
                        this.elements.btnContainers().click();
                        this.elements.typeFinger().type(`{selectAll}{backspace}${fingerID}`);
                        this.elements.btnStartFingerId().click();
        
        
                        this.elements.btnPlusContainers().should('be.visible').click();
                        const IdContainerT = request.response.body.data.createContainers.containers[0].id
                        this.elements.typeScanContainers().type(`${IdContainerT}`);
                        this.elements.btnConfirmAddContainer().click();
                        cy.wait(1500)
                        
                        //Adding order num to e2e
                        this.elements.typeOrderID().type(`${orderNum}{enter}`);
                        this.elements.containerLongBtn().should('be.visible').click();
                        this.elements.closeContainer().click();
                        this.elements.confirmCloseContainer().click();
            
                                
                            //Linehaul
                        this.elements.hamburgerBtn().should('be.visible').click();
                        this.elements.btnLineHaul().click();
                        this.elements.btnNewlineHaul().click();
                        this.elements.typeNewLineHaul().type(`{selectAll}{backspace}${lineHaul}${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`);
                        this.elements.addCreateLineHaul().click();
        
                        this.elements.hamburgerBtn().should('be.visible').click();
                        this.elements.btnLineHaul().click();
                        this.elements.btnRegistNewVehicle().click();
                        this.elements.typeNewDriver().type(`{selectAll}{backspace}${driver}{enter}`);
                        this.elements.driverId0().should('be.visible').click();
                        this.elements.typeIdVehicle().type(`{selectAll}{backspace}${idVehicle}`);
                        this.elements.confirmRegDriver().click();
                        this.elements.typeDest().type(`${destination}{enter}`);
                        this.elements.locationOption0().click();
                            //Date
                        const currentDate = new Date();
                        const formattedDate = currentDate.toISOString().slice(0, 19);
                        console.log(formattedDate);
                        this.elements.closeAssert33().should('be.visible').click();
                        //this.elements.closeAssert34().should('be.visible').click();
                        this.elements.typeDepartureTime().type(`${formattedDate}`);
                        this.elements.confitRegisDriverBtn().click();
                        this.elements.scanContainerLineHaul().type(`${IdContainerT}{enter}`);
                        cy.wait(5001)
                        this.elements.letOutLineHaul().click();
                        this.elements.letOutConfirmBtn().click();
                        this.elements.letOutCommentType().type('Test')
                        this.elements.letOutCommentConfirm().click();
                        })
                    });
                break;

            }
//npx cypress run --record --key 54c01d1b-8a60-4be6-89a0-4dafd24be5e9
    
}
}
export default new WarehousePage();

