import {Component, OnInit} from '@angular/core';
import {SecurityService} from "./service/security-service.service";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Customer-front-Angular-app';

  ngOnInit(): void {
  }
  constructor(public SecurityService : SecurityService, private keycloak : KeycloakService) {

  }
  async login(){
      await this.keycloak.login({
        redirectUri: window.location.origin
      });
  }

  logout(){
    this.keycloak.logout(window.location.origin)
  }
}
