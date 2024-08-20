import { test, expect, Page } from "@playwright/test";
import { PageFactory } from "../src/pages/pageFactory";
import {accountButtons, emailParameters, FieldsLocators, Locators, Pages, passwordParameters, resultsParameters, ValidationsLocators } from "../src/const/common";
import { HomePage } from "../src/pages/homePage";

test.describe("21vek - Логин", () => {
  let homePage: HomePage;
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();

    homePage = PageFactory.getPage(page, Pages.homePage) as HomePage;

    await homePage.viewPage();
    await homePage.acceptCookies();
    await homePage.navigationBar.navigateToAuthorization();
  });

  test.afterAll(async () => {
    await homePage.closePage();
  });

  test("Логин в аккаунт", async () => {
    await page.click(FieldsLocators.registrationEmailField);
    await homePage.enterRegistrationEmail(emailParameters.validEmail);
    await page.click(FieldsLocators.registrationPasswordField);
    await homePage.submitRegistrationPassword(passwordParameters.validPassword);
    await page.click(Locators.accountButton);
    const accountEmail = page.locator(emailParameters.accountEmail);
    expect(accountEmail).toBeTruthy();
    expect(accountEmail).toHaveText(resultsParameters.email);
    const myOrders = page.locator(accountButtons.myOrders);
    expect(myOrders).toBeTruthy();
    expect(myOrders).toHaveText(resultsParameters.orders);
    const myData = page.locator(accountButtons.myData);
    expect(myData).toBeTruthy();
    expect(myData).toHaveText(resultsParameters.data);
    const myBonus = page.locator(accountButtons.myBonus);
    expect(myBonus).toBeTruthy();
    expect(myBonus).toHaveText(resultsParameters.bonus);
    const myWishlist = page.locator(accountButtons.myWishlist);
    expect(myWishlist).toBeTruthy();
    expect(myWishlist).toHaveText(resultsParameters.wishlist);
    const myReviews = page.locator(accountButtons.myReviews);
    expect(myReviews).toBeTruthy();
    expect(myReviews).toHaveText(resultsParameters.review);
    const LogOut = page.locator(accountButtons.LogOut);
    expect(LogOut).toBeTruthy();
    expect(LogOut).toHaveText(resultsParameters.logout);
  });

  test("Логин при пустых полях ввода", async () => {
    await page.click(Locators.loginSubmit);
    const emptyEmailError = page.locator(ValidationsLocators.emptyEmail);
    expect(emptyEmailError).toBeTruthy();
    expect(emptyEmailError).toHaveText(resultsParameters.emptyEmailErrorText);
    const emptyPasswordError = page.locator(ValidationsLocators.emptyPassword);
    expect(emptyPasswordError).toBeTruthy();
    expect(emptyPasswordError).toHaveText(resultsParameters.emptyPasswordErrorText);
  });

  test("Логин при невалидной почте", async () => {
    await page.click(FieldsLocators.registrationEmailField);
    await homePage.submitRegistrationEmail(emailParameters.invalidEmail);
    const invalidEmailError = page.locator(ValidationsLocators.invalidEmail);
    expect(invalidEmailError).toBeTruthy();
    expect(invalidEmailError).toHaveText(resultsParameters.invalidEmailErrorText);
    const emptyPasswordError = page.locator(ValidationsLocators.emptyPassword);
    expect(emptyPasswordError).toBeTruthy();
    expect(emptyPasswordError).toHaveText(resultsParameters.emptyPasswordErrorText);
  });

  test("Логин при пустом поле 'Пароль'", async () => {
    await page.click(FieldsLocators.registrationEmailField);
    await homePage.submitRegistrationEmail(emailParameters.validEmail);
    const emptyPasswordError = page.locator(ValidationsLocators.emptyPassword);
    expect(emptyPasswordError).toBeTruthy();
    expect(emptyPasswordError).toHaveText(resultsParameters.emptyPasswordErrorText);
  });

  test("Логин при пустом поле 'Электронная почта'", async () => {
    await page.click(FieldsLocators.registrationPasswordField);
    await homePage.submitRegistrationPassword(passwordParameters.validPassword);
    const emptyEmailError = page.locator(ValidationsLocators.emptyEmail);
    expect(emptyEmailError).toBeTruthy();
    expect(emptyEmailError).toHaveText(resultsParameters.emptyEmailErrorText);
  });

  test("Логин при невалидном пароле", async () => {
    await page.click(FieldsLocators.registrationEmailField);
    await homePage.enterRegistrationEmail(emailParameters.validEmail);
    await page.click(FieldsLocators.registrationPasswordField);
    await homePage.submitRegistrationPassword(passwordParameters.invalidPassword);
    const invalidPasswordError = page.locator(ValidationsLocators.invalidPassword);
    expect(invalidPasswordError).toBeTruthy();
    expect(invalidPasswordError).toHaveText(resultsParameters.invalidResetPasswordErrorText);
    const resetPassword = page.locator(ValidationsLocators.resetPassword);
    expect(resetPassword).toBeTruthy();
    expect(resetPassword).toHaveText(resultsParameters.resetPasswordText);
  });
});