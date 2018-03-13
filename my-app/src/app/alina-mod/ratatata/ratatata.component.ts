import {Component, OnInit}       from '@angular/core';
import {MatDatepickerInputEvent} from "@angular/material";

@Component({
               selector:    'app-ratatata',
               templateUrl: './ratatata.component.html',
               styleUrls:   ['./ratatata.component.css']
           })
export class RatatataComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    events: string[] = [];

    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
        this.events.push(`${type}: ${event.value}`);
    }
}
