import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { EventsService } from 'src/app/services/events.service';
import { Events } from 'src/app/models/events';

@Component({
  selector: 'app-listar-event',
  templateUrl: './listar-event.component.html',
  styleUrls: ['./listar-event.component.css']
})
export class ListarEventComponent implements OnInit{

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    dataSource: MatTableDataSource<Events> = new MatTableDataSource();
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    displayedColumns: string[] = [
    'nombre',
    'direccion',
    'fecha',
    'hora',
    ];

    constructor(private eS: EventsService) {}
ngOnInit(): void {
this.eS.list().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
this.eS.getList().subscribe((data) => {
this.dataSource = new MatTableDataSource(data);
this.dataSource.paginator = this.paginator;
});
}
eliminar(id: number) {
this.eS.delete(id).subscribe((data) => {
this.eS.list().subscribe((data) => {
this.eS.setList(data);
});
});
}
filter(en: any) {
this.dataSource.filter = en.target.value.trim();
}
}
