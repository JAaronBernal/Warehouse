class ShippingPage {
    elements = {
        //Home
        wait5seg: () => cy.wait(5000),
        wait1seg: () => cy.wait(1000),
        makeAShipment: () => cy.get('.Header_sectionThree__lyKa8 > .Header_headerBtnCreateOrder__16OKZ'),

        //shipping type
        sameDay: () => cy.get(':nth-child(1) > .styles_grid__Gq2El > :nth-child(1) > label > .styles_content__2hApq'),
        nextDay: () => cy.get(':nth-child(1) > .styles_grid__Gq2El > :nth-child(2) > label > .styles_content__2hApq'),
        minutos: () => cy.get(':nth-child(1) > .styles_grid__Gq2El > :nth-child(3) > label > .styles_content__2hApq'),
        cO2Free: () => cy.get(':nth-child(1) > .styles_grid__Gq2El > :nth-child(4) > label > .styles_content__2hApq'),
        retorno: () => cy.get(':nth-child(1) > .styles_grid__Gq2El > :nth-child(5) > label > .styles_content__2hApq'),

        //Recollect Data
        addLocationRecollect: () => cy.get(':nth-child(2) > :nth-child(2) > .geosuggest > .geosuggest__input-wrapper > #geosuggest__input'),
        selectResidentialRecollect: () => cy.get(':nth-child(2) > :nth-child(4) > :nth-child(2) > span'),
        selectComercialRecollect: () => cy.get(':nth-child(4) > .styles_marginFirstRadioBtn__12IVW > span'),
        typeReferenceRecollect: () => cy.get('#extraNotes'),

        //shipping weight
        lessThan1kg: () => cy.get(':nth-child(3) > .styles_grid__Gq2El > :nth-child(1) > label > .styles_content__2hApq'),
        from1to2kg: () => cy.get(':nth-child(3) > .styles_grid__Gq2El > :nth-child(2) > label > .styles_content__2hApq'),
        from2to3kg: () => cy.get(':nth-child(3) > .styles_grid__Gq2El > :nth-child(3) > label > .styles_content__2hApq'),
        from3to5kg: () => cy.get(':nth-child(3) > .styles_grid__Gq2El > :nth-child(4) > label > .styles_content__2hApq'),
        from5to25: () => cy.get(':nth-child(3) > .styles_grid__Gq2El > :nth-child(5) > label > .styles_content__2hApq'),

        //when we passed 
        shedule: () => cy.get('.css-tlfecz-indicatorContainer'),
        selectFirstOptionShedule: () => cy.get('#react-select-2-option-0'),
        selectSecondOptionShedule: () => cy.get('#react-select-2-option-1'),
        selectThirdOption: () => cy.get('#react-select-2-option-2'),
        selectFourthOption: () => cy.get('#react-select-2-option-3'),

        //data of the user who Recollects
        typeNameRecollectCol: () => cy.get(':nth-child(4) > .row > .col-xl-3 > .form-control > .form-control-input'),
        typeNameRecollect: () => cy.get(':nth-child(5) > .row > .col-xl-3 > .form-control > .form-control-input'),
        typePhoneRecollectCol: () => cy.get(':nth-child(4) > .row > .col-xl-4.mr-2 > div.form-control > .react-tel-input > .form-control'),
        typePhoneRecollect: () => cy.get(':nth-child(5) > .row > .col-xl-4.mr-2 > div.form-control > .react-tel-input > .form-control'),
        typeEmailRecollectCol: () => cy.get(':nth-child(4) > .row > :nth-child(3) > .form-control > .form-control-input'),
        typeEmailRecollect: () => cy.get(':nth-child(5) > .row > :nth-child(3) > .form-control > .form-control-input'),

        //data of the user who receives
        addLocationReceives: () => cy.get(':nth-child(1) > :nth-child(2) > .geosuggest > .geosuggest__input-wrapper > #geosuggest__input'),
        selectComercialReceives: () => cy.get(':nth-child(3) > .styles_marginFirstRadioBtn__12IVW > span'),
        selectResidentialReceives: () => cy.get(':nth-child(3) > :nth-child(2) > span'),
        typeNameReceives: () => cy.get(':nth-child(2) > .row > .col-xl-3 > .form-control > .form-control-input'),
        typePhoneReceives: () => cy.get(':nth-child(2) > .row > .col-xl-4.mr-2 > div.form-control > .react-tel-input > .form-control'),
        typeEmailReceives: () => cy.get(':nth-child(2) > .row > :nth-child(3) > .form-control > .form-control-input'),
        typeReferenceReceives: () => cy.get(':nth-child(3) > .mt-0 > .form-control-input'),

        //Aditional
        ensureShipping: () => cy.get(':nth-child(3) > :nth-child(2) > label > span'),
        cOD: () => cy.get(':nth-child(3) > :nth-child(3) > label > span'),
        btnCalculate: () => cy.get('.styles_sendBtn__1jlz3'),

        //Recap
        recap: () => cy.get(':nth-child(1) > .btn'),
        typeCoupon: () => cy.get('.styles_input_container__2TZND > [type="text"]'),
        clickCoupon: () => cy.get('.styles_input_container__2TZND > [type="submit"]'),
        cancellShipping: () => cy.get('.styles_mainActions__1hOy8 > :nth-child(1)'),
        confirm: () => cy.get('.styles_btnConfirmar__24pFp'),

        //confirmed package
        createANew: () => cy.get('.styles_actions__1_a3V > :nth-child(1)'),
        btnPrint: () => cy.get('.styles_print__3a590'),
        closeConfirmed: () => cy.get('.styles_btnClose__19WMs > img')
    };
    shippingType(shippingType) {
        switch (shippingType) {
            case "Next day":
                this.elements.wait5seg();
                this.elements.nextDay().click();
                break;
            case "Same day":
                this.elements.wait5seg();
                this.elements.sameDay().click();
                break;
            case "99minutos":
                this.elements.wait5seg();
                this.elements.minutos().click();
                break;
            case "CO2 Free":
                this.elements.wait5seg();
                this.elements.cO2Free().click();
                break;
            case "Retorno":
                this.elements.wait5seg();
                this.elements.retorno().click();
                break;
        }

    }
    recollectData(locationRecollect, typeOfHousing, reference) {
        this.elements.addLocationRecollect().type(`${locationRecollect}{downArrow}`);
        cy.wait(2000);
        cy.tab();
        

        switch (typeOfHousing) {
            case "Residencial":
                this.elements.selectResidentialRecollect().click();
                break;
            case "Comercial":
                this.elements.selectComercialRecollect().click();
                break;
        }

        this.elements.typeReferenceRecollect().type(`${reference}`);
    }
    
    shippingWeight(shippingWeight) {
        switch (shippingWeight) {
            case "Menos de 1 kg":
                this.elements.lessThan1kg().click();
                break;
            case "De 1 a 2 kg":
                this.elements.from1to2kg().click();
                break;
            case "De 2 a 3 kg":
                this.elements.from2to3kg().click();
                break;
            case "De 3 a 5 kg":
                this.elements.from3to5kg().click();
                break;
            case "De 5 a 25 kg":
                this.elements.from5to25().click();
                break;
        }

    }
    whenWePassed(schedule) {
        this.elements.shedule().click();

        switch (schedule) {
            case "Lo mas pronto posible":
                this.elements.selectFirstOptionShedule().dblclick();
                break;
            case "Hoy por la tarde":
                this.elements.selectSecondOptionShedule().dblclick();
                break;
            case "Manana por la manana":
                this.elements.selectThirdOption().dblclick();
                break;
            case "Manana por la tarde":
                this.elements.selectFourthOption().dblclick();
                break;

        }
    }
    userDataThatRecolelct(nameThatRecollect, phoneThatRecollect, emailThatRecollect) {
        this.elements.typeNameRecollect().type(`${nameThatRecollect}`);
        this.elements.typePhoneRecollect().type(`${phoneThatRecollect}`);
        this.elements.typeEmailRecollect().type(`${emailThatRecollect}`);
    }
    userDataThatReceives(locationReceives, typeOfHousingReceives, nameThatReceives, phoneThatReceives, emailThatReceives, referenceReceives) {
        this.elements.addLocationReceives().type(`${locationReceives}`);
        cy.wait(2000);
        cy.tab();
        switch(typeOfHousingReceives){
            case "Residencial":
                this.elements.selectResidentialReceives().click();
                break;
            case "Comercial":
                this.elements.selectComercialReceives().click();
                break;
        }
        
        this.elements.typeNameReceives().type(`${nameThatReceives}`);
        this.elements.typePhoneReceives().type(`${phoneThatReceives}`);
        this.elements.typeEmailReceives().type(`${emailThatReceives}`);
        this.elements.typeReferenceReceives().type(`${referenceReceives}`);
    }
    aditional() {
        this.elements.btnCalculate().click();
        this.elements.confirm().click();
    }
    confirmedPackage() {
        this.elements.wait1seg();
        this.elements.btnPrint().click();
    }

    userDataThatRecolelctCol(nameThatRecollect, phoneThatRecollect, emailThatRecollect) {
        this.elements.typeNameRecollectCol().type(`${nameThatRecollect}`);
        this.elements.typePhoneRecollectCol().type(`${phoneThatRecollect}`);
        this.elements.typeEmailRecollectCol().type(`${emailThatRecollect}`);
}
    userDataThatReceives(locationReceives, typeOfHousingReceives, nameThatReceives, phoneThatReceives, emailThatReceives, referenceReceives) {
        this.elements.addLocationReceives().type(`${locationReceives}`);
        cy.wait(2000);
        cy.tab();
        switch(typeOfHousingReceives){
            case "Residencial":
            this.elements.selectResidentialReceives().click();
            break;
         case "Comercial":
            this.elements.selectComercialReceives().click();
            break;
    }
    
        this.elements.typeNameReceives().type(`${nameThatReceives}`);
        this.elements.typePhoneReceives().type(`${phoneThatReceives}`);
        this.elements.typeEmailReceives().type(`${emailThatReceives}`);
        this.elements.typeReferenceReceives().type(`${referenceReceives}`);
}
    makeAShipment() {
    this.elements.makeAShipment().click();
}
}
export default new ShippingPage();