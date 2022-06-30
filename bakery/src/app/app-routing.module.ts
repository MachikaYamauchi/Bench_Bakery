import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { RecommendsComponent } from './recommends/recommends.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:"recommends", component:RecommendsComponent},
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
