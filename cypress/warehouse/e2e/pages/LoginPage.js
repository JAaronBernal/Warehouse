class LoginPage {
    elements = {
        userName: () => cy.get('form > :nth-child(1) > input'),
        password: () => cy.get(':nth-child(2) > input')
    };
    openWebPage(environment) {
        switch(environment) {
            case "Prod":
                cy.visit('https://auth.99minutos.com/');
                break;
            case "Test":
                cy.visit('https://delivery-git-sandbox-99minutos.vercel.app/');
                break;

            case "Massive Load Sandbox":
                //cy.visit('https://login-git-sandbox-99minutos.vercel.app/'
                cy.visit('https://massive-front-git-feature-massiveloadv4-2-99minutos.vercel.app/');
                break;
    
            case "Massive Load Prod":
                cy.visit('https://cargamasiva.99minutos.com/home');
                break;

            case "Micro":
                cy.visit('https://login.microsoftonline.com')
                break;

        }
        //cy.visit('https://login-git-develop-99minutos.vercel.app/')
    }

    login(user, pwd) {
        this.elements.userName().type(`${user}{enter}`);
        this.elements.password().type(`${pwd}{enter}`);
    }
    micrp(){

    }
}
export default new LoginPage();

