import { createSelector, createFeatureSelector } from '@ngrx/store';
import { bookmarksFeatureKey, State } from '../reducers/bookmarks.reducer';

export const selectBookmarksState = createFeatureSelector<State>(bookmarksFeatureKey);

export const selectBookmarks = createSelector(
  selectBookmarksState, state => state.bookmarks
);
