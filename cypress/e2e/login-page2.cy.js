describe('TS01 - cek fitur login', () => {

    it('TCBerhasil login', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.app_logo').should('contain', 'Swag Labs');
    })
})
