import { test, expect, Page } from "@playwright/test";
import { PageFactory } from "../src/pages/pageFactory";
import { Locators, Pages, promocode, resultsParameters, URLS } from "../src/const/common";
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

  test("Добавление товара в корзину", async () => {
    await page.click(Locators.productToCart);
    const productButtonInCart = page.locator(Locators.productButtonInCart);
    expect(productButtonInCart).toBeTruthy();
    expect(productButtonInCart).toHaveText(resultsParameters.inCart);
    const cartCounter = page.locator(Locators.cartCounter);
    expect(cartCounter).toBeTruthy();
    expect(cartCounter).toHaveText(resultsParameters.counterText);
    await page.click(Locators.cartButton);
    const productInCart = page.locator(Locators.productInCart);
    expect(productInCart).toBeTruthy();
    expect(productInCart).toHaveText(resultsParameters.productName);
  });

  test("Удаление товара из корзины", async () => {
    await page.click(Locators.productToCart);
    await page.click(Locators.cartButton);
    await page.click(Locators.cartDeleteButton);
    const deleteCartProductTitle = page.locator(Locators.deleteCartProductTitle);
    expect(deleteCartProductTitle).toBeTruthy();
    expect(deleteCartProductTitle).toHaveText(resultsParameters.deleteProductText);
    await page.click(Locators.deleteConformationButton);
    const emptyCartScreen = page.locator(Locators.emptyCartScreen);
    expect(emptyCartScreen).toBeTruthy();
  });

  test("Открыть пустую корзину", async () => {
    await page.click(Locators.cartButton);
    const emptyCartScreen = page.locator(Locators.emptyCartScreen);
    expect(emptyCartScreen).toBeTruthy();
    const emptyCartScreenTitle = page.locator(Locators.emptyCartScreenTitle);
    expect(emptyCartScreenTitle).toBeTruthy();
    expect(emptyCartScreenTitle).toHaveText(resultsParameters.emptyCart);
    const emptyCartScreenMessage = page.locator(Locators.emptyCartScreenMessage);
    expect(emptyCartScreenMessage).toBeTruthy();
    expect(emptyCartScreenMessage).toHaveText(resultsParameters.emptyCartMessage);
  });

  test("Применить промокод в корзине", async () => {
    await page.click(Locators.productToCart);
    await page.click(Locators.cartButton);
    await homePage.submitPromo(promocode);
    const promoLabel = page.locator(Locators.promoLabel);
    expect(promoLabel).toBeTruthy();
    expect(promoLabel).toHaveText(promocode);
    const totalDiscount = page.locator(Locators.totalDiscount);
    expect(totalDiscount).toBeTruthy();
    expect(totalDiscount).toHaveText(resultsParameters.sale);
    const productPromo = page.locator(Locators.productPromo);
    expect(productPromo).toBeTruthy();
    expect(productPromo).toHaveText(promocode);
});

  test("Вернуться на главную страницу по клику на баннер со страницы корзины", async () => {
    await page.click(Locators.cartButton);
    await homePage.navigationBar.goToHomePage();
    expect(page).toHaveURL(URLS.BASE_URL);
  });
})