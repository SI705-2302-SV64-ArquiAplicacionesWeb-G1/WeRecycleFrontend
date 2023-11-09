import { BreakpointObserver, Breakpoints  } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { RecyclingCenter } from 'src/app/models/RecyclingCenter';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RecyclingCenterService } from 'src/app/services/recycling-center.service';

@Component({
  selector: 'app-listar-recycling-center',
  templateUrl: './listar-recycling-center.component.html',
  styleUrls: ['./listar-recycling-center.component.css']
})
export class ListarRecyclingCenterComponent implements OnInit{
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    dataSource: MatTableDataSource<RecyclingCenter> = new MatTableDataSource();
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    displayedColumns: string[] = [
    'nombre',
    'direccion',
    'horaApertura',
    'telefono',
    ];

    constructor(private rS: RecyclingCenterService) {}
ngOnInit(): void {
  
this.rS.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.rS.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
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
/*
center = {lat: -12.046374, lng: -77.042793};
zoom = 10;
heatmapOptions = {radius: 5};
heatmapData = [

];*/
}
