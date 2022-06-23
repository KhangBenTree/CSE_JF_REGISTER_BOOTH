import { Component } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any ;
  isAuth = (localStorage.getItem('user'));
  isAdmin = (localStorage.getItem('admin') == "true");
  title = 'CSE_JF_REGISTRATION';
  constructor(private account: AccountService){
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('name');
    console.log(name,token)
   
  }
  ngOnInit(){
    if(localStorage.getItem('user')) this.user = JSON.parse(localStorage.getItem('user')!);
    else{
      this.user = {
        name: "LOGIN"
      }
    }
  }
}
