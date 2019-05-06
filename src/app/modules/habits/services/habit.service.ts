import { Injectable } from '@angular/core';
import { HabitsPageStore } from './habits-page.store';
import { HabitFirestore } from './habit.firestore';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Habit } from '../habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {

  constructor(
    private firestore: HabitFirestore,
    private store: HabitsPageStore
  ) {
    this.firestore.col$().pipe(
      tap(habits => {
        this.store.patch({
          loading: false,
          habits,
        }, `habits collection subscription`);
      })
    ).subscribe();
  }

  get habits$(): Observable<Habit[]> {
    return this.store.state$.pipe(map(state => state.loading ? [] : state.habits));
  }

  get loading$(): Observable<boolean> {
    return this.store.state$.pipe(map(state => state.loading));
  }

  get noResults$(): Observable<boolean> {
    return this.store.state$.pipe(
      map(state => !state.loading && state.habits && state.habits.length === 0)
    );
  }

  get formStatus$(): Observable<string> {
    return this.store.state$.pipe(map(state => state.formStatus));
  }

  get creating$(): Observable<boolean> {
    return this.store.state$.pipe(map(state => state.creating));
  }

  create(habit: Habit): any {

    this.store.patch({
      loading: true,
      habits: [],
      formStatus: 'Saving...'
    }, 'habit create');

    return this.firestore.create(habit).then(() => {
      this.store.patch({ formStatus: 'Saved!' }, 'habit create SUCCESS');
      setTimeout(() => this.store.patch({
        formStatus: ''
      }, 'habit create timeout reset formStatus'), 1000);
    }).catch(err => {
      this.store.patch({
        loading: false,
        formStatus: 'an error ocurred'
      }, 'habit create ERROR');
    });
  }

  delete(id: string): any {
    this.store.patch({ loading: true, habits: [] }, 'habit delete');
    return this.firestore.delete(id).catch(err => {
      this.store.patch({
        loading: false,
        formStatus: 'An error ocurred'
      }, 'habit delete ERROR');
    });
  }

}
