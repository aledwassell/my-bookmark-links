import { Bookmark, BookmarkFromValue } from './../../../models/bookmark.model';
import { createAction, props } from '@ngrx/store';

export const bookmarkFormValue = createAction(
  '[Bookmarks] Add Bookmark Form Value',
  props<BookmarkFromValue>()
);

export const addBookmark = createAction('[Bookmarks] Add Bookmark');

export const clearBookmarks = createAction('[Bookmarks] Clear Bookmarks');

export const deleteBookmark = createAction(
  '[Bookmarks] Delete Bookmark',
  props<{ id: string }>()
);

export const updateBookmark = createAction(
  '[Bookmarks] Edit Bookmark',
  props<{ id: string }>()
);
