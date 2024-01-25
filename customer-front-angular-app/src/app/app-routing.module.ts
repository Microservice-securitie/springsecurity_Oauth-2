import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./Customers/customers.component";
import {ProductsComponent} from "./Products/products.component";

const routes: Routes = [
  {path:"customers" , component : CustomersComponent},
  {path: "products", component : ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
