import { Page } from '@playwright/test';
import { HomePage } from './homePage';
import { Pages } from '../const/common';


export class PageFactory {
    static getPage(page:Page, pageName:Pages)
    {
        switch(pageName)
        {
            case(Pages.homePage):
            return new HomePage(page)
        }
    }
}