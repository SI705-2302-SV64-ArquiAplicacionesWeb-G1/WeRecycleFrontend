import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UbicationComponent } from './components/ubication/ubication.component';
import { CrearUbicationComponent } from './components/ubication/crear-ubication/crear-ubication.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ListarUbicationComponent } from './components/ubication/listar-ubication/listar-ubication.component';
import { MatTableModule } from '@angular/material/table';
import { RolesComponent } from './components/roles/roles.component';
import { UserorComponent } from './components/useror/useror.component';
import { RecyclableMaterialComponent } from './components/recyclable-material/recyclable-material.component';
import { CreaeditaRecyclablematerialComponent } from './components/recyclable-material/creaedita-recyclablematerial/creaedita-recyclablematerial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrequenquestionsComponent } from './components/frequenquestions/frequenquestions.component';
import { ListarFrequenquestionsComponent } from './components/frequenquestions/listar-frequenquestions/listar-frequenquestions.component';
import { CreaeditaFrequenquestionsComponent } from './components/frequenquestions/creaedita-frequenquestions/creaedita-frequenquestions.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { CreaeditaUserorComponent } from './components/useror/creaedita-useror/creaedita-useror.component';
import { MatError } from '@angular/material/form-field';
import { CreaeditaRolesComponent } from './components/roles/creaedita-roles/creaedita-roles.component';
import { ListarRecyclablematerialComponent } from './components/recyclable-material/listar-recyclablematerial/listar-recyclablematerial.component';
import { ListaRolesComponent } from './components/roles/lista-roles/lista-roles.component';
import { ListaUserorComponent } from './components/useror/lista-useror/lista-useror.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MapaSidenavComponent } from './components/mapa-sidenav/mapa-sidenav.component';
import { RecyclingCenterComponent } from './components/recycling-center/recycling-center.component';
import { ListarRecyclingCenterComponent } from './components/recycling-center/listar-recycling-center/listar-recycling-center.component'; // Importa CommonModule desde @angular/common
import { CrearRecyclingCenterComponent } from './components/recycling-center/crear-recycling-center/crear-recycling-center.component';
import { EventsComponent } from './components/events/events.component';
import { CrearEventComponent } from './components/events/crear-event/crear-event.component';
import { ListarEventComponent } from './components/events/listar-event/listar-event.component';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    AppComponent,
    UbicationComponent,
    CrearUbicationComponent,
    ListarUbicationComponent,
    RolesComponent,
    UserorComponent,
    RecyclableMaterialComponent,
    CreaeditaRecyclablematerialComponent,
    FrequenquestionsComponent,
    ListarFrequenquestionsComponent,
    CreaeditaFrequenquestionsComponent,
    CreaeditaUserorComponent,
    CreaeditaRolesComponent,
    ListarRecyclablematerialComponent,
    ListaRolesComponent,
    ListaUserorComponent,
    MapaSidenavComponent,
    RecyclingCenterComponent,
    ListarRecyclingCenterComponent,
    CrearRecyclingCenterComponent,
    EventsComponent,
    CrearEventComponent,
    ListarEventComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    GoogleMapsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
