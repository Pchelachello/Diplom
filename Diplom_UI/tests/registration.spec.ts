import { test, expect, Page } from "@playwright/test";
import { PageFactory } from "../src/pages/pageFactory";
import {emailParameters, Pages, resultsParameters } from "../src/const/common";
import { HomePage } from "../src/pages/homePage";
import { FieldsLocators, ValidationsLocators } from "../src/const/common";

test.describe("21vek - Регистрация", () => {
  let homePage: HomePage;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    homePage = PageFactory.getPage(page, Pages.homePage) as HomePage;

    await homePage.navigateTo();
    await homePage.acceptCookies();
    await homePage.navigationBar.navigateToRegistration();
  });

  test.afterAll(async () => {
    await homePage.closePage();
  });

  test("Оставить пустое поле 'Электронная почта'", async () => {
    await page.click(FieldsLocators.registrationEmailField);
    await page.click(FieldsLocators.registrationPhoneNumberField);
    const emptyEmailError = page.locator(ValidationsLocators.emptyEmail);
    expect(emptyEmailError).toBeTruthy();
    expect(emptyEmailError).toHaveText(resultsParameters.emptyEmailErrorText);
  });

  test("Невалидное значение в поле 'Электронная почта'", async () => {
    await page.click(FieldsLocators.registrationEmailField);
    await homePage.enterRegistrationEmail(emailParameters.invalidEmail);
    const invalidEmailError = page.locator(ValidationsLocators.invalidEmail);
    expect(invalidEmailError).toBeTruthy();
    expect(invalidEmailError).toHaveText(resultsParameters.invalidEmailErrorText);
  });
});