import { Injectable } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Contact } from 'src/app/modules/contacts/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsFirestoreService extends FirestoreService<Contact> {

  protected basePath = 'contacts';

  constructor(firestore: AngularFirestore) {
    super(firestore);
  }
}
