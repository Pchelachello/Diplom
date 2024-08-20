import { test, expect, Page } from "@playwright/test";
import { PageFactory } from "../src/pages/pageFactory";
import { Locators, Pages, resultsParameters, ValidationsLocators } from "../src/const/common";
import { HomePage } from "../src/pages/homePage";

test.describe("21vek - Выбор города", () => {
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

  test("Выбор пустого значения для города", async () => {
    await page.click(Locators.citySelector);
    const cityModalTitle = page.locator(Locators.citySelectorTitle);
    expect(cityModalTitle).toBeTruthy();
    expect(cityModalTitle).toHaveText(resultsParameters.cityModalTitle);
    await page.click(Locators.deleteCityButton);
    await page.click(Locators.citySelectorTitle);
    const emptyCityError = page.locator(ValidationsLocators.emptyCity);
    expect(emptyCityError).toBeTruthy();
    expect(emptyCityError).toHaveText(resultsParameters.cityModalDescription);
  });
});