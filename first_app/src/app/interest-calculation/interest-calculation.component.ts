import { Component, Input } from '@angular/core';
import { calculation } from './model/calculation';

@Component({
  selector: 'app-interest-calculation',
  templateUrl: './interest-calculation.component.html',
  styleUrls: ['./interest-calculation.component.css']
})
export class InterestCalculationComponent {
  @Input() calc:calculation;

  constructor()
  {
   this.calc=new calculation();
  }
  ngInit()
  {

  }
}
