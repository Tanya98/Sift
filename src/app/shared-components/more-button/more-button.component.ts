import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-more-button',
  templateUrl: './more-button.component.html',
  styleUrls: ['./more-button.component.less']
})
export class MoreButtonComponent implements OnInit {
public icon = faPlus;
  constructor() { }

  ngOnInit() {
  }

}
