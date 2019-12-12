import { Type } from '@angular/core';

export interface IModalOptions {
    showModalHeader: boolean;
    showModalFooter: boolean;
    title: string;
    activeComponent: Type<any>;
    componentMode: ComponentMode;
    data: any;
}