import * as fromContacts from './contacts.actions';

describe('addContactss', () => {
  it('should return an action', () => {
    expect(fromContacts.addContactss().type).toBe('[Contacts] Add Contactss');
  });
});
