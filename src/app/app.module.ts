import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Common/home/home.component';
import { LoginComponent } from './components/Common/login/login.component';
import { BusinessComponent } from './components/Admin/business/business.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './components/Admin/admin/admin.component';
import { BoothComponent } from './components/Admin/booth/booth.component';
import { ApproveComponent } from './components/Admin/approve/approve.component';
import { RegistrationComponent } from './components/Admin/registration/registration.component';
import { OrderByPipe } from './services/pipe.service';
import { RegisterComponent } from './components/Common/register/register.component';
import { RegisterBoothComponent } from './components/Business/register-booth/register-booth.component';
import { MyRegisterComponent } from './components/Business/my-register/my-register.component';
import { ContactComponent } from './components/Common/contact/contact.component';
import { BoothmapComponent } from './components/Common/boothmap/boothmap.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe ,
    HomeComponent,
    LoginComponent,
    BusinessComponent,
    AdminComponent,
    BoothComponent,
    ApproveComponent,
    RegistrationComponent,
    RegisterComponent,
    RegisterBoothComponent,
    MyRegisterComponent,
    ContactComponent,
    BoothmapComponent
  ],
  imports: [ 
    MbscModule, 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
