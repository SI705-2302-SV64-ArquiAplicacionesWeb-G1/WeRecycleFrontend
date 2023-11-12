import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { RecyclingCenter } from './models/RecyclingCenter';
import { RecyclingCenterService } from './services/recycling-center.service';
import { UserorService } from './services/useror.service';
import { Useror } from './models/useror';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { LoginService } from './services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private ngUnsubscribe = new Subject<void>();
  isHomePage: boolean;
  recyclingCenter: any;
  users: Useror[]=[];
  userLast = this.users[this.users.length - 1];
  dataSource: RecyclingCenter[] = [];
  role : string ='';
  constructor(private router: Router, private rS: RecyclingCenterService, private userS: UserorService, private loginService:LoginService) {
    this.isHomePage = this.router.url === '/';
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url === '/';
      }
    });
  }

  ngOnInit(): void {
    this.userS.list().subscribe({
      next: (users: Useror[]) => {
        this.userLast = users[users.length - 1];
        console.log(this.userLast)
      },
      error: (error) => {
        console.error('Error al obtener las ubicaciones', error);
      }
    });

  }

 redirectToRecyclingCenter() {
  this.rS.getCentroForUser(this.userLast.idUser)
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((data) => {
      console.log("Data from server:", data);  // Imprime los datos recibidos del servidor
      this.dataSource = data;
      this.recyclingCenter = this.dataSource;
      console.log("recyclingCenter:", this.recyclingCenter);  // Imprime el valor de recyclingCenter
  
      if (this.recyclingCenter.length > 0) {
        this.router.navigate(['/center-recycling/mi-centro']);
        console.log("si entro");
      } else {
        console.log("no entro" + this.recyclingCenter.length);
        this.router.navigate(['/center-recycling/nuevo']);
      }
    });
}

  

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  cerrar(){
    sessionStorage.clear();  
  }
  verificar(){
    this.role = this.loginService.showRole();
    return this.loginService.verificar();
  }

  validarRol(){
    if(this.role == 'ADMIN' || this.role == 'WEB'){
      return true;
    }else{
      return false;
    }
  }
}
