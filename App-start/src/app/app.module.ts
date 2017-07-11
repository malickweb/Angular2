import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RoutersModule } from "./routers/routers.module";

import { AppComponent } from './app.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { InputComponent } from './input/input.component';
import { CounterComponent } from './counter/counter.component';
import { BoundTextboxComponent } from './bound-textbox/bound-textbox.component';
import { FormsComponent } from './forms/forms.component';
import { RoutersComponent } from './routers/routers.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';


const appRoutes = [];

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CounterComponent,
    BoundTextboxComponent,
    FormsComponent,
    RoutersComponent,
    ProgressBarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    RoutersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
