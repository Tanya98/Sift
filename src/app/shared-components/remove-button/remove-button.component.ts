import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-remove-button',
    templateUrl: './remove-button.component.html',
    styleUrls: ['./remove-button.component.less']
})

export class RemoveButtonComponent implements OnInit {
    public icon = faTimes;
    constructor() { }

    ngOnInit() { }
}