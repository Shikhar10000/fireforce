import { Account } from '../account';
export interface AccountsPage {
    loading: boolean;
    accounts: Account[];
    formStatus: string;
}
