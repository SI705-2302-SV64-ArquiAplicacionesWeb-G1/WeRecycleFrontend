import { CreaeditaPublicationComponent } from './components/publication/creaedita-publication/creaedita-publication.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbicationComponent } from './components/ubication/ubication.component';
import { CrearUbicationComponent } from './components/ubication/crear-ubication/crear-ubication.component';
import { RecyclableMaterial } from './models/recyclable-material';
import { CreaeditaRecyclablematerialComponent } from './components/recyclable-material/creaedita-recyclablematerial/creaedita-recyclablematerial.component';
import { FrequenQuestions } from './models/frequenQuestions';
import { CreaeditaFrequenquestionsComponent } from './components/frequenquestions/creaedita-frequenquestions/creaedita-frequenquestions.component';
import { FrequenquestionsComponent } from './components/frequenquestions/frequenquestions.component';
import { UserorComponent } from './components/useror/useror.component';
import { CreaeditaUserorComponent } from './components/useror/creaedita-useror/creaedita-useror.component';
import { RolesComponent } from './components/roles/roles.component';
import { CreaeditaRolesComponent } from './components/roles/creaedita-roles/creaedita-roles.component';
import { RecyclableMaterialComponent } from './components/recyclable-material/recyclable-material.component';
import { ListarRecyclablematerialComponent } from './components/recyclable-material/listar-recyclablematerial/listar-recyclablematerial.component';
import { ListaRolesComponent } from './components/roles/lista-roles/lista-roles.component';
import { ListaUserorComponent } from './components/useror/lista-useror/lista-useror.component';
import { RecyclingCenterComponent } from './components/recycling-center/recycling-center.component';
import { CrearRecyclingCenterComponent } from './components/recycling-center/crear-recycling-center/crear-recycling-center.component';
import { EventsComponent } from './components/events/events.component';
import { CrearEventComponent } from './components/events/crear-event/crear-event.component';
import { PublicationComponent } from './components/publication/publication.component';
import { TypeRecursoComponent } from './components/type-recurso/type-recurso.component';
import { CreaeditaTiporecursoComponent } from './components/type-recurso/creaedita-tiporecurso/creaedita-tiporecurso.component';

const routes: Routes = [
  {
    path: 'RecyclableMaterialController',
    component: RecyclableMaterialComponent,
    children: [
      {
        path: 'nuevo',
        component: CreaeditaRecyclablematerialComponent,
      },
      {
        path: 'lista',
        component: ListarRecyclablematerialComponent,
      },
    ],
  },
  {
    path: 'frequentquestioncontroller',
    component: FrequenquestionsComponent,
    children: [
      { path: 'nuevo', component: CreaeditaFrequenquestionsComponent },
    ],
  },
  {
    path: 'ubications',
    component: UbicationComponent,
    children: [{ path: 'mapa', component: CrearUbicationComponent }],
  },
  {
    path: 'users',
    component: UserorComponent,
    children: [
      { path: 'user', component: CreaeditaUserorComponent },
      { path: 'lista', component: ListaUserorComponent },
    ],
  },
  {
    path: 'typeusers',
    component: RolesComponent,
    children: [
      {
        path: 'rol',
        component: CreaeditaRolesComponent,
      },
      {
        path: 'lista',
        component: ListaRolesComponent,
      },
    ],
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
  },

  {
    path: 'PublicationController',
    component: PublicationComponent,
    children: [
      { path: 'nuevo', component: CreaeditaPublicationComponent },
    ],
  },

  {
    path: 'TypeRecursoController',
    component: TypeRecursoComponent,
    children: [
      { path: 'nuevo', component: CreaeditaTiporecursoComponent },
    ],
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
