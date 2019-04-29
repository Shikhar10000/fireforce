import { Injectable } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Contacts } from 'src/app/models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsFirestoreService extends FirestoreService<Contacts> {

  protected basePath = 'contacts';

  constructor(firestore: AngularFirestore) {
    super(firestore);
  }
}
