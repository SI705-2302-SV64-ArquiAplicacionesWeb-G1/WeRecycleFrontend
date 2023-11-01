import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UbicationComponent } from './components/ubication/ubication.component';
import { CrearUbicationComponent } from './components/ubication/crear-ubication/crear-ubication.component';

const routes: Routes = [ {
  path: 'ubications', component: UbicationComponent, children: [
    { path: 'mapa', component: CrearUbicationComponent }

  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
