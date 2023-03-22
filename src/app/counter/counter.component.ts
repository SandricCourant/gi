import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css', '../button/button.component.css']
})

export class CounterComponent implements OnInit {
  count: number;

  constructor() {
    this.count = 0;
  }

  ngOnInit(): void { }

  resetCount() {
    this.count = 0;
  }

  addCount = () => {
    this.count++;
  }
}
