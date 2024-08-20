export enum URLS {
  BASE_URL = "https://www.21vek.by",
  CART_URL = "https://www.21vek.by/order/",

  }

export enum Locators {
  Cookies = '//button[@class="Button-module__button Button-module__blue-primary"]',

  logotypeBanner = '//div[@class ="logotype"]',

  searchField = '//input[@id="catalogSearch"]',
  emptyProductSearch = '.not_find',

  citySelector = '.styles_localityBtn__qrGFQ',
  citySelectorTitle = '//h5[@class="style_formTitle__qmgIN" and text()="Населенный пункт"]',
  prefilledCitySelector = '//div[@class="select__input-container css-1cfo1cf"]',
  deleteCityButton = '.BaseSuggest-module__clearIndicator',

  superSaleButton = '//span[text() = "Суперцена"]',
  lowPriceButton = '//span[text() = "Уцененные товары"]',

  saleElement = '//div[@class="EntitiesList_items__yPKoN"]//div[@class="CardDiscountType_label__Z65eZ CardDiscountType_default__o7iqN ProductHome_discountType__ZoDRY"]',
  lowPriceElement = '//div[@class="CardDiscountType_label__Z65eZ CardDiscountType_default__o7iqN CardDiscountType_sale__XMhkX ProductHome_discountType__ZoDRY"]',
 
  accountButton = '//button[@class="styles_userToolsToggler__c2aHe"]',
  accountDropDown = '.styles_list__X7MxD',
  loginButton = '//button[@data-testid="loginButton"]',
  loginModal = '//div[@data-testid="modal"]',
  registrationButton = '//button[@class="LinkButton-module__wrapper LinkButton-module__caption LinkButton-module__regular LinkButton-module__blue styles_secondaryAction__H7V7H"]',
  loginSubmit = '//button[@data-testid="loginSubmit"]',
  registartionSubmit = '//button[@class="Button-module__button Button-module__blue-primary"]',

  productToCart = '//div[@aria-label = "Товар Коврик для йоги и фитнеса Proiron 1730x610x4 / К1736104ТЗ (темно-зеленый)"]//button[@class = "Button-module__button RecommendationProduct_basketButton__fDK1i Button-module__pink-primary Button-module__small"]',
  productButtonInCart = '//div[@class="Button-module__buttonText" and text() = "В корзине"]',
  cartCounter = '//span[@data-testid = "header-count"]',
  cartButton = 'a[href="/order/?&checkTab=true"]',
  cartDeleteButton = '//button[@aria-label = "Удалить товар"]',
  deleteCartProductTitle = '//h5[@class = "styles_modalTitle__BzX6R"]',
  deleteConformationButton = '//button[@data-testid = "modal-confirmation-button"]',
  productInCart = '.BasketItem_title__MzCQ9',
  emptyCartScreen = '//div[@data-testid = "empty-basket-screen"]',
  emptyCartScreenTitle = '//div[@data-testid = "empty-basket-screen"]/h2',
  emptyCartScreenMessage = '//div[@data-testid = "empty-basket-screen"]/p',
  promoField = '.BaseInput-module__input',
  promoLabel = '.Promocode_code__UU7wD',
  productPromo = '//p[@aria-label="Применённый промокод"]',
  totalDiscount = '//span[text()="Скидка"]',
}

export enum ValidationsLocators {
  emptyEmail = '//span[@class="ErrorMessage-module__message" and text()="Электронная почта не указана"]',
  invalidEmail = '//span[@class="ErrorMessage-module__message" and text()="Неправильный формат электронной почты"]',
  invalidSubscriptionEmail = '//div[@class="input-error-message SubscriptionForm_error__4XxF2"]',
  emptyPassword = '//span[@class="ErrorMessage-module__message" and text()="Пароль не указан"]',
  invalidPassword = '//span[@class="styles_errorText__LEN7M" and text()="Неправильный пароль. "]',
  resetPassword = '//div[@class="Button-module__buttonText" and text()="Сбросить пароль?"]',
  emptySearch = '//span[text()="Запрос «teeeeest». Найдено 0 товаров"]',
  emptySearchResults = '//span[text()="По данным параметрам товаров не найдено "]',
  emptyCity = '//span[text()="Выберите населенный пункт из списка"]',
}

