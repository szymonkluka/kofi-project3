export const select = {
  templateOf: {
    productList: '#template-products',
  },
  brand: {
    rights: '#brandright a',
  },
  containerOf: {
    homeProduct: '#homeproducts',
    productList: '#product-list',
    sides: '#sides',
    discoverBtn: '.maintitle a',
    contact: '#contact',
    submitBtn: 'form button',
    newForm: '.newForm',
    names: '#name',
    titles: '[messages="title"]',
    messages: '[name="message"]',
  },
  db: {
    url:
      '//' +
      window.location.hostname +
      (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
    messages: 'messages',
  },

};

export const showElements = {
  home: ['products', 'home'],
  products: ['products'],
  contact: ['contact'],
};

export const classNames = {
  sides: {
    active: 'active',
  },

};

export const templates = {
  product: Handlebars.compile(
    document.querySelector(select.templateOf.productList).innerHTML
  ),
};
