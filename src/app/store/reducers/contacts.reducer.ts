import { addContact } from './../actions/contacts.actions';
import { Action, createReducer, on } from '@ngrx/store';


export const contactsFeatureKey = 'contacts';

export interface State {
  contacts: string[];
}

export const initialState: State = {
  contacts: ['Aled'],
};

export const reducer = createReducer(
  initialState,
  on(addContact, (state, {contact}) => ({...state, contacts: [...state.contacts, contact]})),
);
