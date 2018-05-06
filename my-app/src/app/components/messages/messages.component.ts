import {Component, HostListener, OnInit} from '@angular/core';
import {MessageService}                  from '../../services/message.service';
import {
    trigger,
    state,
    style,
    animate,
    transition
}                                        from '@angular/animations';

@Component({
    selector:    'app-messages',
    templateUrl: './messages.component.html',
    styleUrls:   ['./messages.component.css'],
    animations:  [
        trigger('mStateEmpty', [
            state('full', style({transform: 'scale(1)'})),
            transition('void => *', [
                style({transform: 'scale(0)'}),
                animate(200)
            ]),
            transition('* => void', [
                animate(200, style({transform: 'scale(0.005)'}))
            ]),
        ])
    ]
})
export class MessagesComponent implements OnInit {

    constructor(public _MessageService: MessageService) {
    }

    ngOnInit() {
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        event.stopPropagation();
        if (event.key === 'Escape') {
            this._MessageService.clear();
        }
    }
}
