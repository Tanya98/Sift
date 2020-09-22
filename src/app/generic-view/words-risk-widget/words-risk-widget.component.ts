import { Component, OnInit, Input } from '@angular/core';
import { faComments, faAngry } from '@fortawesome/free-solid-svg-icons';
import { Topics } from 'src/app/enums/topics';

@Component({
    selector: 'app-words-risk-widget',
    templateUrl: './words-risk-widget.component.html',
    styleUrls: ['./words-risk-widget.component.less']
})

export class WordsRiskWidgetComponent implements OnInit {
    @Input() data;
    public generalRisk = 'General Risk';
    public vulgarRisk = 'Vulgar';
    public faComments = faComments;
    public faAngry = faAngry;
    public topics = Topics;
    Object = Object;
    constructor() { }

    ngOnInit() {
    }

   public converToNumber(value) {
        return Number(value);
    }
}