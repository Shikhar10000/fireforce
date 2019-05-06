import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HabitService } from '../../services/habit.service';
import { Habit } from '../../habit';

@Component({
  selector: 'app-habits-list',
  templateUrl: './habits-list.component.html',
  styleUrls: ['./habits-list.component.scss']
})
export class HabitsListComponent implements OnInit {

  loading$: Observable<boolean>;
  habits$: Observable<Habit[]>;
  noResults$: Observable<boolean>;

  constructor(
    private habitService: HabitService
  ) { }

  ngOnInit() {
    this.loading$ = this.habitService.loading$;
    this.noResults$ = this.habitService.noResults$;
    this.habits$ = this.habitService.habits$;
  }

  delete(employee: Account) {
    this.habitService.delete(employee.id);
  }

}
