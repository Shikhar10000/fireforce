import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HabitService } from '../../services/habit.service';
import { Observable } from 'rxjs';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-habits-form',
  templateUrl: './habits-form.component.html',
  styleUrls: ['./habits-form.component.scss']
})
export class HabitsFormComponent implements OnInit {

  public form: FormGroup;

  status$: Observable<string>;

  constructor(
    private habitsService: HabitService,
    private bottomSheetRef: MatBottomSheetRef<HabitsFormComponent>
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    });
    this.status$ = this.habitsService.formStatus$;
  }

  isInvalid(name: string) {
    return this.form.controls[name].invalid
      && (this.form.controls[name].dirty || this.form.controls[name].touched);
  }

  async submit() {
    this.form.disable();
    await this.habitsService.create({
      ...this.form.value
    });
    this.form.reset();
    this.form.enable();
    this.bottomSheetRef.dismiss();
  }

}
