import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UpdateComponent } from './update/update.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"products/:id", component:ProductDetailsComponent},
  {path:"about", component:AboutComponent},
  {path:"admin", component:AdminComponent},
  {path:"login", component:LoginComponent},
  {path:"update/:id", component:UpdateComponent},
  {path:"signup", component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
