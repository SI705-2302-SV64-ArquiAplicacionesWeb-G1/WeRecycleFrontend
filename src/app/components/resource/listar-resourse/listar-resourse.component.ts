import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Resource } from 'src/app/models/resource';
import { ResourseService } from 'src/app/services/resourse.service';
@Component({
  selector: 'app-listar-resourse',
  templateUrl: './listar-resourse.component.html',
  styleUrls: ['./listar-resourse.component.css']
})
export class ListarResourseComponent implements OnInit{
  dataSource: MatTableDataSource<Resource> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'codigo',
    'titulo',
    'descripcion',
    'rutas',
    'accion02',
  ];
  constructor(private rS: ResourseService){}
  ngOnInit(): void{
    this.rS.list().subscribe((data)=> {
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
    this.rS.getList().subscribe((data)=> {
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator=this.paginator;
    });
  }
  
  eliminar(id: number) {
    this.rS.delete(id).subscribe((data) => {
    this.rS.list().subscribe((data) => {
    this.rS.setList(data);
    });
    });
  }

  filter(en: any) {
    this.dataSource.filter = en.target.value.trim();
  }
}
