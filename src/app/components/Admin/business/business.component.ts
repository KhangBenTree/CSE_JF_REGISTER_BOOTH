import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BusinessService } from 'src/app/services/business.service';
import { setOptions, Notifications } from '@mobiscroll/angular';
setOptions({
  theme: 'window',
  themeVariant: 'light'
});
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})

export class BusinessComponent implements OnInit {
  isAuth: boolean = false;
  data:any;
  subjectform = this.fb.group({
    
  });
  constructor(
    private business: BusinessService,
    private fb:FormBuilder,
    public notify: Notifications
  ){
    const token = localStorage.getItem('token');
    if(token){
      this.isAuth=true
    };
   
  }
  refresh(){
    this.business.all().subscribe(res => {
      this.data=res.result;
    })
  }
  ngOnInit(): void {
    this.business.all().subscribe(res => {
      this.data=res.result;
    })
  }
  onEdit(is: number){
    alert("Clicked on button")
  }
  onDelete(id: number){
    alert('Đã xóa id: '+ id)
    this.business.delete(id).subscribe(res => {
      this.refresh();
    })
  }
  showPrompt(): void {
    this.notify.prompt({
        title: 'Sign in to iTunes Store',
        message: 'Enter the Apple ID password for "hello@mobiscroll.com".',
        placeholder: 'Password',
        inputType: 'password',
    });
  }
  showAlert(): void {
    this.notify.alert({
        title: 'Cellular Data is Turned Off for "Safari"',
        message: 'You can turn on cellular data for this app in Settings.'
    });
  }

  showConfirm(): void {
      this.notify.confirm({
          title: 'Use location service?',
          message: 'Help apps determinde location. This means sending anonymous location data, even when no apps are running.',
          okText: 'Agree',
          cancelText: 'Disagree',
      });
  }
  onSubmit(){

  }
  ngDestroy(){

  }

}
