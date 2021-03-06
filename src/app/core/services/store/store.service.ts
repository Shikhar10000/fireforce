import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

export abstract class StoreService<T> {

  protected bs: BehaviorSubject<T>;
  state$: Observable<T>;
  state: T;
  previous: T;

  protected abstract store: string;

  constructor(initialValue: Partial<T>) {
    this.bs = new BehaviorSubject<T>(initialValue as T);
    this.state$ = this.bs.asObservable();

    this.state = initialValue as T;
    this.state$.subscribe(state => {
      this.state = state;
    });
  }

  patch(newValue: Partial<T>, event: string = 'Not specified') {
    this.previous = this.state;
    const newState = Object.assign({}, this.state, newValue);
    this.logging('patch', this.store, event, newValue, newState);
    this.bs.next(newState);
  }

  set(newValue: Partial<T>, event: string = 'Not specified') {
    this.previous = this.state;
    const newState = Object.assign({}, newValue) as T;
    this.logging('set', this.store, event, newValue, newState);
    this.bs.next(newState);
  }

  private logging = (method: string, store: string, event: string, newValue, newState) => {
    if (!environment.production) {
      console.groupCollapsed(`[${store} store] [${ method }] [event: ${event}]`);
      console.log('change', newValue);
      console.log('prev', this.previous);
      console.log('next', newState);
      console.groupEnd();
    }
  };
}
