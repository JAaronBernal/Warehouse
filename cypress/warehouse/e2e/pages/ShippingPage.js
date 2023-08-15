//var textList = [];
class ShippingPage {
    elements = {    
        shippingBtn: () => cy.xpath('//*[@id="__next"]/header/div/div[2]/div[1]/button'),
        sourceShippingBtn: () => cy.iframe().xpath('//*[@id="geosuggest__input--origen"]'),
        inputSelector_origen:() => cy.wrap($body).find(inputSelector_origen),
        onGoingBtn: () => cy.get('.Sidebar_sidebar__uaxp3 > :nth-child(3) > :nth-child(3)'),
        firtsInList: () => cy.get(':nth-child(2) > :nth-child(2) > .desktop_emphasis__1WIl2'),
        numOrder: () => cy.get('.row > :nth-child(1) > :nth-child(4)'),


    };
    recolecction(recolecction) {
      this.elements.shippingBtn().should('be.visible').click();
      cy.wait(5500)
      //Se obtinee el ID del Iframe
      cy.get('iframe#iframe3Clics').then(($iframe) => {
        //se usara el body contenido en el iframe
        const $body = $iframe.contents().find('body')
        //elementos a utilizar
        //const inputSelector_origen = '#geosuggest__input--origen';
        const inputXpath_origen = '//*[@id="geosuggest__input--origen"]';
        // Acciones dentro del iframe con comandos Cypress
        //cy.wrap($body).find(inputSelector_origen).type(`{selectAll}{backspace}${recolecction}{enter}`)
        cy.wrap($body).xpath(inputXpath_origen).type(`{selectAll}{backspace}${recolecction}{enter}`)
        cy.get('body').tab()
      })
    }

    typerecolecction(typerecolecction, referenceRecolecction, referenceDelivery, delivery){
      cy.get('iframe#iframe3Clics').then(($iframe) => {
        const $body = $iframe.contents().find('body')
        //Elementos
        //Direccion
        const btnRecolectAddress = '#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-5k87ay > div > div > div.MuiBox-root.css-0 > button:nth-child(2)';
        const btnConfirmAddress = '#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-1gupbgy > div > div > button';
        const referenceAddress = '#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-5k87ay > div > div > div.MuiBox-root.css-0 > div > div';
        //Punto99
        const btnPunto99 = '#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-5k87ay > div > div > div.MuiBox-root.css-0 > button:nth-child(3)';
        const btnConfirmP99 = '#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-1gupbgy > div > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-13tcd19';
        const inputSelector_entrega = '#geosuggest__input--entrega';
        const btnConfirm ='#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-1gupbgy > div > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-13tcd19';
        const btnBack ='#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-1gupbgy > div > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.css-xvhkhh';
        const btnConfirmDel ='#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-1gupbgy > div > div > button';
          
        switch (typerecolecction) {
          case "Direccion":
            cy.wrap($body).find(btnRecolectAddress).should('be.visible').click();
            cy.get('body').tab()
            cy.wrap($body).find(btnConfirmAddress).should('be.visible').click();
            cy.wrap($body).find(referenceAddress).type(`${referenceRecolecction}`)
            cy.wrap($body).find(btnConfirm).should('be.visible').click();
            cy.wrap($body).find(inputSelector_entrega).type(`${delivery}{enter}`)
            cy.get('body').tab()
            cy.wrap($body).find(btnConfirmDel).should('be.visible').click();
            cy.wrap($body).find(referenceAddress).type(`${referenceDelivery}`)
            cy.wrap($body).find(btnConfirm).should('be.visible').click();
              break;

          case "Punto99":
            cy.wait(2000);
            cy.wrap($body).find(btnPunto99).should('be.visible').click();
            cy.get('body').tab()
            cy.wait(2000);
            cy.wrap($body).find(btnConfirmP99).should('be.visible').click();
            cy.wrap($body).find(inputSelector_entrega).type(`${delivery}{enter}`)
            cy.get('body').tab()
            cy.wrap($body).find(btnConfirmAddress).should('be.visible').click();
            cy.wrap($body).find(referenceAddress).type(`${referenceDelivery}`)
            cy.wrap($body).find(btnConfirm).should('be.visible').click();
              break;
          }
      })
    }

