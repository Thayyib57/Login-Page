import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreateComponent } from './components/create/create.component';
import { LandlineComponent } from './components/landline/landline.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatMenuModule} from '@angular/material/menu';
import { ToastrModule } from 'ngx-toastr';
import { AngprojInterceptor } from './interceptor/angproj.interceptor';
import { HomeComponent } from './components/home/home.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ProfileComponent } from './components/profile/profile.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    LandlineComponent,
    HomeComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule,
    MatMenuModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    HotToastModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    FirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AngprojInterceptor,multi:true},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }