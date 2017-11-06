import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // do not mutate the state by e.g. state.push() method!!!
      // instead of that use: 
      // return state.concat([ action.payload.data ]);
      // or ES6 syntax
      return [ action.payload.data, ...state ];
  }
  return state;
}