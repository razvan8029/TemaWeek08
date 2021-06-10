import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
  styleUrls: ['counterStyle.css']
})
export class CounterComponent {
  public currentCount = 0;


  public incrementCounter() {
    this.currentCount++;
  }
}
