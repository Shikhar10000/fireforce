import { Account } from '../../models/account';
export interface AccountsPage {
    loading: boolean;
    accounts: Account[];
    formStatus: string;
}
