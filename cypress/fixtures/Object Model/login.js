class LoginPage {
  // Selector input username
  getUsernameInput() {
    return cy.get('#user-name');
  }

  // Selector input password
  getPasswordInput() {
    return cy.get('#password');
  }

  // Selector tombol login
  getLoginButton() {
    return cy.get('#login-button');
  }

  // Selector pesan error login
  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }

  // Method untuk melakukan login
  login(username, password) {
    this.getUsernameInput().type(username);
    this.getPasswordInput().type(password);
    this.getLoginButton().click();
  }
}

export default new LoginPage();