    packageSize(packageSize) {
      cy.get('iframe#iframe3Clics').then(($iframe) => {
        const $body = $iframe.contents().find('body')
        //elementos
        const sizeXs = '#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-5k87ay > div.MuiBox-root.css-1mi3tt8 > div > div.MuiToggleButtonGroup-root.css-1bhs3ls > button:nth-child(1)';
        const sizeS = '#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-5k87ay > div.MuiBox-root.css-1mi3tt8 > div > div.MuiToggleButtonGroup-root.css-1bhs3ls > button:nth-child(2)';
        const sizeM = '#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-5k87ay > div.MuiBox-root.css-1mi3tt8 > div > div.MuiToggleButtonGroup-root.css-1bhs3ls > button:nth-child(3)';
        const sizeL = '#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-5k87ay > div.MuiBox-root.css-1mi3tt8 > div > div.MuiToggleButtonGroup-root.css-1bhs3ls > button:nth-child(4)';
        const sizeXl = '#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-5k87ay > div.MuiBox-root.css-1mi3tt8 > div > div.MuiToggleButtonGroup-root.css-1bhs3ls > button:nth-child(5)';

        switch (packageSize) {
          case "Xs":
            cy.wrap($body).find(sizeXs).should('be.visible').click();
              break;

          case "S":
            cy.wrap($body).find(sizeS).should('be.visible').click();
              break;

          case "M":
            cy.wrap($body).find(sizeM).should('be.visible').click();
              break;

          case "L":
            cy.wrap($body).find(sizeL).should('be.visible').click();
              break;

          case "Xl":
            cy.wrap($body).find(sizeXl).should('be.visible').click();
              break;
        }
      })
    }

    shipmentType(shipmentType) {
      cy.get('iframe#iframe3Clics').then(($iframe) => {
        const $body = $iframe.contents().find('body')
        //elementos
        const sameDay = '//button[@value="Same Day"]';
        const nextDay = '//button[@value="Next Day"]';
        const retorno = '//button[@value="Retorno"]';
        const btnConfirmType = '#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-146wleg > div > div.MuiBox-root.css-vn7rjn > button';
        
        switch (shipmentType) {
          case "Same Day":
            cy.wrap($body).xpath(sameDay).should('be.visible').click();
            cy.wrap($body).find(btnConfirmType).should('be.visible').click();
              break;

          case "Next Day":
            cy.wrap($body).xpath(nextDay).should('be.visible').click();
            cy.wrap($body).find(btnConfirmType).should('be.visible').click();
              break;

          case "Retorno":
            cy.wrap($body).xpath(retorno).should('be.visible').click();
            cy.wrap($body).find(btnConfirmType).should('be.visible').click();
              break;
        }
      })
    }

    receiver(nameReceiver, phoneNumber, email){
      cy.get('iframe#iframe3Clics').then(($iframe) => {
        const $body = $iframe.contents().find('body')
        //elementos a utilizar
        const inputXpathNameReceiver = '//input[@name="completeName"]';  
        const inputXpathPhoneNumber = '//input[@name="phone"]';
        const inputXpathEmail = '//input[@name="email"]';
        // Acciones dentro del iframe con comandos Cypress //button[@value="Same Day"]
        cy.wrap($body).xpath(inputXpathNameReceiver).type(`${nameReceiver}{enter}`)

        //cy.wrap($body).find(inputPhoneNumber).type(`${phoneNumber}{enter}`)
        cy.wrap($body).xpath(inputXpathPhoneNumber).type(`${phoneNumber}{enter}`)

        cy.wrap($body).xpath(inputXpathEmail).type(`${email}{enter}`)
        
      })
    }

