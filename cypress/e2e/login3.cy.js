import LoginPage from '../support/pageObjects/LoginPage';

const LoginPage = new LoginPage2();

describe('E2E Login Tests - Sauce Demo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('should login successfully with valid credentials', () => {
    LoginPage.login('standard_user', 'secret_sauce');
    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('be.visible');
  });

  it('should show error message with invalid credentials', () => {
    LoginPage.login('invalid_user', 'wrong_password');
    LoginPage.getErrorMessage()
      .should('be.visible')
      .and('not.be.empty');
  });
});