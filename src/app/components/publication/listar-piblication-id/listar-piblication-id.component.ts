
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Publication } from 'src/app/models/publication';
import * as moment from 'moment';
import { Useror } from 'src/app/models/useror';
import { TypeRecurso } from 'src/app/models/typerecurso';
import { PublicationService } from 'src/app/services/publication.service';
import { UserorService } from 'src/app/services/useror.service';
import { TypeRecursoService } from 'src/app/services/type-recurso.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Comment } from 'src/app/models/commentts';
import { CommenttsService } from 'src/app/services/commentts.service';

@Component({
  selector: 'app-listar-piblication-id',
  templateUrl: './listar-piblication-id.component.html',
  styleUrls: ['./listar-piblication-id.component.css'],
})
export class ListarPiblicationIdComponent implements OnInit {
  coment: Comment = new Comment();
  dataSourcecoment: MatTableDataSource<Comment[]> = new MatTableDataSource();
  dataSource: MatTableDataSource<Publication> = new MatTableDataSource();
  publicacion: Publication = new Publication();
  mensaje: string = '';
  id: number = 0;

  idPublication: number = 0;
  title: string = '';
  description: string = '';
  archivo: string = '';
  datePublication: Date = new Date();
  id_TypeRecurso: TypeRecurso = new TypeRecurso();
  idUser: Useror = new Useror();  
  

  listaUsuarios: Useror[] = [];
  listaTiporecurso: TypeRecurso[] = [];
  listacomentarios: Comment[] = [];
  constructor(
    private pS: PublicationService,
    private uS: UserorService,
    private tS: TypeRecursoService,
    private cS: CommenttsService,
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
    this.cS.listIdP(this.id).subscribe(
      (data) => {
        console.log("Ejecutado correctamente");
        this.listacomentarios = data;
        console.log(this.listacomentarios);
       this.dataSourcecoment = new MatTableDataSource([data]);
      },
      (error) => {
        console.error("Error en la solicitud:", error);
      }
    );
    this.pS.listId(this.id).subscribe((data) => {
      this.dataSource = new MatTableDataSource([data]);
    
    });
    


  }
  init() {
    // No es necesario realizar acciones de inicialización en este caso
  }
}
