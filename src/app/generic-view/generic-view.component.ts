import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { SendInputTextService } from '../services/send-input-text.service';
import { ClassifyTextModel } from '../model/classify-text-model';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-generic-view',
    templateUrl: './generic-view.component.html',
    styleUrls: ['./generic-view.component.less']
})
export class GenericViewComponent implements OnInit {

    public faAngleRight = faAngleRight;
    public data: ClassifyTextModel = null;
    public responseData$: Observable<any>;

    constructor(private service: SendInputTextService) {
        this.responseData$ = this.service.inputResponse$.asObservable().pipe(filter(x => x!== null));
    }

    ngOnInit(): void {}

}
