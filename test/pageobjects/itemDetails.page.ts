import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ItemDetails extends Page {
    /**
     * define selectors using getter methods
     */
    public get addToCartBtn () {
        return $(`[name="Submit"]`);
    }
    public get selectSize () {
        return $(`#group_1`);
    }
    public get body() {
        return $('h2');
    }

    public async AddToCart(size:string, successfullyAddedProduct:string) {
        this.selectSize.selectByVisibleText(size);
        await this.addToCartBtn.click();
        await expect(this.body).toHaveText(successfullyAddedProduct);
    }
    
}

export default new ItemDetails();
