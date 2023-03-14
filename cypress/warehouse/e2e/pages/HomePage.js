class HomePage {
  elements = {
    wait5seg: () => cy.wait(5000),
    wait1seg: () => cy.wait(1000),

    welcome: () => cy.get('.welcome_textOne__2JqjA'),
    itemMenuMyReport: () => cy.get('.Sidebar_fonts__3e_qh'),
    makeAShipment: () => cy.get('.Header_sectionThree__lyKa8 > .Header_headerBtnCreateOrder__16OKZ'),
    bulkLoad: () => cy.get('.Header_sectionThree__lyKa8 > .Header_headerBtnMassiveLoad__1toTX'),
    ongoingOrders: () => cy.get('.Sidebar_sidebar__uaxp3 > :nth-child(1)'),
    bulkLoadDev: () => cy.get('.styles_headerBtn__35ruZ')

  }
  goToMyReport() {
    this.elements.itemMenuMyReport().contains('Mis Reportes').click();
  }
  makeAShipment() {
    this.elements.makeAShipment().click();
  }
  //Carga Masiva
  bulkLoad() {
    this.elements.bulkLoad().click();

  }
  bulkLoadDev() {
    //
    this.elements.makeAShipment().click();
    this.elements.bulkLoadDev().click();
  }
  //Cancel Everything orders
  cancelEverything() {
    this.elements.ongoingOrders().click();
  }
  isHomePageShowing() {
    this.elements.welcome().should("have.text", "¡Qué bueno verte por aquí!");
  }
}
export default new HomePage();