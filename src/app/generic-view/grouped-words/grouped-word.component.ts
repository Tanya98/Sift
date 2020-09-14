import { Component, OnInit, Input } from "@angular/core";
import { Risk } from 'src/app/enums/risk';

@Component({
    selector: "app-grouped-word",
    templateUrl: "./grouped-word.component.html",
    styleUrls: ["./grouped-word.component.less"],
})
export class GroupedWordComponent implements OnInit {
    public groupedWords: any[] = [];
    public originalGroupedWords: any[] = [];
    public risk = Risk;

    private _data: any;

    @Input()
    public set data(data: any) {
        this._data = data;
        this.analyzeGroupedWords(this._data);
        this.simplifyGroupedWords(this._data);
    }

    public get data() {
        return this._data;
    }

    constructor() { }

    analyzeGroupedWords(data) {
        const regex = /{{[a-z_]*}}/i;
        let previousSolution = "";

        const output = [];

        data.extended.forEach((word) => {
            const match = regex.test(word.solution);

            if (match) {
                const last = output[output.length - 1];

                if (last && Array.isArray(last) && word.solution === previousSolution) {
                    last.push(word.original);
                } else {
                    output.push([word.original]);
                }
            } else {
                output.push(word.original);
            }

            previousSolution = word.solution;
        });

        this.groupedWords = output;
    }

    simplifyGroupedWords(data) {
        const words = [];
        data.extended.forEach(word => {
            word.tokens.forEach(data => {
                if (word.text === data.text) {
                    words.push({ text: word.solution, topics: data.topics });
                }
            });
        });

        this.originalGroupedWords = words;
    }

    isArray(value) {
        if (Array.isArray(value)) {
            return value;
        }
    }

    ngOnInit() {

    }

}
