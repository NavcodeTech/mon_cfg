import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customer:Customer;
  customer1:Customer[];
  customerinfo():void{
    alert('id is $(this.customer.id)\n name is $(this.customer.name)\n salary is $(this.customer.salary)');
  }

  constructor()
  {
    this.customer={
      'id':10383,
      'name':'Naveen Kumar',
      'salary':23909,
      'image':'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg',
      'width':200,
      'height':150,
    };
    this.customer1=[
      {
        'id':10382,
        'name':'shyam Kumar',
        'salary':28909,
        'image':'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg',
        'width':200,
        'height':150,
      },
      {
        'id':10381,
        'name':'Rohan Kumar',
        'salary':23609,
        'image':'http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf.jpg',
        'width':200,
        'height':150,
      },
      {
        'id':10387,
        'name':'sachin Kumar',
        'salary':33909,
        'image':'http://i.annihil.us/u/prod/marvel/i/mg/3/03/52603663b553d.jpg',
        'width':200,
        'height':150,
      }
    ]

  }
}
