import { Habit } from '../habit';
export interface HabitsPage {
    loading: boolean;
    habits: Habit[];
    formStatus: string;
    creating: boolean;
}