export enum FieldsLocators {
  registrationEmailField = '//div[@class="BaseInput-module__inputWrapper"]//input[@label="Электронная почта"]',
  registrationPasswordField = '//div[@class="BaseInput-module__inputWrapper"]//input[@label="Пароль"]',
  registrationPhoneNumberField = '//div[@class="BaseNumberField-module__inputWrapper RegionPhoneField-module__inputWithRegions RegionPhoneField-module__hideFocusIndicator"]',
}

export enum SubscriptionLocators {
  subscriptionEmailField = '.style_inputStyle__ZKhdf',
  subscriptionButton = '.SubscriptionForm_button__PS9qv',
}

export enum accountButtons {
  myOrders = 'a[href="/profile/bought/"]',
  myData = 'a[href="/profile/info/"]',
  myBonus = 'a[href="/bonus/"]',
  myWishlist = 'a[href="/profile/wishlist/"]',
  myReviews = 'a[href="/profile/reviews/"]',
  LogOut = 'a[href="/logout/"]',
}

export enum SearchParameters {
  tv = 'Телевизор',
  emptySearch = 'teeeeest',
  searchResultsTitle = '//h1[@class="content__header cr-category_header"]',
  searchQuantity = '//a[contains(@class, "b-recipes__item__link") and contains(text(), "Телевизоры (759)")]',
  searchCategory = '//div[@class="SearchSuggestList_title__9JB4O" and text()="Категории"]',
  searchProducts = '//div[@class="SearchSuggestList_title__9JB4O" and text()="Товары"]',
  searchPopular = '//div[@class="SearchSuggestList_title__9JB4O" and text()="Популярное"]',
  deleteSearchButton = '//button[@class="Search_clearBtn__j9c8N"]',
}

export enum emailParameters {
  invalidEmail = 'test',
  validEmail = 'alex21vek@yopmail.com',
  accountEmail = '//span[@class="userToolsSubtitle"]',
}

export enum passwordParameters {
  validPassword = 'c36e5321',
  invalidPassword = '1',
}

export enum resultsParameters {
  email = 'alex21vek@yopmail.com',
  orders = 'Мои заказы',
  data = 'Личные данные',
  bonus = 'Бонусный счет',
  wishlist = 'Лист ожидания',
  review = 'Отзывы и вопросы',
  logout = 'Выход',
  emptyEmailErrorText = 'Электронная почта не указана',
  emptyPasswordErrorText = 'Пароль не указан',
  invalidEmailErrorText = 'Неправильный формат электронной почты',
  invalidResetPasswordErrorText = 'Неправильный пароль. Сбросить пароль?',
  resetPasswordText = 'Сбросить пароль?',
  inCart = 'В корзине',
  counterText = '1',
  productName = 'Коврик для йоги и фитнеса Proiron 1730x610x4 / К1736104ТЗ (темно-зеленый)',
  deleteProductText = 'Удалить товар из корзины',
  emptyCart = 'Корзина пуста',
  emptyCartMessage = 'Вы можете выбрать товары в каталоге или воспользоваться поиском.',
  sale = 'Скидка',
  cityModalTitle = 'Населенный пункт',
  cityModalDescription = 'Выберите населенный пункт из списка',
  superSale = 'Суперцена',
  lowPriceCategory = 'Уцененный товар',
  searchResults = 'Результаты поиска',
  categoryQuantity = 'Телевизоры (759)',
  category = 'Категории',
  product = 'Товары',
  popular = 'Популярное',
  emptySearchResultText = 'Запрос «teeeeest». Найдено 0 товаров',
  emptySearchDescription = 'По данным параметрам товаров не найдено ',
}

export const enum Pages {
  homePage,
}

export const promocode = 'epam';