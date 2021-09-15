import { ProductUpdadeComponent } from './components/product/product-updade/product-updade.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {ProductCrudComponent}  from './views/product-crud/product-crud.component'


const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "produtos",
  component: ProductCrudComponent
},{
  path: "produtos/create",
  component: ProductCreateComponent
},
{
  path: "produtos/update/:id",
  component: ProductUpdadeComponent 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
