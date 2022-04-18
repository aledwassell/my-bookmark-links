import { Bookmark, BookmarkFromValue } from './../../../models/bookmark.model';
import { addBookmark, bookmarkFormValue, clearBookmarks, deleteBookmark, updateBookmark } from './../actions/bookmarks.actions';
import { createReducer, on } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';

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
  bookmarks: [
    {name: 'Google', url: 'https://google.com', id: '9f4df852-424f-4cb6-9335-1d5b804d1c91'},
    {name: 'Stackblitz', url: 'https://stackblitz.com/', id: '31aa1424-cdfc-4d17-83d0-44b572d3bdb7'},
    {name: 'MDN', url: 'https://developer.mozilla.org/', id: 'f02a637b-bac8-4a16-8408-9806b8ff438a'}
  ],
};

export const reducer = createReducer(
  initialState,
  on(bookmarkFormValue, (state, {name, url}) => ({...state, bookmarkFormValue: {name, url}})),
  on(addBookmark, (state) => ({...state, bookmarks: [...state.bookmarks, {name: state.bookmarkFormValue.name ?? '', url: state.bookmarkFormValue.url ?? '', id: uuidv4()}]})),
  on(updateBookmark, (state, {id}) => {
    const target = state.bookmarks.find(b => b.id === id);
    if(!target) {
      return {...state};
    }
    return {
      ...state,
      bookmarks: [
        ...state.bookmarks.map(b => b.id === id
          ? {name: state.bookmarkFormValue.name ?? '', url: state.bookmarkFormValue.url ?? '', id}
          : b),
      ]
    };
  }),
  on(deleteBookmark, (state, {id}) => ({...state, bookmarks: state.bookmarks.filter(b => b.id !== id)})),
  on(clearBookmarks, (state) => ({...state, bookmarks: []})),
);
