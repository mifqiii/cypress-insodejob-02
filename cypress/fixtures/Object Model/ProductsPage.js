class ProductsPage {
    // Elemen Header
    get tombolMenu() {
        return cy.get('#react-burger-menu-btn');
    }
    get logoSwager() {
        return cy.get('.app_logo');
    }
    get iconKranjang() {
        return cy.get('#shopping_cart_link');
    }
    
    // Elemen Menu
    get menuAllitem() {
        return cy.get('[data-test="inventory-sidebar-link"]');
    }
    get menuAboute() {
        return cy.get('[data-test="about-sidebar-link"]');
    }
    get menuLogout() {
        return cy.get('[data-test="logout-sidebar-link"]');
    }
    get menuResetApps() {
        return cy.get('[data-test="reset-sidebar-link"]');
    }

    //Products Filter
    get iconSortProduct() {
        return cy.get('[data-test="product-sort-container"]');
    }
    
    //Products List
    get productBackpack() {
        return cy.get('#item_4_title_link');
    }
    get productBikeLight() {
        return cy.get('#item_0_title_link');
    }
    get productTShirtBlack() {
        return cy.get('#item_1_title_link');
    }
    get productFleeceJacket() {
        return cy.get('#item_5_title_link');
    }
    get productOnesie() {
        return cy.get('#item_2_title_link');
    }
    get productTShirtRed() {
        return cy.get('#item_3_title_link');
    }

    //Products List
    get judulmenuProduct() {
        return cy.get('')
    }
    get productBackpack() {
        return cy.get('#item_4_title_link');
    }
    get productBikeLight() {
        return cy.get('#item_0_title_link');
    }
    get productTShirtBlack() {
        return cy.get('#item_1_title_link');
    }
    get productFleeceJacket() {
        return cy.get('#item_5_title_link');
    }
    get productOnesie() {
        return cy.get('#item_2_title_link');
    }
    get productTShirtRed() {
        return cy.get('#item_3_title_link');
    }

    //Social Media
    get iconTwitter() {
        return cy.get('[data-test="social-twitter"]');
    }
    get iconFacebook() {
        return cy.get('[data-test="social-facebook"]');
    }
    get iconLinkedin() {
        return cy.get('[data-test="social-linkedin"]');
    }
    
    // Actions
    KlickIconMenu() {
        cy.visit('https://www.saucedemo.com/')
    }
    KlikMenuAllitem() {
        this.menuAllitem.click()
    }
    KlikMenuAboute() {
        this.menuAboute.click()
    }
    KlikMenuLogout() {
        this.menuLogout.click()
    }
    KlikMenuResetApps() {
        this.menuResetApps.click()
    }
    
}

export default new ProductsPage();
