import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  isAuth: boolean = false;
  data:any;
  subjectform = this.fb.group({
    
  });
  constructor(
    private admin: AdminService,
    private fb:FormBuilder
  ){
    const token = localStorage.getItem('token');
    if(token){
      this.isAuth=true
    };
  }
  refresh(){
    this.admin.all().subscribe(res => {
      this.data=res.result;
    })
  }
  ngOnInit(): void {
    this.admin.all().subscribe(res => {
      this.data=res.result;
    })
  }
  onEdit(is: number){
    alert("Clicked on button")
  }
  onDelete(id: number){
    this.admin.delete(id).subscribe(res => {
      this.refresh();
    })
  }
  onSubmit(){

  }
  ngDestroy(){

  }

}
