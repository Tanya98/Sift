import { Component, OnInit, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-topic-block',
    templateUrl: './topic-block.component.html',
    styleUrls: ['./topic-block.component.less']
})

export class TopicBlockComponent implements OnInit {
    @Input() icon: IconDefinition;
    @Input() text: string;
    @Input() risk: number;
    @Input() levelOfRisk: number;
    constructor() { }

    ngOnInit() { 
        console.log(this.levelOfRisk);
    }
}