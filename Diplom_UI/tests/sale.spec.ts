import { test, expect, Page } from "@playwright/test";
import { PageFactory } from "../src/pages/pageFactory";
import { Locators, Pages, resultsParameters } from "../src/const/common";
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

  test("Проверить наличие лейбла 'Суперцена' у списка товаров в соответствующей категории", async () => {
    await page.click(Locators.superSaleButton);
    const listOfElements = page.locator(Locators.saleElement);
    const count = await listOfElements.count();
        for (let i = 0; i < count; i++) {
        const element = listOfElements.nth(i);
        expect(element).toBeTruthy();
        expect(element).toHaveText(resultsParameters.superSale);
        }
    });
  test("Проверить наличие лейбла 'Уцененный товар' у списка товаров в соответствующей категории", async () => {
    await page.click(Locators.superSaleButton);
   const listOfElements = page.locator(Locators.lowPriceElement);
      const count = await listOfElements.count();
          for (let i = 0; i < count; i++) {
          const element = listOfElements.nth(i);
          expect(element).toBeTruthy();
          expect(element).toHaveText(resultsParameters.lowPriceCategory);
          }
      });
});