import { test, expect, Page } from "@playwright/test";
import { PageFactory } from "../src/pages/pageFactory";
import {emailParameters, Pages, resultsParameters, SubscriptionLocators, ValidationsLocators } from "../src/const/common";
import { HomePage } from "../src/pages/homePage";

test.describe("21vek - Подписка", () => {
  let homePage: HomePage;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    homePage = PageFactory.getPage(page, Pages.homePage) as HomePage;

    await homePage.viewPage();
    await homePage.acceptCookies();
  });

  test.afterAll(async () => {
    await homePage.closePage();
  });

  test("Логин при пустых полях ввода", async () => {
    await page.click(SubscriptionLocators.subscriptionEmailField);
    await homePage.submitSubscriptionEmail(emailParameters.invalidEmail);
    const emptyEmailError = page.locator(ValidationsLocators.invalidSubscriptionEmail);
    expect(emptyEmailError).toBeTruthy();
    expect(emptyEmailError).toHaveText(resultsParameters.invalidEmailErrorText);
  });
});