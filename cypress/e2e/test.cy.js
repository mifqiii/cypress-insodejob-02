describe('CrazyPool Homepage', () => {
  it('masuk ke Home', () => {
    cy.visit('https://www.crazypool.nl/');
    cy.get('.elementor-element-cf53cff > .elementor-widget-container > .elementor-heading-title');
  });

  it('harus pindah halaman saat klik BECOME A PARTNER TODAY!', () => {
    cy.visit('https://www.crazypool.nl/');
    cy.get('.elementor-element-1a96c58 > .elementor-widget-container > .elementor-button-wrapper .elementor-button')
      .should('be.visible').click();
    cy.url().should('include', '/entrepreneur/');
  });

  it('harus pindah halaman saat klik FIND LOCATION', () => {
    cy.visit('https://www.crazypool.nl/');
    cy.get('.elementor-element-8594047 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button')
      .should('be.visible').click();
    cy.url().should('include', '/locations/');
  });
});