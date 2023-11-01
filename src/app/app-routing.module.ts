import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecyclableMaterial } from './models/recyclable-material';
import { CreaeditaRecyclablematerialComponent } from './components/recyclable-material/creaedita-recyclablematerial/creaedita-recyclablematerial.component';

const routes: Routes = [
  {
    path:'RecyclableMaterialController',
    component:RecyclableMaterial,
    children:[
      {path: 'nuevo', component:CreaeditaRecyclablematerialComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
