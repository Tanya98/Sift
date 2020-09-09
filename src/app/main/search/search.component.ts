import { Component, OnInit } from '@angular/core';
import { faSearch, faTimes, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'main-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;
  faTimes = faTimes;
  faEllipsisH = faEllipsisH;
  closeSearch = 1;

  constructor(){}

  ngOnInit() {
  }

}
