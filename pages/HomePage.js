class HomePage {
    constructor(page) {
        this.page = page;
        this.productImages = page.locator("//div[@id='tbodyid']//img");
        this.addToCartButton = page.locator("//a[normalize-space()='Add to cart']");
        this.cart = page.locator("#cartur");
    }
    async getProductCount() {
        return await this.productImages.count();
    }

    productNameLocator(productName) {
        return this.page.locator(`//div[@id='tbodyid']//a[normalize-space()='${productName}']`);
    }

    async addProductToCart(productName) {
        const product = this.productNameLocator(productName);
        await product.click();

        await this.page.on('dialog', async dialog => {
        console.log("hook test alert message :   " + dialog.message());
        expect(dialog.message()).toContain('Product added');
        await dialog.accept();
        });
        
         await this.addToCartButton.click();
    }

    async goToCart() {
        await this.cart.click();
    }



}

export { HomePage };