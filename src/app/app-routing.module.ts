import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'product/create', component: CreateProductComponent},
  {path: 'product/list', component: ListProductComponent},
  {path: 'product/update', component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
