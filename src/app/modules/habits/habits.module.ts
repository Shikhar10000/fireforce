import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabitsPageComponent } from './components/habits-page/habits-page.component';

import { CoreModule } from '../../core/core.module';
import { HabitsRoutingModule } from './habit-routing.module';
import { HabitsListComponent } from './components/habits-list/habits-list.component';
import { HabitsFormComponent } from './components/habits-form/habits-form.component';



@NgModule({
  declarations: [HabitsPageComponent, HabitsListComponent, HabitsFormComponent],
  imports: [
    CommonModule,
    HabitsRoutingModule,
    CoreModule
  ],
  entryComponents: [HabitsFormComponent],
})
export class HabitsModule { }
