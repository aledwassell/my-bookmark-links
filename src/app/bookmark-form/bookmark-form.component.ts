import { Component, OnDestroy, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { BookmarkFromValue } from './../../models/bookmark.model';
import { RegexEnum } from './../../enums/regexEnum.enum';
import { bookmarkFormValue } from './../store/actions/bookmarks.actions';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-bookmark-form',
  templateUrl: './bookmark-form.component.html',
  styleUrls: ['./bookmark-form.component.scss']
})
export class BookmarkFormComponent implements OnInit, OnDestroy {
  @Input() value: BookmarkFromValue | null = null;
  @Output() formValue = new EventEmitter<BookmarkFromValue>();
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
      debounceTime(500), // Debounce by half a second so that we don't spam the state with values each keystroke.
      tap(value => this.formValue.emit(value)),
      takeUntil(this.destroy$),
    ).subscribe();
    if(this.value) {
      this.formGroup.patchValue(this.value);
    }
  }

  ngOnDestroy() {
    // Unsubscribe from all subscriptions when the component is destroyed.
    this.destroy$.next();
    this.destroy$.complete();
  }
}
