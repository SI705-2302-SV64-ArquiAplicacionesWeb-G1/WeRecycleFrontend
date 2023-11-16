import { Component, OnInit, ViewChild } from '@angular/core';
import { MatActionList } from '@angular/material/list';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RecyclableMaterial } from 'src/app/models/recyclable-material';
import { RecyclableMaterialService } from 'src/app/services/recyclable-material.service';

@Component({
  selector: 'app-listar-recyclablematerial',
  templateUrl: './listar-recyclablematerial.component.html',
  styleUrls: ['./listar-recyclablematerial.component.css'],
})
export class ListarRecyclablematerialComponent implements OnInit {
  dataSource: MatTableDataSource<RecyclableMaterial> = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = [
    'idRecyclableMaterial',
    'nameRecyclableMaterial',
    'descriptionRecyclableMaterial',
    'typeRecyclableMaterial',
  ];
  constructor(private uS: RecyclableMaterialService) {}
  ngOnInit(): void {
    this.uS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.uS.getlist().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
