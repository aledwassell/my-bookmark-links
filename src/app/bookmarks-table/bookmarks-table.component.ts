import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from 'src/models/bookmark.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
  @Input() bookmarks: Bookmark[] | null = null;
  columns = ['name', 'url'];
  expandedId: string = '';
}
