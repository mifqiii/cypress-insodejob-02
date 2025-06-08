import Dashbord from "../fixtures/Object Model/Dashbordpage";

const dashbord = new Dashbord();

describe('cek fungsi di navigasi', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

    it('cek navigasi menu', () => {
        dashbord.klikNavigasiMenu();
    })
})