class BulkLoad {
    elements = {
        userNameMassiveLoad: () => cy.get('.MuiGrid2-container > :nth-child(2)'),
        passwordMassiveLoad: () => cy.get('.MuiGrid2-container > :nth-child(3)'),
        userName: () => cy.get('form > :nth-child(1) > input'),
        password: () => cy.get('form > :nth-child(2)'),
        btnMassiveLoadProd: () => cy.get('.Header_sectionThree__lyKa8 > .Header_headerBtnMassiveLoad__1toTX'),
        btnMassiveLoad: () => cy.get('.Header_sectionThree__lyKa8 > .Header_headerBtnMassiveLoad__1toTX'),
        closeBanner: () => cy.xpath('//*[@id=":r3:"]/button'),
        //doubt In Template
        doubtInTempaltes: () => cy.get('.MuiAccordionSummary-content > .css-1cwfeop'),
        requiredFields: () =>cy.get('.css-20ba0b > :nth-child(2) > .MuiButtonBase-root'),
        optionalFields: () =>cy.get('.css-20ba0b > :nth-child(3) > .MuiButtonBase-root'),
        //See And Examples
        seeAndExaplesButton: () => cy.get('.MuiAlert-action > .MuiButtonBase-root'),
        closeButtonExamples: () => cy.xpath('//*[@id=":r2:"]/button'),
        //Upload file 
        //cy.iframe().find('#myAwesomeDropzone')
        uploadfile: () => cy.iframe().xpath('//*[@id="myAwesomeDropzone"]'),
        prevButton: () => cy.iframe().xpath('//*[@id="direction-buttons"]/button[1]'),
        nextButton: () => cy.iframe().xpath('//*[@id="direction-buttons"]/button[2]'),
        closeButton: () => cy.iframe().xpath('//*[@id="mainModal"]/div/div/div[6]/div/div[3]/button'),
        //Column Mapping Table
        typeMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[1]/td[2]/div/select/option[2]'),
        sizeMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[2]/td[2]/div/select/option[3]'),
        nameMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[2]/td[2]/div/select/option[4]'),
        lastNameMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[2]/td[2]/div/select/option[5]'),
        emailMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[2]/td[2]/div/select/option[6]'),
        phoneMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[2]/td[2]/div/select/option[7]'),
        streetMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[2]/td[2]/div/select/option[8]'),
        numExtMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[2]/td[2]/div/select/option[9]'),
        numIntMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[2]/td[2]/div/select/option[10]'),
        cpMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[2]/td[2]/div/select/option[11]'),
        suburbMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[2]/td[2]/div/select/option[12]'),
        cityMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[2]/td[2]/div/select/option[14]'),
        townMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[15]'),
        name1MapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[16]'),
        lastname1MapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[17]'),
        email1MapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[18]'),
        phone1MapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[19]'),
        street1MapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[20]'),
        numExt1MapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[21]'),
        numInt1MapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[22]'),
        cp1MapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[23]'),
        suburb1MapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[24]'),
        state1MapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[25]'),
        city1MapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[26]'),
        town1MapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[27]'),
        refMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[28]'),
        notesMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[29]'),
        idMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[30]'),
        paymentMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[31]'),
        amountMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[32]'),
        sureMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[33]'),
        insureAmountMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[34]'),
        stateMapTable: () => cy.iframe().xpath('//*[@id="columnMappingTable"]/tbody/tr[11]/td[2]/div/select/option[13]'),

    
        //cy.iframe().find('#mainModal > div > div > div.modal-footer.bg-light.border-0.modal-footer-buttons > div > div.d-flex > button').should('be.visible').click()
        buttonUploadFile: () => cy.get('.css-0 > .MuiButtonBase-root'),
        basicTemplate: () => cy.get('.css-1q9zxj6 > :nth-child(1)'),
        templateExaples: () => cy.get('.css-1q9zxj6 > :nth-child(2)'),
        videoTutorial: () =>cy.get('.css-13uak9s > .MuiButtonBase-root'),
        //Frequent questions
        bulkuploadQuestions: () => cy.get('.css-1s74xq6 > :nth-child(1) > .MuiButtonBase-root'),
        baseTemplateQuestions: () => cy.get('.css-1s74xq6 > :nth-child(2) > .MuiButtonBase-root'),
        exampleTemplateQuestions: () => cy.get('.css-1s74xq6 > :nth-child(3) > .MuiButtonBase-root'),
        templateNameQuestions: () => cy.get('.css-1s74xq6 > :nth-child(4) > .MuiButtonBase-root'),
        icantuploadQuestions: () => cy.get('.css-1s74xq6 > :nth-child(5) > .MuiButtonBase-root'),
        containErrorsQuestions: () => cy.get('.css-1s74xq6 > :nth-child(6) > .MuiButtonBase-root'),
        progressAndHistoryQuestions: () => cy.get(':nth-child(7) > .MuiButtonBase-root'),
        printOrderQuestions: () => cy.get(':nth-child(8) > .MuiButtonBase-root'),
        //In Process
        inProcess: () => cy.get('#full-width-tab-0'),
        //Historry
        history: () => cy.get('#full-width-tab-1'),
        //select header row  
        secondRow: () => cy.iframe().xpath('//*[@id="selectHeaderTable"]/tbody/tr[2]/td[2]/input'),

        //In Proccess doc
        processDoc: () => cy.get('.css-1ifjntu > .MuiButton-contained'),
        proccesDocProd: () => cy.get('.css-1ksjws7 > .MuiButton-contained'),
        //Cancel doc
        cancelDoc: () => cy.xpath('//*[@id="5e29a9b3-ebbe-443f-8596-3578f52298f3"]/div[4]/button[1]'),
        backCancel: () => cy.get('.MuiDialogActions-root > .MuiButton-outlined'),
        acceptCancel: () => cy.get('.MuiDialogActions-root > .MuiButton-contained'),
        // Download Error in Doc
        errorDownloadDoc: () => cy.get('.MuiButton-outlinedError'),


    };


