import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/modules/accounts/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss']
})
export class AccountsListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'plan', 'enterprise'];

  loading$: Observable<boolean>;
  accounts$: Observable<Account[]>;
  noResults$: Observable<boolean>;

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.loading$ = this.accountService.loading$;
    this.noResults$ = this.accountService.noResults$;
    this.accounts$ = this.accountService.accounts$;
  }

  delete(employee: Account) {
    this.accountService.delete(employee.id);
  }

}
