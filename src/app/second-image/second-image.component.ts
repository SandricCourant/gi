import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-image',
  templateUrl: './second-image.component.html',
  styleUrls: ['./second-image.component.css']
})
export class SecondImageComponent implements OnInit {
  desc: string = 'Un chaton mignon';
  link: string = 'assets/img/chaton1.jpg';
  desc2 : string = 'Un autre chaton mignon';
  link2 : string = 'assets/img/chaton2.jpg';
  desc3 : string = 'Encore un chaton';
  link3 : string = 'assets/img/chaton3.jpg';

  displayImg: number = 1;

  constructor() { }
  ngOnInit(): void { }

  changeImg = (nb: number) => {
    this.displayImg = nb;
  }
}
