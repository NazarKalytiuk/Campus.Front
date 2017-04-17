import { MenuItem } from '../_model/menu';
import { isBoolean } from 'util';
import { Observable, Subject } from 'rxjs/Rx';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class MenuService {

    public menu = new Subject<any>();
    private teacherMenu = new Array<MenuItem>({ url: "profile", icon: "person", text: "Profile" }, { url: "грд", icon: "star", text: "star2" });
    private teacherSecondaryMenu = new Array<MenuItem>({ url: "profile", icon: "person", text: "Profile" }, { url: "грд", icon: "star", text: "star2" });
    private studentMenu = new Array<MenuItem>(
        { url: "profile", icon: "person", text: "Профіль" },
        { url: "registration", icon: "person", text: "Дошка" },
        { url: "home", icon: "person", text: "Чат" },
        { url: "ulr1", icon: "person", text: "Розклад" },
        { url: "ulr2", icon: "person", text: "Поточний контроль" },
        { url: "ulr3", icon: "person", text: "РНП" },
        { url: "ulr4", icon: "person", text: "Опитування" },
        { url: "ulr5", icon: "person", text: "Контакти" },
    );
    private studentSecondaryMenu = new Array<MenuItem>(
        { url: "ulr6", icon: "settings", text: "Налаштування" },
        { url: "ulr7", icon: "help", text: "Надіслати відгук" },
        { url: "ulr8", icon: "exit_to_app", text: "Вийти" },
    );
    constructor() { }

    getMenu(): Observable<any> {
        this.menu.next(this.studentMenu);
        return this.menu.asObservable();
    }
    getSecondaryMenu(): Observable<any> {
        this.menu.next(this.studentSecondaryMenu);
        return this.menu.asObservable();
    }

    private show = new Subject<any>();

    getShow(): Observable<any> {
        this.show.next(true);
        return this.show.asObservable();
    }
}
