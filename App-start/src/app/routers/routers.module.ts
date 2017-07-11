import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InputComponent } from '../input/input.component';
import { CounterComponent } from '../counter/counter.component';
import { BoundTextboxComponent } from '../bound-textbox/bound-textbox.component';
import { FormsComponent } from '../forms/forms.component';
import {ProgressBarComponent} from "../progress-bar/progress-bar.component";

const appRoutes: Routes = [
  {path: 'input', component: InputComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'bound', component: BoundTextboxComponent},
  {path: 'form', component: FormsComponent},
  {path: 'progressBar', component: ProgressBarComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)

  ],
  declarations: []
})
export class RoutersModule { }
