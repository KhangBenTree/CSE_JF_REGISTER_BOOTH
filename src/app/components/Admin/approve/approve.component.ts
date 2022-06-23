import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApproveService } from 'src/app/services/approve.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {
  isAuth: boolean = false;
  data:any;
  subjectform = this.fb.group({
    
  });
  constructor(
    private approve: ApproveService,
    private fb:FormBuilder
  ){
    const token = localStorage.getItem('token');
    if(token){
      this.isAuth=true
    };
  }
  refresh(){
    this.approve.all().subscribe(res => {
      this.data=res.result;
    })
  }
  async ngOnInit(): Promise<void> {
    await this.approve.all().subscribe(res => {
       
      this.data = res.result;
      for (var key in this.data) {
        console.log(key)  
      }
    })
     
}
  onEdit(is: number){
    alert("Clicked on button")
  }
  onDelete(id: number){
    this.approve.delete(id).subscribe(res => {
      this.refresh();
    })
  }

}
