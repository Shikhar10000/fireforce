import { Record } from '../models/record';
export interface ListView {
    loading: boolean;
    records: Record[];
}
