class Dashbord {
    //Object Navigasi menu
    iconMenu = '#react-burger-menu-btn'
    navigasiAllItem = '[data-test="inventory-sidebar-link"]'
    navigasiAbout = '[data-test="about-sidebar-link"]'

    // Aksi Klik di navigasi Menu
    klikNavigasiMenu() {
        cy.get(this.iconMenu).click();
        cy.get(this.navigasiAbout).click();
    }
}
export default Dashbord;