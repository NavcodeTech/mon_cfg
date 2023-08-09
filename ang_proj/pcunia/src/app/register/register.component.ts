import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  email:String='';
  name:String='';
  confirmPassword:String=''
  
  @Input() user1:User;
  submitted:boolean;

  constructor(private router: Router) {
    this.user1=new User();
    this.submitted=false
  }

  onSubmit() {
    this.submitted=true;
    this.router.navigate(['/home'], {
      queryParams: {
        username: this.username,
        name:this.name,
        email:this.email
        // You can add other parameters here if needed
      }
    });
  }
}
