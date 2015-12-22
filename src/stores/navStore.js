/**
 * Created by alexkhymenko on 12/22/15.
 */

import dispatcher from '../core/Dispatcher';
import  EventEmitter  from 'eventemitter3';
const CHANGE_EVENT = 'change';

let _nav = {
  list: []
};

function getList() {
  console.log('Navigation object', _nav);
  return _nav;
}

_nav.list.push('Time', 'alwaysNice');
class NavigationStoreClass extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }
  getList() {
    return _nav;
  }

  onAction(actionType, data) {
    this.logger.debug(`Received Action ${actionType} with data`, data);
    console.log('onAction');
    console.log(actionType, data);
  }
}
var NavigationStore = new NavigationStoreClass();

dispatcher.register(function(action) {
  console.log('im in dispatcher11', action);
});

export default NavigationStore;
