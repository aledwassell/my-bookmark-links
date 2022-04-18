import { createAction, props } from '@ngrx/store';

export const addContact = createAction(
  '[Contacts] Add Contact',
  props<{ contact: string }>()
);

export const deleteContact = createAction(
  '[Contacts] Delete Contact'
);

export const editContact = createAction(
  '[Contacts] Edit Contact'
);
