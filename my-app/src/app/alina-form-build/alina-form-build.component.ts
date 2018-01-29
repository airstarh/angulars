///<reference path="../../../node_modules/@angular/forms/src/validators.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-alina-form-build',
    templateUrl: './alina-form-build.component.html',
    styleUrls: ['./alina-form-build.component.css']
})
export class AlinaFormBuildComponent implements OnInit {
    private form: FormGroup;

    constructor(_FormBuilder: FormBuilder) {
        this.form = _FormBuilder.group({
            name: ['', Validators.required],
            contact: _FormBuilder.group({
                email:[],
                phone:[]
            }),
            topics: _FormBuilder.array([])
        });
    }

    get topics() {
        return this
            .form
            .get('topics') as FormArray
    }

    ngOnInit() {
    }

}
