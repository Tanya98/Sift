import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-grouped-words-menu',
    templateUrl: './grouped-words-menu.component.html',
    styleUrls: ['./grouped-words-menu.component.less']
})

export class GroupedWordsMenuComponent implements OnInit {

    @Input() data;
    public groupedWords: any[] = [];
    private regex = /{{[a-z_]*}}/i;
    public words = [];
    constructor() { }

    ngOnInit() {
        console.log(this.data);
        this.data.forEach(word => {
            const match = this.regex.test(word.text);
            if (match) {
                this.words.push(word);
            } else {
                this.words.push(word.text.split(' '));
            }
        });
        console.log(this.words);
    }
}