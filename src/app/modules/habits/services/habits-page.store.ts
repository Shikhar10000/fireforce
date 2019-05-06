import { HabitsPage } from '../states/habits-page';
import { StoreService } from 'src/app/core/services/store/store.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HabitsPageStore extends StoreService<HabitsPage> {
    protected store = 'habits-page';

    constructor() {
        super({
            loading: true,
            habits: [],
            creating: false,
        });
    }
}
