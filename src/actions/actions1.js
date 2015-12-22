/**
 * Created by alexkhymenko on 12/22/15.
 */
import dispatcher from '../core/Dispatcher';

class Actions {
  static navigate(newRoute) {
    console.log('im here32', newRoute);
  dispatcher.dispatch({actionType: 'Navigation', data: newRoute});
    dispatcher.dispatch({actionType: 'Navigation', data: newRoute})

  }
}

export default Actions;

