import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BoothService } from 'src/app/services/booth.service';

@Component({
  selector: 'app-boothmap',
  templateUrl: './boothmap.component.html',
  styleUrls: ['./boothmap.component.css']
})
export class BoothmapComponent implements OnInit {
  isAuth: boolean = false;
  data:any;
  countLine: any;
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
    this.countLine = 0;
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
