import { test, expect, Page } from "@playwright/test";
import { PageFactory } from "../src/pages/pageFactory";
import { Locators, Pages, resultsParameters, SearchParameters, ValidationsLocators } from "../src/const/common";
import { HomePage } from "../src/pages/homePage";

test.describe("21vek - Поиск", () => {
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

  test("Поиск товаров по валидным значениям", async () => {
    await page.click(Locators.searchField);
    await homePage.navigationBar.submitSearch(SearchParameters.tv);
    const searchResultsTitle = page.locator(SearchParameters.searchResultsTitle);
    expect(searchResultsTitle).toBeTruthy();
    expect(searchResultsTitle).toHaveText(resultsParameters.searchResults);
    const searchQuantity = page.locator(SearchParameters.searchQuantity);
    expect(searchQuantity).toBeTruthy();
    expect(searchQuantity).toHaveText(resultsParameters.categoryQuantity);
  });

  test("Очистка поиска", async () => {
    await page.click(Locators.searchField);
    await homePage.navigationBar.enterSearch(SearchParameters.tv);
    const searchCategory = page.locator(SearchParameters.searchCategory);
    expect(searchCategory).toBeTruthy();
    expect(searchCategory).toHaveText(resultsParameters.category);
    const searchProducts = page.locator(SearchParameters.searchProducts);
    expect(searchProducts).toBeTruthy();
    expect(searchProducts).toHaveText(resultsParameters.product);
    await page.click(SearchParameters.deleteSearchButton);
    const searchPopular = page.locator(SearchParameters.searchPopular);
    expect(searchPopular).toBeTruthy();
    expect(searchPopular).toHaveText(resultsParameters.popular);
  });

  test("Поиск товаров с невалидными значениями", async () => {
    await page.click(Locators.searchField);
    await homePage.navigationBar.submitSearch(SearchParameters.emptySearch);
    const emptySearch = page.locator(ValidationsLocators.emptySearch);
    expect(emptySearch).toBeTruthy();
    expect(emptySearch).toHaveText(resultsParameters.emptySearchResultText);
    const emptySearchResults = page.locator(ValidationsLocators.emptySearchResults);
    expect(emptySearchResults).toBeTruthy();
    expect(emptySearchResults).toHaveText(resultsParameters.emptySearchDescription);
  });
});