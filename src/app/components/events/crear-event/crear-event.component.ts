import { Component, OnInit } from '@angular/core';
import { Ubication } from 'src/app/models/ubication';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecyclingCenter } from 'src/app/models/RecyclingCenter';
import { EventsService } from 'src/app/services/events.service';
import { UbicationService } from 'src/app/services/ubication.service';
import { Events } from 'src/app/models/events';

@Component({
  selector: 'app-crear-event',
  templateUrl: './crear-event.component.html',
  styleUrls: ['./crear-event.component.css']
})


export class CrearEventComponent implements OnInit {
  form: FormGroup= new FormGroup({});;
  event: Events = new Events();
  mensaje: string = '';
  listaUbicacion: Ubication[] = [];


  constructor(
    private eS: EventsService,
    private router: Router,
    private formBuilder: FormBuilder,
    private uS: UbicationService
  ) {
    
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idEvent:[''],
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: [0, [Validators.required]],
      hora: [0, [Validators.required]],
      numberParticipant: [0, Validators.required],
      idUbication: [0, Validators.required],
      addressUbication:['', Validators.required],
      cityUbication:['', Validators.required],
      contactUbication:[0, Validators.required],
      typeUbication:['', Validators.required],
      descUbication:['', Validators.required],
    });

  }

  onSubmit() {
    if (this.form.valid) {
      let newUbication: Ubication = {
        idUbication: 0,
        ubicationDate: new Date(),
        addressUbication: this.form.get('addressUbication')?.value,
        cityUbication: this.form.get('cityUbication')?.value,
        contactUbication: this.form.get('contactUbication')?.value,
        typeUbication: this.form.get('typeUbication')?.value,
        descUbication: this.form.get('descUbication')?.value,
      };

       
      this.uS.insert(newUbication).subscribe({
        next: (createdUbication: Ubication) => {
          this.uS.list().subscribe({
            next: (ubications: Ubication[]) => {
              const lastUbication = ubications[ubications.length - 1];
              this.addEvent(lastUbication);
            },
            error: (error) => {
              console.error('Error al obtener las ubicaciones', error);
            }
          });
        },
        error: (error) => {
          console.error('Error al insertar la ubicación', error);
        }
      });
     
      
      
    }
  }
  addEvent(ubication: Ubication) {
    this.event.title = this.form.value.title;
    this.event.date = this.form.value.date;
    this.event.description = this.form.value.description;
    this.event.hora = this.form.value.hora;
    this.event.idUbication = ubication;
  
    this.eS.insert(this.event).subscribe(
      () => {
        console.log('Recycling Center inserted successfully.');
        this.router.navigate(['/event']);
      },
      (error) => {
        console.error('Error al insertar el centro de reciclaje', error);
      }
    );
  }
  
}


