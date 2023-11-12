import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { RecyclingCenter } from 'src/app/models/RecyclingCenter';
import { Useror } from 'src/app/models/useror';
import { RecyclingCenterService } from 'src/app/services/recycling-center.service';
import { UserorService } from 'src/app/services/useror.service';

@Component({
  selector: 'app-listar-mi-centro',
  templateUrl: './listar-mi-centro.component.html',
  styleUrls: ['./listar-mi-centro.component.css']
})
export class ListarMiCentroComponent implements OnInit {

    dataSource: RecyclingCenter[]=[];
    userLast= new Useror();
    filteredData: RecyclingCenter[] = [];

    constructor(private rS: RecyclingCenterService,
      private userS:UserorService
      ) {}

      ngOnInit(): void {
        this.userS.list().subscribe({
          next: (users: Useror[]) => {
            this.userLast = users[users.length - 1];
      
            this.rS.getCentroForUser(this.userLast.idUser).pipe(take(1)).subscribe((data) => {
              this.dataSource = data.sort((a, b) => new Date(b.idUbication.ubicationDate).getTime() - new Date(a.idUbication.ubicationDate).getTime());

              this.filteredData = this.dataSource;
                      
            });
          },
          error: (error) => {
            console.error('Error al obtener las ubicaciones', error);
          }
        });


        this.rS.getList().subscribe((data=>{
          this.dataSource = data.sort((a, b) => new Date(b.idUbication.ubicationDate).getTime() - new Date(a.idUbication.ubicationDate).getTime());
        }))
      }
      

      eliminar(id:number){
        this.rS.delete(id).subscribe((data)=>{
          this.rS.list().subscribe((data)=>{
            this.rS.setList(data);
          });
        });
      }

}
