import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'values'})
export class ValuesPipe implements PipeTransform {
    transform(value: {}, args?: any[]): any[] {
        // create instance vars to store keys and final output
        let keyArr: any[] = Object.keys(value);
        return keyArr;
    }
}