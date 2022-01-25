import { TabEnumTypes } from '../creators/enumType';

export enum TabTypes {
  List= 'list',
  New= 'new',
  Edit= 'edit'
}

export default function tabReducer(state = '', action) {
  switch (action.type) {
    case TabEnumTypes.TabTypeChanged: {
      return action.payload;
    }
    default:
      return state;
  }
}
