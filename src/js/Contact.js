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
    thisContact.dom.name = thisContact.dom.wrapper.querySelector('#name');
    thisContact.dom.title = thisContact.dom.wrapper.querySelector('#title');
    thisContact.dom.message = thisContact.dom.wrapper.querySelector('#message');

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
      name: thisContact.dom.name.value,
      title: thisContact.dom.title.value,
      message: thisContact.dom.message.value,
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
