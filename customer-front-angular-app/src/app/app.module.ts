import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './Customers/customers.component';
import { ProductsComponent } from './Products/products.component';
import {HttpClientModule} from "@angular/common/http";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {SecurityService} from "./service/security-service.service";

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'appRealm',
        clientId: 'micro-customers-client'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,

  ],
  providers: [
    {provide : APP_INITIALIZER,deps : [KeycloakService],useFactory : initializeKeycloak,multi:true},
    SecurityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
