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
        //Temporal
        deletThisLineHaulTemp: () => cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        btnOpcionLineHaulTemp: () => cy.get(':nth-child(3) > .css-10b2cka > .css-1r9gd80 > #basic-button'),
        editThisLineHaulTemp: () => cy.get('.MuiList-root > [tabindex="-1"]'),
        //reedit
        reEditThisLineHaul: () => cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        reEditIdVehicle: () =>cy.get('#vehicleLicencePlates'),
        reEditTypeDet: () => cy.get('.css-w7zgc7 > .MuiFormControl-root > .MuiInputBase-root'),
        reEditSelctFirtOption: () => cy.get('#location-autocomplete-listbox'),
        reEditDriver: () => cy.get('.css-og3as7 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root'),
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
        //typeDepartureTime: () => cy.xpath('//*[@id=":r8:"]'),
        typeDepartureTime: () => cy.get('body > div:nth-child(11) > div.MuiBox-root.css-kgv6uk > div.MuiBox-root.css-1k7a714 > div.MuiFormControl-root.MuiFormControl-fullWidth.MuiTextField-root.css-lne5w1 > div'),
        cancelRegisDriverBtn: () => cy.get('.css-1k7a714 > .MuiBox-root > .MuiButton-outlined'),
        confitRegisDriverBtn: () => cy.get('.css-1k7a714 > .MuiBox-root > .MuiButton-contained'),

        //Container
        btnContainers: () => cy.get('[href="/containers"]'),
        typeFinger: () => cy.get('#scanner-input'),
        btnStartFingerId: () => cy.get('.MuiCardActions-root > .MuiButtonBase-root'),
        btnPlusContainers: () => cy.get('.css-zdpt2t > .MuiButtonBase-root'),
        typeScanContainers: () => cy.get('.css-3xkt66 > .MuiFormControl-root > .MuiInputBase-root > #scanner-input'),
        btnCancelAddContainer: () =>cy.get('.css-1tcrf2f > .MuiButton-outlined'),
        btnConfirmAddContainer: () =>cy.get('#accept-button'),
        seeLaber: () => cy.get('.MuiPaper-root > .MuiList-root > [tabindex="0"]'),
        closeContainer: () => cy.get('.MuiPaper-root > .MuiList-root > :nth-child(2)'),
        cancelCloseContainer: () => cy.get('.MuiBox-root > .MuiButton-outlined'),
        confirmCloseContainer: () => cy.get('#accept-button'),
        containerLongBtn: () => cy.get('#long-button'),
        containerLongBtn2: () => cy.get('#__next > main > div.MuiBox-root.css-z1l42k > div.MuiBox-root.css-b64ain > div.MuiBox-root.css-qog72m > div > div.MuiBox-root.css-1wkbtf3 > div:nth-child(2) > div.MuiBox-root.css-1k06pwf > div:nth-child(2)'), 
        containerLongBtn3: () => cy.get('#__next > main > div.MuiBox-root.css-z1l42k > div.MuiBox-root.css-b64ain > div.MuiBox-root.css-qog72m > div > div.MuiBox-root.css-1wkbtf3 > div:nth-child(3) > div.MuiBox-root.css-1k06pwf > div:nth-child(2)'),
        containerLongBtn4: () => cy.get('#__next > main > div.MuiBox-root.css-z1l42k > div.MuiBox-root.css-b64ain > div.MuiBox-root.css-qog72m > div > div.MuiBox-root.css-1wkbtf3 > div:nth-child(4) > div.MuiBox-root.css-1k06pwf > div:nth-child(2)'),
        containerLongBtn5: () => cy.get('#__next > main > div.MuiBox-root.css-z1l42k > div.MuiBox-root.css-b64ain > div.MuiBox-root.css-qog72m > div > div.MuiBox-root.css-1wkbtf3 > div:nth-child(5) > div.MuiBox-root.css-1k06pwf > div:nth-child(2)'),
        //Transfer package 
        transferPack: () => cy.get('.MuiPaper-root > .MuiList-root > :nth-child(3)'),
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
        cy.intercept('POST', 'https://induction-bff-dev-qndxoltwga-uc.a.run.app/api').as('Api')
        this.elements.hamburgerBtn().click();
        this.elements.btnCreateContainers().click();
        this.elements.btnContinueNoImp().click();
        this.elements.inputCreateContainer().type(`{selectAll}{backspace}${numContainer}`);
        this.elements.btnAcceptCreateCon().click();
        
        //cy.wait('@Api').its('data.createContainers.containers[0].id')
        cy.wait('@Api').then(response => {
            cy.log(response)
        })
        

        //cy.get('@Api').then(request => {  
            //var idScan = request.response.body.data.loginFinger.id 
        //cy.get('.css-3xkt66 > .MuiFormControl-root > .MuiInputBase-root > #scanner-input').type(`${idScan}`);
        //})
    }

    addContainer(fingerID,){
        cy.wait(2500);
        cy.intercept('POST', 'https://induction-bff-dev-qndxoltwga-uc.a.run.app/api').as('Api')
        this.elements.hamburgerBtn().click();
        this.elements.btnContainers().click();
        this.elements.typeFinger().type(`{selectAll}{backspace}${fingerID}`);
        this.elements.btnStartFingerId().click();
        this.elements.btnPlusContainers().click();
        //Suprim
        //cy.get('.css-3xkt66 > .MuiFormControl-root > .MuiInputBase-root > #scanner-input').type(`8f231a6b-67aa-44b2-89f0-1413898c3ecd`);

        //
        
        cy.wait('@Api').its('response.body.data.loginFinger.id') 
        cy.get('@Api').then(request => {  
            var idScan = request.response.body.data.loginFinger.id
        cy.get('.css-3xkt66 > .MuiFormControl-root > .MuiInputBase-root > #scanner-input').type(`${idScan}`);
        })
        

    
    }

    createAndAddContainer(numContainer,fingerID){
        

        cy.intercept('POST', 'https://induction-bff-dev-qndxoltwga-uc.a.run.app/api').as('IdContainer')
        this.elements.hamburgerBtn().click();
        this.elements.btnCreateContainers().click();
        this.elements.btnContinueNoImp().click();
        this.elements.inputCreateContainer().type(`{selectAll}{backspace}${numContainer}`);
        this.elements.btnAcceptCreateCon().click();
        cy.wait('@IdContainer')
            .its('response.body.data.createContainers.containers[0].id')
            .then(response => {cy.log(response)})  
        cy.get('@IdContainer').then(request =>{
            const idContainer = request.response.body.data.createContainers.containers[0].id

            this.elements.hamburgerBtn().click();
            this.elements.btnContainers().click();
            this.elements.typeFinger().type(`{selectAll}{backspace}${fingerID}`);
            this.elements.btnStartFingerId().click();
            this.elements.btnPlusContainers().click();
            this.elements.typeScanContainers().type(`${idContainer}`);
            this.elements.btnConfirmAddContainer().click();
            this.elements.closeBtn().click();


        })
    }

    
    createAndTranserContainer(numContainer,fingerID){

        cy.intercept('POST', 'https://induction-bff-dev-qndxoltwga-uc.a.run.app/api').as('IdContainer')
        this.elements.hamburgerBtn().click();
        this.elements.btnCreateContainers().click();
        this.elements.btnContinueNoImp().click();
        this.elements.inputCreateContainer().type(`{selectAll}{backspace}${numContainer}`);
        this.elements.btnAcceptCreateCon().click();
        cy.wait('@IdContainer')
            .its('response.body.data.createContainers.containers[0].id')
            .then(response => {cy.log(response)})  
        cy.get('@IdContainer').then(request =>{
            const idContainer = request.response.body.data.createContainers.containers[0].id

            this.elements.hamburgerBtn().click();
            this.elements.btnContainers().click();
            this.elements.typeFinger().type(`{selectAll}{backspace}${fingerID}`);
            this.elements.btnStartFingerId().click();
            this.elements.btnPlusContainers().click();
            this.elements.typeScanContainers().type(`${idContainer}`);
            this.elements.btnConfirmAddContainer().click();


        })
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
        this.elements.btnOpcionLineHaulTemp().click();
        this.elements.deletThisLineHaulTemp().click();
        this.elements.btnDeletTheLineHaul().click();
    }
    editLineHaulEmpty(newNameLineHaul){
        this.elements.hamburgerBtn().click();
        this.elements.btnLineHaul().click();
        this.elements.btnOpcionLineHaulTemp().click();
        this.elements.editThisLineHaul().click();
        this.elements.editNameLineHaul().type(`{selectAll}{backspace}${newNameLineHaul}`);
        this.elements.btnEditConfirm().click();

    }

    regisVehicle(driver,idVehicle,destination,destination2,depTime){
        this.elements.hamburgerBtn().click();
        this.elements.btnLineHaul().click();
        this.elements.btnRegistNewVehicle().click();
        this.elements.typeNewDriver().type(`{selectAll}{backspace}${driver}{enter}`);
        this.elements.driverId0().click();
        this.elements.typeIdVehicle().type(`{selectAll}{backspace}${idVehicle}`);
        this.elements.confirmRegDriver().click();
        this.elements.typeDest().type(`${destination}`);
        this.elements.locationOption0().click();
        this.elements.typeDest().type(`${destination2}{enter}`);
        this.elements.locationOption0().click();
        this.elements.typeDepartureTime().type('2023-04-10T17:30');
        //this.elements.typeDepartureTime().type(new Date().toISOString().slice(0, 10));
        this.elements.confitRegisDriverBtn().click();

        
    }
    reEditLineHaul(reEditName,reEditIdVehicle,reDest1,reEditDriver){
        this.elements.hamburgerBtn().click();
        this.elements.btnLineHaul().click();
        this.elements.btnOpcionLineHaulTemp().click();
        this.elements.reEditThisLineHaul().click();
        this.elements.editNameLineHaul().type(`{selectAll}{backspace}${reEditName}`);
        this.elements.reEditIdVehicle().type(`{selectAll}{backspace}${reEditIdVehicle}`);
        this.elements.reEditTypeDet().type(`{selectAll}{backspace}${reDest1}`);
        this.elements.reEditSelctFirtOption().click();
        this.elements.reEditDriver().type(`{selectAll}{backspace}${reEditDriver}{enter}`);
        this.elements.driverId0().click();
        this.elements.reEditEditBt().click();

    }

    cleanLineHaul(){
        this.elements.hamburgerBtn().click();
        this.elements.btnLineHaul().click();
        this.elements.btnOpcionLineHaulTemp().click();
        this.elements.cleanLineHaul().click();
        this.elements.confirmCleanBtn().click();
    }

    createAddTransferContainer(numContainer,TransferPack,fingerID,ordeID){

        cy.intercept('POST', 'https://induction-bff-dev-qndxoltwga-uc.a.run.app/api').as('IdContainer')
        this.elements.hamburgerBtn().click();
        this.elements.btnCreateContainers().click();
        this.elements.btnContinueNoImp().click();
        this.elements.inputCreateContainer().type(`{selectAll}{backspace}${numContainer}`);
        this.elements.btnAcceptCreateCon().click();
        cy.wait('@IdContainer')
            .its('response.body.data.createContainers.containers[0].id')
            .then(response => {cy.log(response)})  
        cy.get('@IdContainer').then(request =>{

            this.elements.hamburgerBtn().click();
            this.elements.btnContainers().click();
            this.elements.typeFinger().type(`{selectAll}{backspace}${fingerID}`);
            this.elements.btnStartFingerId().click();

            switch (TransferPack){

                case "NA":
                this.elements.btnPlusContainers().click();
                const idContainer = request.response.body.data.createContainers.containers[0].id
                this.elements.typeScanContainers().type(`${idContainer}`);
                this.elements.btnConfirmAddContainer().click();
                cy.wait(2500)
                this.elements.typeOrderID().type(`${ordeID}{enter}`);
                break;
                
                case "2":
                this.elements.btnPlusContainers().click();
                const idContainer_a0 = request.response.body.data.createContainers.containers[0].id
                this.elements.typeScanContainers().type(`${idContainer_a0}`);
                this.elements.btnConfirmAddContainer().click();


                this.elements.btnPlusContainers().click();
                var sustContainer = TransferPack-1
                const idContainer_a1 = request.response.body.data.createContainers.containers[sustContainer].id
                this.elements.typeScanContainers().type(`${idContainer_a1}`);
                this.elements.btnConfirmAddContainer().click();
                cy.wait(2500)
                this.elements.toggleBtnContainer2().click();

                cy.wait(2500)
                this.elements.typeOrderID().type(`${ordeID}{enter}`);

                //Transfer from container 2 to container 1
                // this.elements.wait1seg();
                // this.elements.containerLongBtn2().click();
                // this.elements.transferPack().click();
                // this.elements.typeIdContainer().type(`${idContainer_a0}`);
                // this.elements.confirmTransferPack().click();

                //this.elements.toggleBtnContainer2Act().click();

                //Transfer from container 1 to container 2
                this.elements.wait1seg();
                this.elements.containerLongBtn().click();
                this.elements.transferPack().click();
                this.elements.typeIdContainer().type(`${idContainer_a1}`);
                this.elements.confirmTransferPack().click();

                break;

                case "3":
                this.elements.btnPlusContainers().click();
                const idContainer_b0 = request.response.body.data.createContainers.containers[0].id
                this.elements.typeScanContainers().type(`${idContainer_b0}`);
                this.elements.btnConfirmAddContainer().click();

                this.elements.btnPlusContainers().click();
                const idContainer_b1 = request.response.body.data.createContainers.containers[1].id
                this.elements.typeScanContainers().type(`${idContainer_b1}`);
                this.elements.btnConfirmAddContainer().click();

                this.elements.btnPlusContainers().click();
                var sustContainer = TransferPack-1
                const idContainer_b2 = request.response.body.data.createContainers.containers[sustContainer].id
                this.elements.typeScanContainers().type(`${idContainer_b2}`);
                this.elements.btnConfirmAddContainer().click();

                cy.wait(2500)
                this.elements.typeOrderID().type(`${ordeID}{enter}`);

                this.elements.wait1seg();
                this.elements.containerLongBtn2().click();
                this.elements.transferPack().click();
                this.elements.typeIdContainer().type(`${idContainer_b0}`);
                this.elements.confirmTransferPack().click();

                this.elements.wait1seg();
                this.elements.containerLongBtn3().click();
                this.elements.transferPack().click();
                this.elements.typeIdContainer().type(`${idContainer_b1}`);
                this.elements.confirmTransferPack().click();
                break;


                case "4":
                this.elements.btnPlusContainers().click();
                const idContainer_c0 = request.response.body.data.createContainers.containers[0].id
                this.elements.typeScanContainers().type(`${idContainer_c0}`);
                this.elements.btnConfirmAddContainer().click();

                this.elements.btnPlusContainers().click();
                const idContainer_c1 = request.response.body.data.createContainers.containers[1].id
                this.elements.typeScanContainers().type(`${idContainer_c1}`);
                this.elements.btnConfirmAddContainer().click();

                this.elements.btnPlusContainers().click();
                const idContainer_c2 = request.response.body.data.createContainers.containers[2].id
                this.elements.typeScanContainers().type(`${idContainer_c2}`);
                this.elements.btnConfirmAddContainer().click();

                this.elements.btnPlusContainers().click();
                var sustContainer = TransferPack-1
                const idContainer_c3 = request.response.body.data.createContainers.containers[sustContainer].id
                this.elements.typeScanContainers().type(`${idContainer_c3}`);
                this.elements.btnConfirmAddContainer().click();

                cy.wait(2500)
                this.elements.typeOrderID().type(`${ordeID}{enter}`);

                this.elements.wait1seg();
                this.elements.containerLongBtn4().click();
                this.elements.transferPack().click();
                this.elements.typeIdContainer().type(`${idContainer_c2}`);
                this.elements.confirmTransferPack().click();

                this.elements.wait1seg();
                this.elements.containerLongBtn3().click();
                this.elements.transferPack().click();
                this.elements.typeIdContainer().type(`${idContainer_c1}`);
                this.elements.confirmTransferPack().click();

                this.elements.wait1seg();
                this.elements.containerLongBtn2().click();
                this.elements.transferPack().click();
                this.elements.typeIdContainer().type(`${idContainer_c2}`);
                this.elements.confirmTransferPack().click();
                break;

                case "5":
                this.elements.btnPlusContainers().click();
                const idContainer_d0 = request.response.body.data.createContainers.containers[0].id
                this.elements.typeScanContainers().type(`${idContainer_d0}`);
                this.elements.btnConfirmAddContainer().click();

                this.elements.btnPlusContainers().click();
                const idContainer_d1 = request.response.body.data.createContainers.containers[1].id
                this.elements.typeScanContainers().type(`${idContainer_d1}`);
                this.elements.btnConfirmAddContainer().click();

                this.elements.btnPlusContainers().click();
                const idContainer_d2 = request.response.body.data.createContainers.containers[2].id
                this.elements.typeScanContainers().type(`${idContainer_d2}`);
                this.elements.btnConfirmAddContainer().click();

                this.elements.btnPlusContainers().click();
                const idContainer_d3 = request.response.body.data.createContainers.containers[3].id
                this.elements.typeScanContainers().type(`${idContainer_d3}`);
                this.elements.btnConfirmAddContainer().click();

                this.elements.btnPlusContainers().click();
                var sustContainer = TransferPack-1
                const idContainer_d4 = request.response.body.data.createContainers.containers[sustContainer].id
                this.elements.typeScanContainers().type(`${idContainer_d4}`);
                this.elements.btnConfirmAddContainer().click();

                cy.wait(2500)
                this.elements.typeOrderID().type(`${ordeID}{enter}`);

                this.elements.wait1seg();
                this.elements.containerLongBtn().click();
                this.elements.transferPack().click();
                this.elements.typeIdContainer().type(`${idContainer_d1}`);
                this.elements.confirmTransferPack().click();

                this.elements.wait1seg();
                this.elements.containerLongBtn2().click();
                this.elements.transferPack().click();
                this.elements.typeIdContainer().type(`${idContainer_d2}`);
                this.elements.confirmTransferPack().click();

                this.elements.wait1seg();
                this.elements.containerLongBtn3().click();
                this.elements.transferPack().click();
                this.elements.typeIdContainer().type(`${idContainer_d3}`);
                this.elements.confirmTransferPack().click();

                this.elements.wait1seg();
                this.elements.containerLongBtn4().click();
                this.elements.transferPack().click();
                this.elements.typeIdContainer().type(`${idContainer_d4}`);
                this.elements.confirmTransferPack().click();
                break;
                

            
            }
            

        })
    }

    addOrder(secondOrderID){
    
        cy.wait(2500)
        this.elements.typeOrderID().type(`${secondOrderID}{enter}`); 
    }

    descContainer(){
        cy.wait(2500)
        this.elements.toggleBtnContainer().click();
    }

    actContainer(){
        cy.wait(2500)
        this.elements.toggleBtnContainerAct().click();
    }

    closeContainer(){
        this.elements.containerLongBtn().click();
        this.elements.closeContainer().click();
        this.elements.confirmCloseContainer().click();
    }


    assignContainerInLineHaul(numContainer,fingerID,ordeID,lineHaul,driver,idVehicle,destination,destination2,depTime){
        cy.intercept('POST', 'https://induction-bff-dev-qndxoltwga-uc.a.run.app/api').as('IdContainer')
        this.elements.hamburgerBtn().click();
        this.elements.btnCreateContainers().click();
        this.elements.btnContinueNoImp().click();
        this.elements.inputCreateContainer().type(`{selectAll}{backspace}${numContainer}`);
        this.elements.btnAcceptCreateCon().click();
        cy.wait('@IdContainer')
            .its('response.body.data.createContainers.containers[0].id')
            .then(response => {cy.log(response)})  
        cy.get('@IdContainer').then(request =>{

            this.elements.hamburgerBtn().click();
            this.elements.btnContainers().click();
            this.elements.typeFinger().type(`{selectAll}{backspace}${fingerID}`);
            this.elements.btnStartFingerId().click();

            this.elements.btnPlusContainers().click();
            const idContainer = request.response.body.data.createContainers.containers[0].id
            this.elements.typeScanContainers().type(`${idContainer}`);
            this.elements.btnConfirmAddContainer().click();
            cy.wait(2500)                
            this.elements.typeOrderID().type(`${ordeID}{enter}`);

            this.elements.hamburgerBtn().click();
            this.elements.btnLineHaul().click();
            this.elements.btnNewlineHaul().click();
            this.elements.typeNewLineHaul().type(`{selectAll}{backspace}${lineHaul}`);
            this.elements.addCreateLineHaul().click();

            this.elements.hamburgerBtn().click();
            this.elements.btnLineHaul().click();
            this.elements.btnRegistNewVehicle().click();
            this.elements.typeNewDriver().type(`{selectAll}{backspace}${driver}{enter}`);
            this.elements.driverId0().click();
            this.elements.typeIdVehicle().type(`{selectAll}{backspace}${idVehicle}`);
            this.elements.confirmRegDriver().click();
            this.elements.typeDest().type(`${destination}`);
            this.elements.locationOption0().click();
            this.elements.typeDest().type(`${destination2}{enter}`);
            this.elements.locationOption0().click();
            this.elements.typeDepartureTime().type('2023-04-13T17:30');
            this.elements.confitRegisDriverBtn().click();
            this.elements.scanContainerLineHaul().type(`${idContainer}{enter}`);
            this.elements.letOutLineHaul().click();

        })
    }




}
export default new WarehousePage();

