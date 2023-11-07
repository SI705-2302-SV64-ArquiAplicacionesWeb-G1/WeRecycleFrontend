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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
