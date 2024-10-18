import LoginPage from '../pageobjects/login.page.ts'
import Header from '../pageobjects/header.ts'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await Header.btnSignIn.click()
        await LoginPage.login(process.env.USER_NAME!, process.env.PASSWORD!)
        await Header.verifyStringInUserInfo('Kiro Nikolovski');
    })
})

