import {Component} from '@angular/core';

////1.
import {FormGroup, FormControl, FormArray} from "@angular/forms";
////3
import {Validators} from "@angular/forms";
import {UsernameValidators} from "./validators/username.validators";

@Component({
    selector: 'signup-form',
    templateUrl: './signup-form.component.html',
    styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

    ////2
    formBla = new FormGroup({
        accountBla: new FormGroup({
            username: new FormControl(
                'Sewa',
                [
                    Validators.required,
                    Validators.minLength(3),
                    UsernameValidators.cannotContainSpace
                ],
                [
                    UsernameValidators.unique
                ]),
            password: new FormControl('piSewa', Validators.required)
        }),

        topicsFormArrayBla: new FormArray([]),
    });

    get username() {
        return this.formBla.get('accountBla.username');
    }

    formSubmitBla() {
        // let isvalid = _HttpRequest.send(this.formBla.value);
        // if (!isvalid) {
        //     this.formBla.setErrors();
        // }
        this.formBla.setErrors({
            wrongLogin: true
        });
    }

    addTopicBla(topicFormVar: HTMLInputElement) {
        this
            .topicsFormArrayBla
            .push(new FormControl(topicFormVar.value));

        topicFormVar.value = '_';
    }

    deleteTopicBla(topicFormVar: FormControl) {
        console.log("topicFormVar ++++++++++");
        console.log(topicFormVar);

        let index = this
            .topicsFormArrayBla
            .controls
            .indexOf(topicFormVar);
        this.topicsFormArrayBla.removeAt(index);
    }

    get topicsFormArrayBla() {
        return this
            .formBla
            .get('topicsFormArrayBla') as FormArray
    }
}
