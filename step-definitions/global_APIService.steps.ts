import { Given, When, Then } from '@wdio/cucumber-framework';
import api_get_service from "../pages/xAPI/global_APIServices"


Given(/^I get API response in text format for the {string} $/, async () => {
    await api_get_service.getAPIGlobalResponse();
});

Given(/^I validate the response status code to be 304 for {string} $/, async () => {
    await api_get_service.validateGlobalServiceStatusCode();
});

Given(/^I get API response in text format for the {string} $/, async () => {
    await api_get_service.getBackendURLResponse();
});

Given(/^I validate the response status code to be 200 for {string} $/, async () => {
    await api_get_service.validateBackendURLServiceStatusCode();
});
