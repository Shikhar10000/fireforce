import { Inject } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const logging = (method: string, res: any, id?: string) => {
  if (!environment.production) {
    console.groupCollapsed(`Firestore Service [${this.basePath}] [${method}] ${id}`);
    console.log(res);
    console.groupEnd();
  }
};

export abstract class FirestoreService<T> {

  protected abstract basePath: string;

  constructor(@Inject(AngularFirestore) protected firestore: AngularFirestore) { }

  private get collection() {
    return this.firestore.collection(`${this.basePath}`);
  }

  doc$(id: string): Observable<T> {
    return this.firestore.doc<T>(`${this.basePath}/${id}`).valueChanges().pipe(
      tap(res => logging('doc$', res, id)),
    );
  }

  col$(queryFn: QueryFn): Observable<T[]> {
    return this.firestore.collection<T>(`${this.basePath}`, queryFn).valueChanges().pipe(
      tap(res => logging('col$', res))
    );
  }

  async create(data: T): Promise<void> {
    const ref = await this.collection.add(data);
    return logging('create', ref, ref.id);
  }

  async delete(id: string): Promise<void> {
    const ref = await this.collection.doc(id).delete();
    return logging('create', ref, id);
  }

}
