import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecyclableMaterialComponent } from './recyclable-material/recyclable-material.component';
import { CreaeditaRecyclablematerialComponent } from './recyclable-material/creaedita-recyclablematerial/creaedita-recyclablematerial.component';
import { ListarRecyclablematerialComponent } from './recyclable-material/listar-recyclablematerial/listar-recyclablematerial.component';
import { FrequenquestionsComponent } from './frequenquestions/frequenquestions.component';
import { CreaeditaFrequenquestionsComponent } from './frequenquestions/creaedita-frequenquestions/creaedita-frequenquestions.component';
import { CrearUbicationComponent } from './ubication/crear-ubication/crear-ubication.component';
import { UbicationComponent } from './ubication/ubication.component';
import { UserorComponent } from './useror/useror.component';
import { CreaeditaUserorComponent } from './useror/creaedita-useror/creaedita-useror.component';
import { ListaUserorComponent } from './useror/lista-useror/lista-useror.component';
import { RolesComponent } from './roles/roles.component';
import { CreaeditaRolesComponent } from './roles/creaedita-roles/creaedita-roles.component';
import { ListaRolesComponent } from './roles/lista-roles/lista-roles.component';
import { CrearRecyclingCenterComponent } from './recycling-center/crear-recycling-center/crear-recycling-center.component';
import { RecyclingCenterComponent } from './recycling-center/recycling-center.component';
import { EventsComponent } from './events/events.component';
import { CrearEventComponent } from './events/crear-event/crear-event.component';
import { PublicationComponent } from './publication/publication.component';
import { CreaeditaPublicationComponent } from './publication/creaedita-publication/creaedita-publication.component';
import { TypeRecursoComponent } from './type-recurso/type-recurso.component';
import { CreaeditaTiporecursoComponent } from './type-recurso/creaedita-tiporecurso/creaedita-tiporecurso.component';

const routes: Routes = [  {
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
