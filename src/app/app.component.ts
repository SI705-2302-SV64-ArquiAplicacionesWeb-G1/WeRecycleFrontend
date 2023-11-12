import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHomePage: boolean;
  role : string ='';
  constructor(private router: Router, private loginService:LoginService) {
    this.isHomePage = this.router.url === '/';

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = this.router.url === '/';
      }
    });
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
