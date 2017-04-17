import { Observable } from 'rxjs/Rx';
import { EventEmitter } from 'events';
import { Injectable } from '@angular/core';

import { Subject }    from 'rxjs/Subject';

@Injectable()
export class NavbarService {

    private subject = new Subject<any>();

    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }


}
