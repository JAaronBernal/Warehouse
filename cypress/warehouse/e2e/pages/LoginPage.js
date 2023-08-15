class LoginPage {
    elements = {
        userName: () => cy.get('form > :nth-child(1) > input'),
        password: () => cy.get(':nth-child(2) > input'),
        userEmailUat: () => cy.get('#i0116'),
        userPwdUat: () => cy.get('#i0118'),
    };
    openWebPage(organization) {
        switch(organization) {
            case "Prod":
                cy.visit('https://auth.99minutos.com/');
                break;
            case "SelfSandbox":
                cy.visit('https://selfsandbox.99minutos.com/');
                break;
            case "Sandbox":
                cy.visit('https://delivery-git-sandbox-99minutos.vercel.app/');
                break;

            case "UAT":
                cy.visit('https://warehouse-management-frontend-uat.vercel.app/');
                cy.wait(2500);
                //this.elements.userEmailUat().should('be.visible').type(`qa@99minutos.com{enter}`);
                //this.elements.userPwdUat().should('be.visible').type(`Logistics.99m{enter}`);

                // Login to your AAD tenant.
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

                //cy.visit('https://warehouse-management-frontend-uat.vercel.app/');


        }
    }

    login(user, pwd) {
        this.elements.userName().type(`${user}{enter}`);
        this.elements.password().type(`${pwd}{enter}`);
    }
    home(){
        cy.wait(3500);
    }
}
export default new LoginPage();

