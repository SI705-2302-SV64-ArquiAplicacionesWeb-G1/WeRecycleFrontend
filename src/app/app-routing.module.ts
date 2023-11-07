import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbicationComponent } from './components/ubication/ubication.component';
import { CrearUbicationComponent } from './components/ubication/crear-ubication/crear-ubication.component';
import { RecyclableMaterial } from './models/recyclable-material';
import { CreaeditaRecyclablematerialComponent } from './components/recyclable-material/creaedita-recyclablematerial/creaedita-recyclablematerial.component';
import { FrequenQuestions } from './models/frequenQuestions';
import { CreaeditaFrequenquestionsComponent } from './components/frequenquestions/creaedita-frequenquestions/creaedita-frequenquestions.component';
import { FrequenquestionsComponent } from './components/frequenquestions/frequenquestions.component';
import { RecyclingCenterComponent } from './components/recycling-center/recycling-center.component';
import { CrearRecyclingCenterComponent } from './components/recycling-center/crear-recycling-center/crear-recycling-center.component';
import { EventsComponent } from './components/events/events.component';
import { CrearEventComponent } from './components/events/crear-event/crear-event.component';

const routes: Routes = [
    {
    path:'RecyclableMaterialController',
    component:RecyclableMaterial,
    children:[
      {path: 'nuevo', component:CreaeditaRecyclablematerialComponent}
    ]
  },
  {
    path: 'frequentquestioncontroller',
    component: FrequenquestionsComponent,
    children: [{ path: 'nuevo', component: CreaeditaFrequenquestionsComponent }],
  },
  {
  path: 'ubications', component: UbicationComponent, children: [
    { path: 'mapa', component: CrearUbicationComponent }

  ]
  },

  {
    path: 'center-recycling', component: RecyclingCenterComponent, children: [
      { path: 'nuevo', component: CrearRecyclingCenterComponent }
  
    ]
  },

  {
    path: 'event', component: EventsComponent, children: [
      { path: 'nuevo', component: CrearEventComponent }
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
