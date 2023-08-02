import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  n1:number=100;
  n2:number=200;
  result:number=this.n1+this.n2;
  title = 'first_app';
}
