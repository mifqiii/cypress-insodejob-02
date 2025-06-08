import loginPage from "../fixtures/Object Model/loginPage"

describe('TS01 - Halaman Login', () => {

    beforeEach(() => {
        // Mengakses halaman login sebelum setiap test case
        loginPage.visit()
    })

    after(() => {
        // Logout setelah test case berhasil login
        cy.url().then((url) => {
            if (url.includes('/inventory.html')) {
                loginPage.logout()
            }
        })
    })

    it('TC 01 - Berhasil Login dengan Kredensial Valid', () => {
        loginPage.login('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')
    })

    it('TC 02 - Gagal Login dengan Username dan Password Salah', () => {
        loginPage.login('username_salah', 'password_salah')
        loginPage.checkErrorMessage('Epic sadface: Username and password do not match any user in this service')
    })

    it('TC 03 - Gagal Login dengan Username Salah', () => {
        loginPage.login('username_salah', 'secret_sauce')
        loginPage.checkErrorMessage('Epic sadface: Username and password do not match any user in this service')
    })

    it('TC 04 - Gagal Login dengan Password Salah', () => {
        loginPage.login('standard_user', 'wrong_password')
        loginPage.checkErrorMessage('Epic sadface: Username and password do not match any user in this service')
    })

    it('TC 05 - Gagal Login dengan Kolom Password Kosong', () => {
        loginPage.usernameInput.type('standard_user')
        loginPage.loginButton.click()
        loginPage.checkErrorMessage('Epic sadface: Password is required')
    })
})