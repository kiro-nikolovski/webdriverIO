import { browser } from '@wdio/globals'
import Page from './page'


class Header extends Page {
    /**
     * define selectors using getter methods
     */
    public get btnSignIn () {
        return $('.login');
    }
    public get UserInfo() {
        return $(`a[title="View my customer account"] span`);
    }

    public get SearchItem() {
        return $('#search_query_top');

    }

    public async verifyStringInUserInfo(userName: string) {
        await expect(this.UserInfo).toHaveText(userName);
    }

    public async searchForItem(item: string) {
        await this.SearchItem.setValue(item);
        await browser.keys('Enter');
    }
}



export default new Header();

