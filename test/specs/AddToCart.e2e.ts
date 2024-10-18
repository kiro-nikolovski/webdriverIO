import LoginPage from '../pageobjects/login.page.ts'
import Header from '../pageobjects/header.ts'
import itemsList from '../pageobjects/itemsList.ts'
import itemDetails from '../pageobjects/itemDetails.page.ts'

describe('Add to Cart', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await Header.btnSignIn.click()
        await LoginPage.login(process.env.USER_NAME!, process.env.PASSWORD!)
        await Header.verifyStringInUserInfo('Kiro Nikolovski');
    })
    it('should add item to cart', async () => {
        await Header.searchForItem('Printed Chiffon Dress');
        await itemsList.selectItem('Printed Chiffon Dress');
        await itemDetails.AddToCart("M", "Product successfully added to your shopping cart");        
    })
})

