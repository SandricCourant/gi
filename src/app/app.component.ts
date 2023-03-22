import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title: string = 'Mon site';
  currentYear: number = new Date().getFullYear();
  name: string = "Sandric Courant";

  constructor() { }

  ngOnInit(): void { }

  setName(newName: string) {
    this.name = newName;
  }
}
