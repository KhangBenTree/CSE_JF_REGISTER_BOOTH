import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RegistrationService } from 'src/app/services/registration.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isAuth: boolean = false;
  data:any;

  subjectform = this.fb.group({
    
  });
  constructor(
    private registration: RegistrationService,
    private fb:FormBuilder
  ){
    const token = localStorage.getItem('token');
    if(token){
      this.isAuth=true
    };
  }
  refresh(){
    this.registration.all().subscribe(res => {
      this.data=res.result;
    })
  }
  ngOnInit(): void {
    this.registration.all().subscribe(res => {
      this.data=res.result;
    })
  
  }
  onEdit(is: number){
    alert("Clicked on button")
  }
  onDelete(id: number){
    this.registration.delete(id).subscribe(res => {
      this.refresh();
    })
  }
  onSubmit(){

  }
  ngDestroy(){

  }

}
