import { TEST_ACTION } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case TEST_ACTION:
        return { abc: 'abc' };
      default:
        return state;
  }
};
