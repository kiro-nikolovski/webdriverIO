import LoginPage from '../pageobjects/login.page.ts'
import Header from '../pageobjects/header.ts'
import itemsList from '../pageobjects/itemsList.ts'

describe('Search for item', () => {
    it('Navigate to website', async () => {
        await LoginPage.open();
     })
    it('Search for item', async () => {
        await Header.searchForItem('Printed Chiffon Dress');
        await itemsList.selectItem('Printed Chiffon Dress');
    })
})

