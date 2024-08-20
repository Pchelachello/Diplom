import { Page } from '@playwright/test';
import { Locators } from '../const/common';

export class NavigationBar {
    constructor(protected readonly page: Page) {}

    public async submitSearch(query: string)
    {
        const invalidPasswordInput = this.page.locator(Locators.searchField);
        await invalidPasswordInput.fill(query);
        await invalidPasswordInput.press('Enter');
    };
  
    public async enterSearch(query: string)
    {
        const invalidPasswordInput = this.page.locator(Locators.searchField);
        await invalidPasswordInput.fill(query);
    };

    public async goToHomePage()
    {
      await this.page.click(Locators.logotypeBanner);
    };

    public async navigateToAuthorization()
    {
      await this.page.click(Locators.accountButton);
      await this.page.click(Locators.loginButton);
    }
  
    public async navigateToRegistration()
    {
      await this.page.click(Locators.accountButton);
      await this.page.click(Locators.loginButton);
      await this.page.click(Locators.registrationButton);
    }
}