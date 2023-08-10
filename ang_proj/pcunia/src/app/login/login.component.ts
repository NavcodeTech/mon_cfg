import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() username:string='';
  @Input() password: string = '';
  
  @Input() user1:User;
  submitted:boolean;

  constructor(private router: Router) {
    this.user1=new User();
    this.submitted=false
  }

  onLogin() {
    this.submitted=true;
    console.log('Username:', this.user1);
    this.router.navigate(['/home'], {
      queryParams: {
        username: this.user1.username,
        
      }
    });
  }
}
