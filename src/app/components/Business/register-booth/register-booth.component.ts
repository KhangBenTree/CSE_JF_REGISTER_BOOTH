import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RegistrationService} from 'src/app/services/registration.service';
import { BoothService } from 'src/app/services/booth.service';
import { BusinessService} from 'src/app/services/business.service';

@Component({
  selector: 'app-register-booth',
  templateUrl: './register-booth.component.html',
  styleUrls: ['./register-booth.component.css']
})
export class RegisterBoothComponent implements OnInit {
  Auth: boolean = false;
  Owner:any;
  isAdmin:any;
  data:any;
  idbooth :any
  constructor(
    private route: ActivatedRoute,
     private register: RegistrationService , 
     private booth: BoothService,
     private business: BusinessService
     ) {
    if (localStorage.getItem('token')) this.Auth = true;
    if (localStorage.getItem('admin')== "true") this.isAdmin = true;
    else this.isAdmin = false;
    this.route.params.subscribe(res => {
      this.idbooth = res['id']
    });
    this.register.getbyId_booth(this.idbooth).subscribe(res => {
      this.data = res.result;
    }) 
    this.booth.getbyId(this.idbooth).subscribe(res => {
      this.business.getbyId(res.result[0].owner).subscribe(res => {
        console.log(res)
        this.Owner = res.result[0].name
      })
    })
    
   }

  ngOnInit(): void {

  }
  Register(): void {
    
    window.location.reload()
  }
}
