import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() username:string='';
  @Input() password: string = '';
  @Input() email:String='';
  @Input() name:String='';
  @Input() confirmPassword:String=''
  
  @Input() user1:User;
  submitted:boolean;

  constructor(private router: Router) {
    this.user1=new User();
    this.submitted=false
  }

  onSubmit() {
    this.submitted=true;
    console.log('Username:', this.user1);
    this.router.navigate(['/home'], {
      queryParams: {
        username: this.user1.username,
        name:this.user1.name,
        email:this.email,
        user1:this.user1,
        // You can add other parameters here if needed
      }
    });
  }
}
