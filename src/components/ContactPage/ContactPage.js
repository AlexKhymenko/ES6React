/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { Component, PropTypes } from 'react';
import s from './ContactPage.scss';
import withStyles from '../../decorators/withStyles';
import Actions from '../../actions/actions1'

const title = 'Contact Us';

@withStyles(s)
class ContactPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
    <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <p>...</p>
        </div>
      <button onClick={this.onClick}>Navigate</button>
    </div>
    );
  }

  onClick() {
    console.log('im in onClick');
    Actions.navigate('Navigate');
  }

}

export default ContactPage;
