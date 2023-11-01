import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RolesComponent } from './components/roles/roles.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserorComponent } from './components/useror/useror.component';
import { RecyclableMaterialComponent } from './components/recyclable-material/recyclable-material.component';
import { CreaeditaRecyclablematerialComponent } from './components/recyclable-material/creaedita-recyclablematerial/creaedita-recyclablematerial.component';

@NgModule({
  declarations: [
    AppComponent,
    RolesComponent,
    UserorComponent,
    RecyclableMaterialComponent,
    CreaeditaRecyclablematerialComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatToolbarModule,
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
