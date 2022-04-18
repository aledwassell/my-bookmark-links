import { Bookmark, BookmarkFromValue } from './../../../models/bookmark.model';
import { addBookmark, bookmarkFormValue, clearBookmarks } from './../actions/bookmarks.actions';
import { Action, createReducer, on } from '@ngrx/store';


export const bookmarksFeatureKey = 'bookmarks';

export interface State {
  bookmarkFormValue: BookmarkFromValue;
  bookmarks: Bookmark[];
}

export const initialState: State = {
  bookmarkFormValue: {
    name: null,
    url: null
  },
  bookmarks: [{name: 'Aled', url: 'Aled', id: '234545'}],
};

export const reducer = createReducer(
  initialState,
  on(bookmarkFormValue, (state, {name, url}) => ({...state, bookmarkFormValue: {name, url}})),
  on(addBookmark, (state) => ({...state, bookmarks: [...state.bookmarks, {name: state.bookmarkFormValue.name ?? '', url: state.bookmarkFormValue.url ?? '', id: 'asdfdf'}]})),
  on(clearBookmarks, (state) => ({...state, bookmarks: []})),
);
