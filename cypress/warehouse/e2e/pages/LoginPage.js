class LoginPage {
    elements = {
        userName: () => cy.get('form > :nth-child(1) > input'),
        password: () => cy.get(':nth-child(2) > input')
    };
    openWebPage(organization) {
        switch(organization) {
            case "Prod":
                cy.visit('https://auth.99minutos.com/');
                break;
            case "Sandbox":
                cy.visit('https://delivery-git-sandbox-99minutos.vercel.app/');
                break;

            case "Massive Load Sandbox":
                //cy.visit('https://login-git-sandbox-99minutos.vercel.app/'
                cy.visit('https://massive-front-git-feature-massiveloadv4-2-99minutos.vercel.app/');
                break;

            case "Massive Load Prod":
                cy.visit('https://cargamasiva.99minutos.com/home');
                break;
        }
        //cy.visit('https://login-git-develop-99minutos.vercel.app/')
    }

    login(user, pwd) {
        this.elements.userName().type(`${user}{enter}`);
        this.elements.password().type(`${pwd}{enter}`);
    }
}
export default new LoginPage();

