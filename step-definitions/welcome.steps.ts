import { Given, When, Then } from '@wdio/cucumber-framework';
import welcomePage from '../pages/welcome.page';
import homePage from '../pages/home.page.js';

Given(/^User navigates to the polestar Dev website $/, async () => {
    await welcomePage.open();
});

Then(/User should land on home page$/, async () => {
    await homePage.verifyPolestarHomePage();
});

Then(/^User selects preffered location $/, async () => {
  await homePage.selectRegion();
});

When(/^User gets navigated to the selected page and validate the url and title of the page $/, async () => {
  await welcomePage.validateVedio();
  welcomePage.verifyPageTitle();
  await welcomePage.verifyUrlTitle();
});

Given(/^User navigates to {string}$/, async () => {
  await welcomePage.verifyUrlTitle();
});

Then(/^User clicks on Learn more button$/, async () => {
  await welcomePage.clickLearnMoreBtn();
});






