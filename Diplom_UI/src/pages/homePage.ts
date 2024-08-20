import { Page } from '@playwright/test';
import { BasePage } from './basePages';
import { NavigationBar } from '../elements/navigationBar';
import { FieldsLocators, Locators, SubscriptionLocators, URLS } from '../const/common';


export class HomePage extends BasePage {
    constructor(page: Page) {
    super(page);
    this.navigationBar = new NavigationBar(page);
    this.url = URLS.BASE_URL;
    this.locator = '//div[@class="styles_headerReactWrapper__TTCde styles_headerReactWrapperAlt__QuQrs"]';
  }

  public async navigateTo()
  {
    await this.page.goto(this.url);
  }

  public async acceptCookies()
  {
    await this.page.click(Locators.Cookies);
  }

  public async submitRegistrationEmail(query: string)
  {
      const invalidEmailInput = this.page.locator(FieldsLocators.registrationEmailField);
      await invalidEmailInput.fill(query);
      await invalidEmailInput.press('Enter');
  };

  public async enterRegistrationEmail(query: string)
  {
      const invalidEmailInput = this.page.locator(FieldsLocators.registrationEmailField);
      await invalidEmailInput.fill(query);
  };

  public async submitRegistrationPassword(query: string)
  {
      const invalidPasswordInput = this.page.locator(FieldsLocators.registrationPasswordField);
      await invalidPasswordInput.fill(query);
      await invalidPasswordInput.press('Enter');
  };

  public async enterRegistrationPassword(query: string)
  {
      const invalidPasswordInput = this.page.locator(FieldsLocators.registrationPasswordField);
      await invalidPasswordInput.fill(query);
  };

  public async submitSubscriptionEmail(query: string)
  {
      const invalidEmailInput = this.page.locator(SubscriptionLocators.subscriptionEmailField);
      await invalidEmailInput.fill(query);
      await invalidEmailInput.press('Enter');
  };

  public async submitPromo(query: string)
  {
      const invalidPasswordInput = this.page.locator(Locators.promoField);
      await invalidPasswordInput.fill(query);
      await invalidPasswordInput.press('Enter');
  };
}
