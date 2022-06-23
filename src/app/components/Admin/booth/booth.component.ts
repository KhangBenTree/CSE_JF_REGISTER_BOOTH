import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BoothService } from 'src/app/services/booth.service';

@Component({
  selector: 'app-booth',
  templateUrl: './booth.component.html',
  styleUrls: ['./booth.component.css']
})
export class BoothComponent implements OnInit {
  isAuth: boolean = false;
  data:any;
  subjectform = this.fb.group({
    
  });
  constructor(
    private booth: BoothService,
    private fb:FormBuilder
  ){
    const token = localStorage.getItem('token');
    if(token){
      this.isAuth=true
    };
  }
  refresh(){
    this.booth.all().subscribe(res => {
      this.data=res.result;
    })
  }
  ngOnInit(): void {
    this.booth.all().subscribe(res => {
      this.data=res.result;
    })
  }
  onEdit(is: number){
    alert("Clicked on button")
  }
  onDelete(id: number){
    this.booth.delete(id).subscribe(res => {
      this.refresh();
    })
  }
  onSubmit(){

  }
  ngDestroy(){

  }

}
