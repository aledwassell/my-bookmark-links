import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../reducers/contacts.reducer';

export const selectContactsState = createFeatureSelector<State>('contacts');

export const selectContacts = createSelector(
  selectContactsState, state => state.contacts
);
