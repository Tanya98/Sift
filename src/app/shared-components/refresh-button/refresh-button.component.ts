import { Component, OnInit } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-refresh-button',
    templateUrl: './refresh-button.component.html',
    styleUrls: ['./refresh-button.component.less']
})

export class RefreshButtonComponent implements OnInit {
    public icon = faSyncAlt;
    constructor() { }

    ngOnInit() { }
}