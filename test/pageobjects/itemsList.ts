import Page from './page'


class ItemsList extends Page {
    /**
 * sub page containing specific selectors and methods for a specific page
     */
    public get itemDesc() {
        return $(`.product-name`);
    }

    public async selectItem(item: string) {
        //await this.itemDesc.toHa
        expect(this.itemDesc).toHaveText(item)
        await $(`a[title="${item}"]`).click();
       
    }
}



export default new ItemsList();

