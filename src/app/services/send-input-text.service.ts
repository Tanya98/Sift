import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TextInputModel } from '../model/text-input-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SendInputTextService {

    constructor(private http: HttpClient) { }
    private url = environment.apiBaseUrl;

    public subject: BehaviorSubject<any> = new BehaviorSubject<any>('');

    public sendInputText(model: TextInputModel): any {
        return this.http.post(`${this.url}/classify/text`, model);
    }
}