import { StatusFilterTypes } from '../creators/enumType';

export enum StatusFilters {
  All= 'all',
  New= 'new',
  Done= 'done',
  Expired= 'expired'
}

const initialState:string = '';

export default function filterReducer(state:string = initialState, action) {
  switch (action.type) {
    case StatusFilterTypes.StatusFilterChanged: {
      return action.payload;
    }
    default:
      return state;
  }
}
