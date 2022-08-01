import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateComponent } from './update/update.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"products", component:ProductsComponent},
  {path:"signup", component:SignupComponent},
  {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  {path:"admin", component:AdminComponent},
  {path:"update/:id", component:UpdateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
