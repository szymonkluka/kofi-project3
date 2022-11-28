import { select } from './settings.js';

class Contact {
  constructor(element) {
    const thisContact = this;
    thisContact.messages = [];
    thisContact.getElements(element);
    thisContact.initActions();

  }

  getElements(element) {
    const thisContact = this;

    thisContact.dom = {};
    thisContact.dom.wrapper = element;
    thisContact.dom.form = thisContact.dom.wrapper.querySelector(select.containerOf.newForm);
    //console.log(thisContact.dom.form);
    thisContact.dom.names = thisContact.dom.wrapper.querySelector('#name');
    thisContact.dom.tiles = thisContact.dom.wrapper.querySelector('#title');
    thisContact.dom.messages = thisContact.dom.wrapper.querySelector('#message');

    thisContact.dom.inputs = {};




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
    const url = select.db.url + '/' + select.db.messages;
    const payload = {
      name: thisContact.dom.names.value,
      title: thisContact.dom.tiles.value,
      message: thisContact.dom.messages.value,
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
