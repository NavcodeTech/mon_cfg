import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  registeredUsername: string = '';
  registeredEmail:string='';
  loginusername:string='';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the registered username from the query parameters
    this.route.queryParams.subscribe(params => {
      this.registeredUsername = params['username'];
      this.registeredEmail=params['email'];
      this.loginusername=params['username'];
      // console.log(registeredEmail);
      console.log(this.registeredUsername);
      // You can access other parameters here if needed
    });
  }
}
