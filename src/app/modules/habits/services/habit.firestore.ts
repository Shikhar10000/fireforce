import { Injectable } from '@angular/core';
import { FirestoreService } from 'src/app/core/services/firestore/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Habit } from '../habit';

@Injectable({
  providedIn: 'root'
})
export class HabitFirestore extends FirestoreService<Habit> {

  protected basePath = 'habits';

  constructor(firestore: AngularFirestore) {
    super(firestore);
  }
}
