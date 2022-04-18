import { selectBookmarks } from './store/selectors/bookmarks.selectors';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { addBookmark, clearBookmarks } from './store/actions/bookmarks.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bookmarks$ = this.store.select(selectBookmarks);

  addBookmark() {
    this.store.dispatch(addBookmark());
  }

  clearBookmarks() {
    this.store.dispatch(clearBookmarks());
  }

  constructor(private store: Store) {}
}
