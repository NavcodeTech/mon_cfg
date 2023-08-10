import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  registeredUsername: string = '';
  registeredEmail:string='';
  loginusername:string='';
  user1: User;

  constructor(private route: ActivatedRoute) {
    this.user1=new User();
  }

  ngOnInit() {
    // Retrieve the registered username from the query parameters
    this.route.queryParams.subscribe(params => {
      this.registeredUsername = params['username'];
      this.registeredEmail=params['email'];
      console.log(params['user1']);
      this.user1=params['user1'];
      // this.loginusername=params['username'];
      // console.log(registeredEmail);
      console.log(this.registeredUsername);
      console.log(this.user1);
      // You can access other parameters here if needed
    });
  }
}
