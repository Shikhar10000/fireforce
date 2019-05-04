export interface IValidator {
    name: string;
    validator: any;
    message: string;
}

export interface IControl {
    label?: string;
    name?: string;
    inputType?: string;
    options?: string[];
    collections?: any;
    type: string;
    value?: any;
    validations?: IValidator[];
}
