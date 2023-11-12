

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { Publication } from 'src/app/models/publication';
import { PublicationService } from 'src/app/services/publication.service';
import { Useror } from 'src/app/models/useror';
import { TypeRecurso } from 'src/app/models/typerecurso';
import { UserorService } from 'src/app/services/useror.service';
import { TypeRecursoService } from 'src/app/services/type-recurso.service';

@Component({
  selector: 'app-creaedita-publication',
  templateUrl: './creaedita-publication.component.html',
  styleUrls: ['./creaedita-publication.component.css'],
})
export class CreaeditaPublicationComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  publicacion: Publication = new Publication();
  mensaje: string = '';
  maxFecha: Date = moment().add(-1, 'days').toDate();
  /*tipos: { value: string; viewValue: string }[] = [
    { value: 'Pública', viewValue: 'Pública' },
    { value: 'Privada', viewValue: 'Privada' },
  ];*/
  edicion : boolean = false;
  id: number =0 ;

  listaUsuarios: Useror[] = [];
  listaTiporecurso: TypeRecurso[] = [];

  constructor(
    private pS: PublicationService,
    private uS: UserorService,
    private tS: TypeRecursoService,
    
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      idPublication: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      archivo:['', Validators.required],
      datePublication: ['', Validators.required],
      id_TypeRecurso: ['', Validators.required],
      idUser: ['', Validators.required],
    });

    this.uS.list().subscribe((data) => {
      this.listaUsuarios = data;
    });

    this.tS.list().subscribe((data) => {
      this.listaTiporecurso = data;
    });

  }
  aceptar(): void {
    if (this.form.valid) {
      this.publicacion.idPublication = this.form.value.idPublication;
      this.publicacion.title = this.form.value.title;
      this.publicacion.description=this.form.value.description;
      this.publicacion.archivo=this.form.value.archivo;
      this.publicacion.datePublication = this.form.value.datePublication;
      this.publicacion.id_TypeRecurso.idTypeRecurso = this.form.value.id_TypeRecurso.idTypeRecurso;
      this.publicacion.idUser.idUser = this.form.value.idUser.idUser;

      this.pS.insert(this.publicacion).subscribe((data) => {
        this.pS.list().subscribe((data) => {
          this.pS.setlist(data);
        });
      });
      this.router.navigate(['PublicationController']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
   
      console.log(this.form.value);
      // Resto del código para enviar la solicitud al servidor
    
    
  }

  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }

  init(){
    if(this.edicion){
      this.pS.listId(this.id).subscribe((data)=>{
        this.form = new FormGroup({
          idPublication: new FormControl(data.idPublication),
          title: new FormControl(data.title),
          description: new FormControl(data.description),
          archivo: new FormControl(data.archivo),
          datePublication : new FormControl(data.datePublication),
          id_TypeRecurso : new FormControl(data.id_TypeRecurso),
          idUser:new FormControl(data.idUser),
        })
      })
    }
  }

 
}
