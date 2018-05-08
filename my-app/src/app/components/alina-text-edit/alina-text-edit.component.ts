import {
    ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output,
    ViewEncapsulation
} from '@angular/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector:      'app-alina-text-edit',
    templateUrl:   './alina-text-edit.component.html',
    styleUrls:     ['./alina-text-edit.component.css'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlinaTextEditComponent implements OnInit/*, OnChanges */{

    @Input('stateVisible') stateVisible: boolean = false;
    @Input('passedItem') passedItem: any = {};
    @Input('passedProp') passedProp: string = 'default';
    @Input('passedValue') passedValue: string = '';
    @Output() stateVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();


    constructor() { }

    ngOnInit() {
    }

    /*ngOnChanges() {
        // changes.prop contains the old and the new value...
        console.log("args ++++++++++");
        console.log(arguments);
    }*/

    onCancel() {
        this.passedItem[this.passedProp] = this.passedValue;
        this.resetPassedData();
        this.stateVisible = false;
        this.stateVisibleChange.emit(this.stateVisible);
    }

    onSave(){
        this.resetPassedData();
        this.stateVisible = false;
        this.stateVisibleChange.emit(this.stateVisible);
    }

    resetPassedData() {
        // this.passedItem = {};
        // this.passedProp = 'default';
        // this.passedValue = '';
    }
}
