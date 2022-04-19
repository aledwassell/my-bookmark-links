import { BookmarkFromValue } from './../models/bookmark.model';
import { selectBookmarks } from './store/selectors/bookmarks.selectors';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { addBookmark, bookmarkFormValue, clearBookmarks, deleteBookmark, updateBookmark } from './store/actions/bookmarks.actions';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bookmarksLength = 0;
  paginationEvent = new BehaviorSubject<PageEvent>({pageIndex: 0, pageSize: 20, length: 20});
  bookmarks$ = this.store.select(selectBookmarks).pipe(
    tap(b => this.bookmarksLength = b.length),
    // We need to wait for a value from the subject so that we can slice list of bookmarks based on the pagination data.
    switchMap(b => this.paginationEvent.pipe(map(({pageIndex, pageSize}) => {
      const spliceStart = pageIndex ? pageIndex * pageSize : 0;
      return b.slice(spliceStart, spliceStart + pageSize);
    })))
  );

  constructor(private store: Store) {}

  handleUpdateBookmarkFormValue(value: BookmarkFromValue) {
    this.store.dispatch(bookmarkFormValue(value))
  }

  handleUpdateTableRowItem(id: string) {
    this.store.dispatch(updateBookmark({id}));
  }

  deleteBookmark(id: string) {
    this.store.dispatch(deleteBookmark({id}));
  }

  addBookmark() {
    this.store.dispatch(addBookmark());
  }

  clearBookmarks() {
    this.store.dispatch(clearBookmarks());
  }
}
