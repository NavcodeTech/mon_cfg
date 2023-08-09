import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['/home'], {
      queryParams: {
        username: this.username,
        // You can add other parameters here if needed
      }
    });
  }
}
