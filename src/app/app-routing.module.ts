import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrequenQuestions } from './models/frequenQuestions';
import { CreaeditaFrequenquestionsComponent } from './components/frequenquestions/creaedita-frequenquestions/creaedita-frequenquestions.component';
import { FrequenquestionsComponent } from './components/frequenquestions/frequenquestions.component';

const routes: Routes = [
  {
    path: 'frequentquestioncontroller',
    component: FrequenquestionsComponent,
    children: [{ path: 'nuevo', component: CreaeditaFrequenquestionsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
