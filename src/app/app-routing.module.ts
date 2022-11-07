import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { LandlineComponent } from './components/landline/landline.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component:LandlineComponent},
  {path: 'login', component:LoginComponent},
  {path: 'create', component:CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