    massiveFront() {
        
        cy.visit('https://massive-front-git-feature-massiveloadv4-2-99minutos.vercel.app/');
        //cy.visit('https://auth.99minutos.com/');
        
        
    }
   

    login(user, pwd) {

        this.elements.userNameMassiveLoad().type(`${user}{enter}`);
        this.elements.passwordMassiveLoad().type(`${pwd}{enter}`);
        //this.elements.userName().type(`${user}{enter}`);
        //this.elements.password().type(`${pwd}{enter}`);
        //this.elements.btnMassiveLoad().click();
    }

    btnMassiveLoadProd(){
        this.elements.btnMassiveLoadProd().click();
    }
    skipBanner(){
        this.elements.closeBanner().click();
    }

    basicTemplateButton(){
        
        this.elements.basicTemplate().click();
        cy.wait(1500);     
    }
    templateExaplesButton(){
        
        this.elements.templateExaples().click();
        cy.wait(1500);     
    }
    templatevideoTutorial(){
        
        this.elements.videoTutorial().click();
        cy.wait(1500);
        this.elements.closeBanner().click();     
    }
    
    buttonUploadFile(){
        this.elements.buttonUploadFile().click();
    }

    upLoadfile(numOrders){
        
        this.elements.uploadfile().should('be.visible')
        .attachFile(numOrders, { subjectType: 'drag-n-drop' });
        //cy.iframe().find('#myAwesomeDropzone').should('be.visible')
        //.attachFile('CargaL02.xlsx', { subjectType: 'drag-n-drop' });
        
    }

    doubtInTemplate() {

        this.elements.doubtInTempaltes().click();
        this.elements.requiredFields().click();
        this.elements.optionalFields().click();
        
    }

    seeAndExamples(){

        this.elements.seeAndExaplesButton().click();
        cy.wait(2000);
        this.elements.closeButtonExamples().click();

    }

