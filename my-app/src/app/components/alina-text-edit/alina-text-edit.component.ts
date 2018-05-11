/*
*  ATTENTION!!!
*  Tones of hours!!!
*  @link https://coryrylan.com/blog/build-a-angular-modal-dialog-with-angular-animate
*  @link https://stackblitz.com/edit/angular-ksz4ml?file=src%2Fapp%2Fdialog%2Fdialog.component.html
* */
import {
    Component, EventEmitter, HostListener, Input, OnInit, Output,
    ViewEncapsulation
} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector:      'app-alina-text-edit',
    templateUrl:   './alina-text-edit.component.html',
    styleUrls:     ['./alina-text-edit.component.css'],
})
export class AlinaTextEditComponent implements OnInit {

    @Input('stateVisible') stateVisible: boolean = false;
    @Output() stateVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input('passedItem') passedItem: any = {};
    @Input('passedProp') passedProp: string = 'default';
    @Input('passedValue') passedValue: string = '';


    constructor() { }

    ngOnInit() {
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        event.stopPropagation();
        if (event.key === 'Escape') {
            this.onCancel(event);
        }
    }


    onCancel(event) {
        event.stopPropagation();
        this.passedItem[this.passedProp] = this.passedValue;
        this.stateVisible = false;
        this.stateVisibleChange.emit(this.stateVisible);
    }

    onSave(event){
        event.stopPropagation();
        this.stateVisible = false;
        this.stateVisibleChange.emit(this.stateVisible);
    }

    /*fix*/
    stopEventBubbling(event){
        event.stopPropagation();
    }
}