    cod(cod, codValue) {
      cy.get('iframe#iframe3Clics').then(($iframe) => {
        const $body = $iframe.contents().find('body')
        //elementos
        const checkboxCod = '/html/body/div/div[2]/div[1]/div/div[2]/div[2]/label/span[2]';
        const inputXpathCodValue = '//input[@placeholder="Ingresa un monto"]';
        const btnConfirmCod = '#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-146wleg > div > div.MuiBox-root.css-vn7rjn > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-13tcd19';
        const btnContinue = '//*[@id="root"]/div[2]/div[1]/div/div[3]/div/div[2]/button[2]';
        
        switch (cod) {
          case "si":
            cy.wrap($body).xpath(checkboxCod).scrollIntoView().should('be.visible').click();
            cy.wrap($body).xpath(inputXpathCodValue).type(`${codValue}{enter}`)
            cy.wrap($body).xpath(btnContinue).should('be.visible').click();
              break;

          case "no":
            cy.wrap($body).xpath(btnContinue).should('be.visible').click();
              break;

        }
      })
    }

    additionalServices(ecoGuia, assurance, valueAssurence) {
      cy.get('iframe#iframe3Clics').then(($iframe) => {
        const $body = $iframe.contents().find('body')
      
        const checkBoxEcoGuía = '//*[@id="root"]/div[2]/div[1]/div/div[2]/div/div[2]/label/span[2]/p';
        const checkEnsureShipment = '//*[@id="root"]/div[2]/div[1]/div/div[2]/div[1]/div[3]/label/span[2]/p';
        const inputAssurence = '//input[@name="assurance"]';
        const btnContinue = '//*[@id="root"]/div[2]/div[1]/div/div[3]/div/div[2]/button[2]';
        const btnMakeShipment = '#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-146wleg > div > div.MuiBox-root.css-vn7rjn > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.css-13tcd19';
        const btnFinish ='#root > div.MuiBox-root.css-1591o9s > div.MuiBox-root.css-1gfn3zq > div > div.MuiBox-root.css-1gupbgy > div > div > button'
        const checkboxConfirm= '//*[@id="root"]/div[2]/div[1]/div/div[2]/div/label/span[2]/p'; 
        

        switch (assurance) {
          case "si":
            cy.wrap($body).xpath(checkEnsureShipment).should('be.visible').click();
            cy.wrap($body).xpath(inputAssurence).type(`${valueAssurence}{enter}`)
            cy.wait(2500);
            
              break;

          case "no":
            cy.wait(2500);
              break;
        }
        switch (ecoGuia) {
          case "si":
            cy.wait(2500);
            cy.wrap($body).xpath(checkBoxEcoGuía).should('be.visible').click();
            cy.wrap($body).xpath(btnContinue).should('be.visible').click();
            cy.wait(2500);
            cy.wrap($body).find(btnMakeShipment).should('be.visible').click();
            cy.wrap($body).xpath(checkboxConfirm).scrollIntoView().should('be.visible').click();
            cy.wrap($body).find(btnFinish).should('be.visible').click();
              break;

          case "no":
            
            cy.wrap($body).xpath(btnContinue).should('be.visible').click();
            cy.wait(2500);
            cy.wrap($body).find(btnMakeShipment).should('be.visible').click();
            //cy.wrap($body).xpath(checkboxConfirm).scrollIntoView().should('be.visible').click();
            cy.wrap($body).find(btnFinish).should('be.visible').click();
              break;
        }
      })
    }
    ongoing(){
      
      this.elements.onGoingBtn().should('be.visible').click();
      this.elements.firtsInList().should('be.visible').click();
      this.elements.numOrder().invoke('text').then((order) => {
        const orderNum = parseFloat(order);
        cy.log('El numero de Orden es: ', orderNum);
        //Prueba de numero de orden a utilizar
        cy.wait(1000);
        cy.get('.styles_btnClose__19WMs > img').should('be.visible').click();
        cy.get('.Orders_formInput__1cX0i').type(`${orderNum}`);
        cy.writeFile('cypress/fixtures/orderNum.json', { orderNum });
      });   
    }
}
//export { textList };
export default new ShippingPage();


