describe('TS01 - cek fitur login', () => {

    it('TC - 01 Berhasil login', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('fiqri jelek')
    })
})
