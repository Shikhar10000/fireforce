import { Injectable } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Account } from '../../../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountFirestore extends FirestoreService<Account> {

  protected basePath = 'accounts';

  constructor(firestore: AngularFirestore) {
    super(firestore);
  }
}
