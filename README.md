# PhantomContactsList

## Deliverables

- [x] Form validation must be custom written.
- [ ] All links entered in the list must persist page reload. (Not implemented, I think this can be done using browser storage if you didn't write a restful API and save the data in a database)
- [x] All code should be commented.
- [x] The application should be accompanied by a brief TDD (Technical
      Design Document) outlining the solution’s design and any limitations.
- [x] Source code to be linked to a repository (private or public).
- [x] A public/hosted link to the final app.
- Feel free to add any additional features that further demonstrates
  your skills.

---

## TDD - My Phantom Bookmarks

### Summary

App for maintaining a list of web bookmarks with links.
The user will be able to add/edit/delete bookmarks within the list.

### Stateful app built with [NGRX](https://ngrx.io/)

The form data should be stored on the state, that is when we change the field within the bookmark-form, we need to dispatch an action to the state to keep it updated with the form values, use `debounceTime(500)` RxJS operator to prevent spamming the state on each key stroke.

Data from the bookmarkFormValue on the state can be used when adding a new bookmark to the list within state, eg bookmarks: Bookmark[].

### Use [Angular Material](https://material.angular.io/)

Using angular material to build out the form control and the table listing the bookmarks.

### Use [FxFlex-API](https://github.com/angular/flex-layout/wiki/fxFlex-API) for CSS FlexBox

FxFlex API helps to keep the styling of flexbox elements tidy as it takes advantage of Angular directives to attached directly to HTML elements within the DOM.

---

## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
