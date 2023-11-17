import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Publication } from 'src/app/models/publication';
import * as moment from 'moment';
import { Useror } from 'src/app/models/useror';
import { TypeRecurso } from 'src/app/models/typerecurso';
import { PublicationService } from 'src/app/services/publication.service';
import { UserorService } from 'src/app/services/useror.service';
import { TypeRecursoService } from 'src/app/services/type-recurso.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-piblication-id',
  templateUrl: './listar-piblication-id.component.html',
  styleUrls: ['./listar-piblication-id.component.css']
})
export class ListarPiblicationIdComponent implements OnInit{

  dataSource: MatTableDataSource<Publication> = new MatTableDataSource();
  publicacion: Publication = new Publication();
  mensaje: string = '';
  id: number = 0;

  listaUsuarios: Useror[] = [];
  listaTiporecurso: TypeRecurso[] = [];

  constructor(
    private pS: PublicationService,
    private uS: UserorService,
    private tS: TypeRecursoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.init();
    });

    this.uS.list().subscribe((data) => {
      this.listaUsuarios = data;
    });

    this.tS.list().subscribe((data) => {
      this.listaTiporecurso = data;
    });

    this.pS.listId(this.id).subscribe((data) => {
      this.dataSource = new MatTableDataSource([data]);
    });
  }
  init() {
    // No es necesario realizar acciones de inicialización en este caso
  }

  
}
