import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/Admin/business/business.component';
import {BoothComponent} from './components/Admin/booth/booth.component';
import { HomeComponent } from './components/Common/home/home.component';
import { LoginComponent } from './components/Common/login/login.component';
import { ApproveComponent } from './components/Admin/approve/approve.component';
import { AdminComponent } from './components/Admin/admin/admin.component';
import { RegistrationComponent } from './components/Admin/registration/registration.component';
import { RegisterComponent } from './components/Common/register/register.component';
import { MyRegisterComponent } from './components/Business/my-register/my-register.component';
import { RegisterBoothComponent } from './components/Business/register-booth/register-booth.component';
import { BoothmapComponent } from './components/Common/boothmap/boothmap.component';
import { ContactComponent } from './components/Common/contact/contact.component';
 
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'boothmap', component: BoothmapComponent},
  {path: 'login', component: LoginComponent},
  {path:'admin/business',component: BusinessComponent},
  {path:'admin/booth',component: BoothComponent},
  {path:'admin/approve',component: ApproveComponent},
  {path:'admin/admin',component: AdminComponent},
  {path: 'admin/registration', component: RegistrationComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'business/registerbooth/:id', component: RegisterBoothComponent},
  {path: 'business/myregister',component: MyRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
