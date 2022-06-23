import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html', 
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  "formLogin": FormGroup
  user: any;
  isAuth: boolean = false;
  isAdmin: boolean = false;
  constructor(private fb: FormBuilder, private account: AccountService,private router: Router) {
     
   }

  async ngOnInit(): Promise<void> {
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    const token = await localStorage.getItem('token');
    if(token){
      this.user = await JSON.parse(localStorage.getItem('user')!)
      this.isAuth = true;
      
    };
     if(localStorage.getItem('admin')=='true'){
      this.isAdmin=true;
    }
   
    await console.log("token: " +token)
    await console.log("user: " +this.user)
    await console.log("isAuth: "+this.isAuth)
    await console.log("isAdmin: " +this.isAdmin)
  }
  async onLogin() {
    
    if (this.formLogin.invalid) {
      console.log("Không thấy form")
      return false
    }
    console.log("Thấy form: "+ this.formLogin.value)
    // console.log(this.formLogin.value)
    await this.account.login(this.formLogin.value).subscribe( async res1 =>  {
      if(res1.status === true){
        // Lưu mà token vào localStores
        await this.account.check_token(res1.result).subscribe( async res => {
           await localStorage.setItem('token',res1.result)
           await localStorage.setItem('admin',res1.isAdmin)
           await localStorage.setItem('user', JSON.stringify(res.data.data.data))
           console.log("vô storage r nè")
            window.location.reload()  
        })
      }else{
        alert("Thông tin đăng nhập không hợp lệ")
      }  
    });
    return true
  }
  check(){
    
    console.log("check user: " +this.user + " / " + localStorage.getItem("user"))
    console.log("check isAuth: "+this.isAuth+ " / " + localStorage.getItem("token"))
    console.log("check isAdmin: " +this.isAdmin+ " / " + localStorage.getItem("admin"))
  }
  logout(): void{
    this.isAuth = false;
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
    localStorage.clear();
    window.location.reload()
  }
  
}
