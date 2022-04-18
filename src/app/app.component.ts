import { BookmarkFromValue } from './../models/bookmark.model';
import { selectBookmarks } from './store/selectors/bookmarks.selectors';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { addBookmark, bookmarkFormValue, clearBookmarks, deleteBookmark, updateBookmark } from './store/actions/bookmarks.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bookmarks$ = this.store.select(selectBookmarks);

  handleUpdateBookmarkFormValue(value: BookmarkFromValue) {
    this.store.dispatch(bookmarkFormValue(value))
  }

  handleUpdateTableRowItem(id: string) {
    this.store.dispatch(updateBookmark({id}));
  }

  addBookmark() {
    this.store.dispatch(addBookmark());
  }

  deleteBookmark(id: string) {
    this.store.dispatch(deleteBookmark({id}));
  }

  clearBookmarks() {
    this.store.dispatch(clearBookmarks());
  }

  constructor(private store: Store) {}
}
