import { AccountsPage } from '../states/accounts-page';
import { StoreService } from 'src/app/core/services/store/store.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AccountsPageStore extends StoreService<AccountsPage> {
    protected store = 'accounts-page';

    constructor() {
        super({
            loading: true,
            accounts: [],
        });
    }
}
