class LoginPage {
    elements = {
        userName: () => cy.get('form > :nth-child(1) > input'),
        password: () => cy.get(':nth-child(2) > input')
    };
    openWebPage(enviroment) {
        switch(enviroment) {
            case "Prod":
                cy.visit('https://selfsandbox.99minutos.com/');
                break;
            case "SelfSandbox":
                cy.visit('https://selfsandbox.99minutos.com/');
                break;
        }
    }

    login(user, pwd) {
        this.elements.userName().type(`${user}{enter}`);
        this.elements.password().type(`${pwd}{enter}`);
    }
}
export default new LoginPage();

