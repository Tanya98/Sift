import { Component, OnInit, Input } from "@angular/core";
import { ColorsRisk } from 'src/app/enums/colors-risk';

export class AnalyzedWord {
    public text: string;
    public topics: any;
    public solutions: any[] = [];
    public simplyfied: boolean;
}

@Component({
    selector: "app-grouped-word",
    templateUrl: "./grouped-word.component.html",
    styleUrls: ["./grouped-word.component.less"],
})
export class GroupedWordComponent implements OnInit {
    public groupedWords: any[] = [];
    public originalGroupedWords: any[] = [];
    public dataMenu: any[] = [];
    public isShownMenu: boolean = false;
    public colorsRisk = ColorsRisk;
    private regex = /{{[a-z_]*}}/i;

    public _data: any;

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
        let previousSolution = "";

        const output = [];
        const words = [];

        data.extended.forEach((word) => {
            const match = this.regex.test(word.solution);

            if (match) {
                const last = output[output.length - 1];
                const menuWords = words[words.length-1];

                if (last && Array.isArray(last) && word.solution === previousSolution) {
                    last.push(word.original);
                    menuWords.push(word.original);
                } else {
                    output.push([word.original]);
                    words.push(word.solution, [word.original]);
                }
            } else {
                output.push(word.original);
            }

            previousSolution = word.solution;
        });

        this.groupedWords = output;
        this.dataMenu = words;
    }

    simplifyGroupedWords(data) {
        const words: AnalyzedWord[] = [];
        let previousSolution = "";

        data.extended.forEach(word => {
            const match = this.regex.test(word.solution);
            word.tokens.forEach(data => {
                if (word.solution === data.text) {
                    if (match) {
                        if (word.solution === previousSolution) {
                            words.push({
                                text: word.solution,
                                topics: data.topics,
                                solutions: word.tokens,
                                simplyfied: false
                            });
                        }
                    } else {
                        words.push({
                            text: word.solution,
                            topics: data.topics,
                            solutions: null,
                            simplyfied: true
                        });
                    }
                }
            });
            previousSolution = word.solution;
        });

        this.originalGroupedWords = words;
        // console.log(this.originalGroupedWords);
    }

    getDataMenuWords(data) {
        return data;
    }

    isArray(value) {
        if (Array.isArray(value)) {
            return value;
        }
    }

    ngOnInit() {

    }

    showMenu() {
        // debugger
        this.isShownMenu = !this.isShownMenu;
    }
}
