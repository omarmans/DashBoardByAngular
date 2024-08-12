import { Component } from '@angular/core';

@Component({
  selector: 'app-top-search-items',
  templateUrl: './top-search-items.component.html',
  styleUrls: ['./top-search-items.component.scss'],
})
export class TopSearchItemsComponent {
  searchItems = [
    { keyword: 'Programming', searchCount: 220 },
    { keyword: 'JavaScript', searchCount: 180 },
    { keyword: 'PHP', searchCount: 160 },
    { keyword: 'Code', searchCount: 145 },
    { keyword: 'Design', searchCount: 110 },
    { keyword: 'Logic', searchCount: 95 },
  ];
}
