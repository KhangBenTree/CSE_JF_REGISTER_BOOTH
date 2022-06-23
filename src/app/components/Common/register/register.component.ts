import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import {BusinessService} from 'src/app/services/business.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  "formRegister": FormGroup
  maxId: any; 
  constructor(
    private fb: FormBuilder, 
    private account: AccountService,
    private router: Router,
    private business: BusinessService
    ) {
    
    this.formRegister = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      representation: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.business.maxid().subscribe(res => {
      this.maxId = res.result;
      this.formRegister.patchValue({
        id: this.maxId + 1
      })
    })
    
   }


  ngOnInit(): void {
  }
  async register(){

    if (this.formRegister.invalid) {
      console.log(" 1 ")
      return false
    }
    console.log(this.formRegister.value)
    await this.account.register_account(this.formRegister.value).subscribe( async res =>  {
      // console.log(res)
    }); 
    await this.account.login({
      email: this.formRegister.get('email')!.value,
      password: this.formRegister.get('password')!.value
    }).subscribe( async res => {
      if(res.status === true){
        // Lưu mà token vào localStores
        await localStorage.setItem('token',res.result)
        await localStorage.setItem('admin',res.isAdmin)
        this.account.check_token(res.result).subscribe(async res => {
          await localStorage.setItem('user', JSON.stringify(res.data.data.data))
        })
        await this.router.navigate(['/']);
        await window.location.reload();
      }else{
        alert("Thông tin đăng nhập không hợp lệ")
      }    
    })
    
    return true

  }
}
