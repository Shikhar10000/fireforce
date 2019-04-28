import { Injectable } from '@angular/core';
import { AccountFirestore } from './account.firestore';
import { AccountsPageStore } from './accounts-page.store';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private firestore: AccountFirestore,
    private store: AccountsPageStore
  ) {
    this.firestore.col$().pipe(
      tap(accounts => {
        this.store.patch({
          loading: false,
          accounts,
        }, `accounts collection subscription`);
      })
    ).subscribe();
  }

  get accounts$(): Observable<Account[]> {
    return this.store.state$.pipe(map(state => state.loading ? [] : state.accounts));
  }

  get loading$(): Observable<boolean> {
    return this.store.state$.pipe(map(state => state.loading));
  }

  get noResults$(): Observable<boolean> {
    return this.store.state$.pipe(
      map(state => !state.loading && state.accounts && state.accounts.length === 0)
    );
  }

  get formStatus$(): Observable<string> {
    return this.store.state$.pipe(map(state => state.formStatus));
  }

  create(account: Account): any {

    this.store.patch({
      loading: true,
      accounts: [],
      formStatus: 'Saving...'
    }, 'account create');

    return this.firestore.create(account).then(() => {
      this.store.patch({ formStatus: 'Saved!' }, 'account create SUCCESS');
      setTimeout(() => this.store.patch({
        formStatus: ''
      }, 'account create timeout reset formStatus'), 1000);
    }).catch(err => {
      this.store.patch({
        loading: false,
        formStatus: 'an error ocurred'
      }, 'account create ERROR');
    });
  }

  delete(id: string): any {
    this.store.patch({ loading: true, accounts: [] }, 'account delete');
    return this.firestore.delete(id).catch(err => {
      this.store.patch({
        loading: false,
        formStatus: 'An error ocurred'
      }, 'account delete ERROR');
    });
  }
}
