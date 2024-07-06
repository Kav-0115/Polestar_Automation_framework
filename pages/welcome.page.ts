import { $ } from "@wdio/globals";
import Page from "./page.js";
import logger from "../utils/logger.js";
import { URL }  from "../data/environment";

class WelcomePage extends Page {

  public get welcomeVedio () {
    return $('#WwRt3oswRgSDNenOW8i0ZA');
}

 get learnMoreButton() {
  return $('#CI2U8EIPRDmNVTVRAr4P5Q');
}

    public open() {
        return super.open(URL);
      }

      public verifyPageTitle() {
       expect(browser).toHaveTitle("Polestar - Electric cars | Polestar United States");
      }

      async validateVedio() {
       expect(await this.welcomeVedio.isDisplayed()).toEqual(true);
      }

      async verifyUrlTitle() {
         expect(browser).toHaveUrl('https://www.polestar.com/us/');
      }

     public  async clickLearnMoreBtn()  {
        await this.waitAndClick(await this.learnMoreButton, "Navigate to Learnmore button");
      }

}

export default new WelcomePage();