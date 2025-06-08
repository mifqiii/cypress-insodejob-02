class ProductsPage {
    // ==================== Selektor Elemen ====================
    // Elemen Header
    get tombolMenu() {
        return cy.get('#react-burger-menu-btn');
    }

    get keranjangBelanja() {
        return cy.get('.shopping_cart_link');
    }

    get judul() {
        return cy.get('[data-test="title"]');
    }

    // Elemen Inventaris
    get inventoryContainer() {
        return cy.get('[data-test="inventory-container"]');
    }

    get inventoryItems() {
        return cy.get('[data-test="inventory-list"] .inventory_item');
    }

    // Elemen Item Produk
    getProductItem(itemIndex) {
        return cy.get(`[data-test="inventory-item"]:nth-child(${itemIndex})`);
    }

    getProductName(itemIndex) {
        return this.getProductItem(itemIndex).find('[data-test="inventory-item-name"]');
    }

    getProductDescription(itemIndex) {
        return this.getProductItem(itemIndex).find('[data-test="inventory-item-desc"]');
    }

    getProductPrice(itemIndex) {
        return this.getProductItem(itemIndex).find('[data-test="inventory-item-price"]');
    }

    getAddToCartButton(itemIndex) {
        return this.getProductItem(itemIndex).find('[data-test^="add-to-cart-"]');
    }

    // Elemen Footer
    get footer() {
        return cy.get('[data-test="footer"]');
    }

    get twitterLink() {
        return this.footer.find('[data-test="social-twitter"]');
    }

    get facebookLink() {
        return this.footer.find('[data-test="social-facebook"]');
    }

    get linkedinLink() {
        return this.footer.find('[data-test="social-linkedin"]');
    }

    // ==================== Metode Aksi ====================
    // Metode untuk menambahkan item ke keranjang
    addItemToCart(itemIndex) {
        this.getAddToCartButton(itemIndex).click();
    }

    // Metode untuk membuka keranjang belanja
    openCart() {
        this.keranjangBelanja.click();
    }

    // Metode untuk logout
    logout() {
        this.tombolMenu.click();
        cy.get('#logout_sidebar_link').click();
    }

    // Metode untuk mereset status aplikasi
    resetAppState() {
        this.tombolMenu.click();
        cy.get('#reset_sidebar_link').click();
    }
}

export default new ProductsPage();
