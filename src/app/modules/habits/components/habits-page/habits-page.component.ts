import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatBottomSheet } from '@angular/material';
import { HabitsFormComponent } from '../habits-form/habits-form.component';

@Component({
  selector: 'app-habits-page',
  templateUrl: './habits-page.component.html',
  styleUrls: ['./habits-page.component.scss']
})
export class HabitsPageComponent implements OnInit {

  creating$: Observable<boolean>;

  constructor(
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
  }

  openCreate(): void {
    this.bottomSheet.open(HabitsFormComponent);
  }

}
