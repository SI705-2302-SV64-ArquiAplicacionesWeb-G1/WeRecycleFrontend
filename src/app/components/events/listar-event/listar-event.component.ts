import { Observable } from 'rxjs';
import { map, shareReplay, take } from 'rxjs/operators';

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
  eventSelected: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    dataSource: Events[]=[];
    filteredData: Events[] = [];
      @ViewChild(MatPaginator) paginator!: MatPaginator;
      displayedColumns: string[] = [
        'nombre',
        'direccion',
        'fecha',
        'hora'
      ];

    constructor(private eS: EventsService) {}

    ngOnInit(): void {
      this.eS.list().pipe(take(1)).subscribe((data) => {
        // Ordena la lista por fecha en orden descendente
        this.dataSource = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        this.filteredData = this.dataSource;
    
        // Selecciona automáticamente el último registro si la lista no está vacía
        if (this.dataSource.length > 0) {
          this.selectEvent(this.dataSource[0]);
        }
      });
    }


    filter(en: any) {
      const filterValue = en.target.value.toLowerCase();
      this.filteredData = this.dataSource.filter((item) =>
        item.title.toLowerCase().includes(filterValue)
      );
    } 

    selectEvent(event: any) {
      this.eventSelected = event;
    }
}
