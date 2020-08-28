import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

export const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
  promotions: PROMOTIONS,
  leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
  return state;
};
    // this.state = {
    //   firstname: '',
    //   lastname: '',
    //   telnum: '',
    //   email: '',
    //   agree: false,
    //   contactType: 'Tel.',
    //   message: '',
    //   touched: {
    //     firstname: false,
    //     lastname: false,
    //     telnum: false,
    //     email: false
    //   }
    // }