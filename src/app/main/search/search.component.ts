import { Component, OnInit, OnDestroy, OnChanges, DoCheck, AfterContentChecked, AfterContentInit } from '@angular/core';
import { faSearch, faTimes, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { SendInputTextService } from 'src/app/services/send-input-text.service';
import { TextInputModel } from 'src/app/model/text-input-model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'main-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit, OnDestroy, AfterContentInit {
    faSearch = faSearch;
    faTimes = faTimes;
    faEllipsisH = faEllipsisH;
    closeSearch = 1;

    public data;
    private _destroy$: Subject<void> = new Subject();

    constructor(private service: SendInputTextService) { }

    ngOnInit() {
    }

    ngAfterContentInit() {
        this.service.inputResponse$.subscribe(res=> console.log(res));
    }

    public enterSubmit(input) {
        this.submit(input.value);
        input.value = null;
    }

    public submit(value) {
        const model: TextInputModel = {
            clientId: 60,
            language: 'en',
            text: value,
            contentType: 'SHORT_TEXT'
        }
        this.service.sendInputText(model).pipe(
            takeUntil(this._destroy$))
            .subscribe(res => this.service.inputResponse$.next(res));
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

}
