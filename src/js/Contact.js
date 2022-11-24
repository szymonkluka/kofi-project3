import { select } from './settings.js';

class Contact {
  constructor(element) {
    const thisContact = this;
    thisContact.products = [];
    thisContact.getElements(element);
    thisContact.initActions();

  }

  getElements(element) {
    const thisContact = this;

    thisContact.dom = {};
    thisContact.dom.wrapper = element;
    thisContact.dom.form = thisContact.dom.wrapper.querySelector(select.containerOf.newForm);
    console.log(thisContact.dom.form);
    thisContact.dom.submitBtn = thisContact.dom.wrapper.querySelector(
      select.containerOf.submitBtn
    );

    thisContact.dom.names = thisContact.dom.wrapper.querySelector(select.containerOf.names);
    thisContact.dom.tiles = thisContact.dom.wrapper.querySelector(select.containerOf.titles);
    thisContact.dom.messages = thisContact.dom.wrapper.querySelector(select.containerOf.messages);

    thisContact.dom.inputs = {};
    thisContact.dom.inputs.name = thisContact.dom.wrapper.querySelector(
      select.containerOf.input.name
    );
    thisContact.dom.inputs.title = thisContact.dom.wrapper.querySelector(
      select.containerOf.input.title
    );
    thisContact.dom.inputs.message = thisContact.dom.wrapper.querySelector(
      select.containerOf.input.message
    );



  }

  initActions() {
    const thisContact = this;

    thisContact.dom.form.addEventListener('submit', function (event) {
      event.preventDefault();
      thisContact.sendOrder();
    });
  }

  sendOrder() {
    const thisContact = this;
    const url = select.db.url + '/' + select.db.orders;
    const payload = {
      name: thisContact.dom.inputs.name.value,
      title: thisContact.dom.inputs.title.value,
      message: thisContact.dom.inputs.messages.value,
      products: [],
    };




    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, options);
  }




}

export default Contact;
