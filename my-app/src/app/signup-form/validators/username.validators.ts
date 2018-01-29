///<reference path="../../../../node_modules/@angular/forms/src/model.d.ts"/>
import {AbstractControl, ValidationErrors} from "@angular/forms";

export class UsernameValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') != -1) {
            return {cannotContainSpace: true}
        }
        return null;
    }

    static unique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Sewa') {
                    resolve({notUnique: true});
                } else {
                    resolve(null);
                }
            }, 2500);
        });
    }


}