import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Resource } from 'src/app/models/resource';
import { ResourseService } from 'src/app/services/resourse.service';
@Component({
  selector: 'app-creaedita-resourse',
  templateUrl: './creaedita-resourse.component.html',
  styleUrls: ['./creaedita-resourse.component.css']
})
export class CreaeditaResourseComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  recurso: Resource = new Resource();
  mensaje: string ='';
  listaRecursos: Resource[]=[];
  id: number=0;
  edicion: boolean=false;
  constructor(
    private rS: ResourseService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
    ){}

    ngOnInit():void{
      this.route.params.subscribe((data: Params) => {
        this.id=data['id'];
        this.edicion=data['id']!=null;
        this.init();
     });
     this.form=this.formBuilder.group({
      id_Recurso:[''],
      RecursoTitulo: ['', Validators.required],
      Recursodescripcion: ['', Validators.required],
      Recursorutas: ['', Validators.required],
     });
    }

    aceptar():void{
      if(this.form.valid){
        this.recurso.id_Recurso=this.form.value.id_Recurso;
        this.recurso.RecursoTitulo=this.form.value.RecursoTitulo;
        this.recurso.Recursodescripcion=this.form.value.Recursodescripcion;
        this.recurso.Recursorutas=this.form.value.Recursorutas;
        if(this.edicion){
          this.rS.update(this.recurso).subscribe(() => {
          this.rS.list().subscribe((data) => {
          this.rS.setList(data);
        });
      });
      } else {
      this.rS.insert(this.recurso).subscribe((data) => {
      this.rS.list().subscribe((data) => {
      this.rS.setList(data);
      });
      });
      }
      this.router.navigate(['recurso']);
      } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
      }
      }
      obtenerControlCampo(nombreCampo: string): AbstractControl {
      const control = this.form.get(nombreCampo);
      if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
      }
      return control;
      }
      
      init() {
        if (this.edicion) {
          this.rS.listId(this.id).subscribe((data) => {
          this.form = new FormGroup({
            id_Recurso: new FormControl(data.id_Recurso),
            RecursoTitulo: new FormControl(data.RecursoTitulo),
            Recursodescripcion: new FormControl(data.Recursodescripcion),
            Recursorutas:new FormControl(data.Recursorutas),
          });
          });
          }
        } 
}
