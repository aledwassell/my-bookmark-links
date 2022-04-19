import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { Bookmark, BookmarkFromValue } from 'src/models/bookmark.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-bookmarks-table[bookmarks]',
  templateUrl: './bookmarks-table.component.html',
  styleUrls: ['./bookmarks-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class BookmarksTableComponent {
  @Input() bookmarksLength = 0;
  @Input() pageSize = 20;
  @Input() pageSizeOptions: number[] = [20, 40, 60];
  @Input() bookmarks: Bookmark[] | null = null;
  @Input() columns = ['bookmarks', 'actions'];
  @Output() delete = new EventEmitter<string>();
  @Output() formValue = new EventEmitter<BookmarkFromValue>()
  @Output() submitFormValue = new EventEmitter<string>()
  @Output() paginate = new EventEmitter<PageEvent>()
  expandedId: string = '';
}
