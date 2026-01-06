class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginLink = page.locator('#login2');
        this.usernameInput = page.locator("input[id='loginusername']");
        this.passwordInput = page.locator("input[id='loginpassword']");
        this.loginButton = page.locator("//button[normalize-space()='Log in']");
    }

    async gottoLoginPage() {
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async login(username, password) {
        await this.loginLink.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}

export { LoginPage };