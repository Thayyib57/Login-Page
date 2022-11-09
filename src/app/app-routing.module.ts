import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HomeComponent } from './components/home/home.component';
import { LandlineComponent } from './components/landline/landline.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  {path: '', component:LandlineComponent},
  {path: 'login', component:LoginComponent},
  {path: 'create', component:CreateComponent},
  {path: 'home', component:HomeComponent},
  {path: 'forgot-password', component: ForgetPasswordComponent },
  {path: 'verify-email-address', component: VerifyEmailComponent },
  {path: 'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
