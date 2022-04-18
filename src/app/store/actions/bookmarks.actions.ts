import { Bookmark } from './../../../models/bookmark.model';
import { createAction, props } from '@ngrx/store';

export const bookmarkFormValue = createAction(
  '[Bookmarks] Add Bookmark Form Value',
  props<{ name: string, url: string }>()
);

export const addBookmark = createAction('[Bookmarks] Add Bookmark');

export const clearBookmarks = createAction('[Bookmarks] Clear Bookmarks');

export const deleteBookmark = createAction(
  '[Bookmarks] Delete Bookmark',
  props<{ id: string }>()
);

export const editBookmark = createAction(
  '[Bookmarks] Edit Bookmark'
);
