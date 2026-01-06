class cartPage {
    constructor(page) {
        this.page = page;
        this.cartTable = page.locator('//tbody/tr/td[2]');
    }
    async getCartItemsCount() {
        return await this.cartTable.count();
    }

    //need a method to check added product available in ths page
    async isProductInCart(productName) {
        for (let i = 0; i < await this.getCartItemsCount(); i++) {
            const name = await this.cartTable.nth(i).innerText();
            if (name === productName) {
                return true;
                break;
            }
        }
        return false;
    }
}

export { cartPage };