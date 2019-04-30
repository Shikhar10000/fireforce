import { Record } from '../core/models/record';

export interface Contacts extends Record {
    firstName: string;
    lastName: string;
    workPhone: number;
}
