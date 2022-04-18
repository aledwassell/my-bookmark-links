import { selectContacts } from './store/selectors/contacts.selectors';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs/operators';
import { addContact } from './store/actions/contacts.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constacts$ = this.store.select(selectContacts).pipe(tap(v => console.log(v)), filter(c => !!c.length));

  addContact() {
    this.store.dispatch(addContact({contact: 'aled'}))
  }

  constructor(
    private store: Store
  ) {}
}