    inProcess(){

        this.elements.inProcess().click();
        cy.wait(2000);

    }
    history(){

        this.elements.history().click();
        cy.wait(2000);

    }
    Frequentquestions(){
        this.elements.bulkuploadQuestions().click();
        this.elements.baseTemplateQuestions().click();
        this.elements.exampleTemplateQuestions().click();
        this.elements.templateNameQuestions().click();
        this.elements.icantuploadQuestions().click();
        this.elements.containErrorsQuestions().click();
        this.elements.progressAndHistoryQuestions().click();
        this.elements.printOrderQuestions().click();
    }

    selectheaderrow(){
        this.elements.secondRow().should('be.visible').click();
    }

    itemCenterOption(){
        this.elements.nextButton().click();
    }

    columnMappingTable() {
        this.elements.typeMapTable().should('have.text', 'TIPO DE ENVIO');
        this.elements.sizeMapTable().should('have.text', 'TAMAÑO');
        this.elements.nameMapTable().should('have.text', 'NOMBRE');
        this.elements.lastNameMapTable().should('have.text', 'APELLIDOS');
        this.elements.emailMapTable().should('have.text', 'EMAIL');
        this.elements.phoneMapTable().should('have.text', 'TELEFONO');
        this.elements.streetMapTable().should('have.text', 'CALLE');
        this.elements.numExtMapTable().should('have.text', 'NUM. EXT');
        this.elements.numIntMapTable().should('have.text', 'NUM. INT');
        this.elements.cpMapTable().should('have.text', 'CODIGO POSTAL');
        this.elements.suburbMapTable().should('have.text', 'COLONIA');
        this.elements.stateMapTable().should('have.text', 'ESTADO');
        this.elements.cityMapTable().should('have.text', 'CIUDAD');
        this.elements.townMapTable().should('have.text', 'MUNICIPIO');
        this.elements.name1MapTable().should('have.text', 'NOMBRE.1');
        this.elements.lastname1MapTable().should('have.text', 'APELLIDOS.1');
        this.elements.email1MapTable().should('have.text', 'EMAIL.1');
        this.elements.phone1MapTable().should('have.text', 'TELEFONO.1');
        this.elements.street1MapTable().should('have.text', 'CALLE.1');
        this.elements.numExt1MapTable().should('have.text', 'NUM. EXT.1');
        this.elements.numInt1MapTable().should('have.text', 'NUM. INT.1');
        this.elements.cp1MapTable().should('have.text', 'CODIGO POSTAL.1');
        this.elements.suburb1MapTable().should('have.text', 'COLONIA.1');
        this.elements.state1MapTable().should('have.text', 'ESTADO.1');
        this.elements.city1MapTable().should('have.text', 'CIUDAD.1');
        this.elements.town1MapTable().should('have.text', 'MUNICIPIO.1');
        this.elements.refMapTable().should('have.text', 'REFERENCIAS');
        this.elements.notesMapTable().should('have.text', 'NOTAS');
        this.elements.idMapTable().should('have.text', 'ID INTERNO');
        this.elements.paymentMapTable().should('have.text', 'COBRO (COD)');
        this.elements.amountMapTable().should('have.text', 'CANTIDAD COD');
        this.elements.sureMapTable().should('have.text', 'SEGURO');
        this.elements.insureAmountMapTable().should('have.text', 'CANTIDAD SEG');

    }
    proccesDoc() {
        this.elements.proccesDoc().click();
    }
    proccesDocProd() {
        this.elements.proccesDocProd().click();
    }
    cancelDoc() {
        this.elements.cancelDoc().click();
        this.elements.acceptCancel().click();



    }


    //upLoadFile(nameFileBulkLoad) {
        //this.elements.dropZone().attachFile(nameFileBulkLoad, { subjectType: 'drag-n-drop' });
        
    //}
}
export default new BulkLoad();