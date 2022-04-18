import { RegexEnum } from './../../enums/regexEnum.enum';
import { bookmarkFormValue } from './../store/actions/bookmarks.actions';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounce, debounceTime, distinctUntilChanged, distinctUntilKeyChanged, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss']
})
export class BookmarkFormComponent implements OnInit {
  private destroy$ = new Subject<void>();

  formGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required, Validators.pattern(RegexEnum.URL)]),
  });

  get nameCtrl (): AbstractControl | null {
    return this.formGroup.get('name');
  }

  get urlCtrl (): AbstractControl | null {
    return this.formGroup.get('url');
  }

  constructor(
    private store: Store
  ) {}

  ngOnInit() {
    this.formGroup.valueChanges
    .pipe(
      debounceTime(500),
      tap(value => this.store.dispatch(bookmarkFormValue(value))),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
