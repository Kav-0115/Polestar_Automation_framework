import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
   /**
   * define selectors using getter methods
   */
    public get pageTitle () {
        return $('//h1[@class="css-hn32rj"]');
    }

    public get usRegion () {
        return $('//li[@class="css-6chp9i"]/a[@href="/us/"]');
    }

    /**
     * method to verify user is in home page
     */
    public async verifyPolestarHomePage () {
        await this.waitTillDisplayed(await this.pageTitle, "Select your region");
        await expect(await this.pageTitle.isDisplayed()).toEqual(true);
    }

    /**
     * method to select the region or country 
     */
    public async selectRegion() {
        await expect(await (await this.usRegion).isDisplayed()).toEqual(true);
        await this.usRegion.click();
    }
}

export default new HomePage();
