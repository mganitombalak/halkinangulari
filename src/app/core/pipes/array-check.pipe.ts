import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'arraycheck' })
export class ArrayCheckPipe implements PipeTransform {
    transform(value: Array<any>): boolean {
        return !(value && value.length > 0);
    }
}
