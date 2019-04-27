import { Injectable } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AccountFirestore extends FirestoreService<Account> {

  protected basePath = 'accounts';

  constructor(firestore: AngularFirestore) {
    super(firestore);
  }
}
