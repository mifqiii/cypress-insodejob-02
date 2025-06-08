class LoginPage2 {
  fldUsername = '#user-name';
  fldPassword = '#password';
  btnLogin = '#login-button';
  errMsgContainer = '.error-message-container';

  // Method untuk melakukan login
  login(username, password) {
    cy.get(this.fldUsername).clear().type(username);
    cy.get(this.fldPassword).clear().type(password);
    cy.get(this.btnLogin).click();
  }

  // Method untuk mendapatkan pesan error
  getErrorMessage() {
    return cy.get(this.errMsgContainer);
  }
}

export default new LoginPage();