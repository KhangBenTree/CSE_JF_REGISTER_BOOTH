import { Component, OnInit} from '@angular/core';
import {RegistrationService} from 'src/app/services/registration.service'
import {BoothService} from 'src/app/services/booth.service'

@Component({
  selector: 'app-my-register',
  templateUrl: './my-register.component.html',
  styleUrls: ['./my-register.component.css']
})
export class MyRegisterComponent implements OnInit {
  isAdmin:any;
  myregister:any;
  mybooth:any;
  user:any;
  constructor( private register: RegistrationService , private booth: BoothService) {
    if (localStorage.getItem('admin')== "true") this.isAdmin = true;
    else this.isAdmin = false;
    this.user = JSON.parse(localStorage.getItem('user')!)
    this.register.getbyId_business(this.user.id).subscribe(res => {
      this.myregister = res.result;
    }) 
    this.booth.getbyId_business(this.user.id).subscribe(res => {
      this.mybooth = res.result;
    }) 
   }

  ngOnInit(): void {

  }
  onDeleteR(id: number): void {
    this.register.delete(id).subscribe(res => {
      if (res.result) alert("Sẽ xóa đơn đăng ký gian hàng này?")
    })
    window.location.reload()
  }
  onDeleteB(id: number): void {
    this.booth.remove_owner(id).subscribe(res => {
      if (res.result.affectedRows) alert("Sẽ xóa "+ res.result.affectedRows +" gian hàng?")
    })
    window.location.reload()
  }
}


