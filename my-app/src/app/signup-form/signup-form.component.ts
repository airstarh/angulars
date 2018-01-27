import {Component} from '@angular/core';

////1.
import {FormGroup, FormControl} from "@angular/forms";
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
        username: new FormControl('Sewa', [
            Validators.required,
            Validators.minLength(3),
            UsernameValidators.cannotContainSpace
        ]),
        password: new FormControl('Sewa', Validators.required)
    });

    get username(){
        return this.formBla.get('username');
    }

}
