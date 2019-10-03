import React from 'react';
import PropTypes from 'prop-types';


class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form action="https://formspree.io/technology@asuc.org" method="POST">
        <div class="field half first">
          <label for="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div class="field half">
          <label for="email">Email</label>
          <input type="email" name="email" />
        </div>
        <div class="field">
          <label for="message">Message</label>
          <textarea name="message" rows="4" />
        </div>
        <ul class="actions">
          <li><input type="submit" value="Submit" /></li>
          <li><input type="reset" value="Reset" /></li>
        </ul>
      </form>
    );
  }
}

export default ContactForm;
