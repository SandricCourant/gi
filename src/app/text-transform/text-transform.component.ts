import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-transform',
  templateUrl: './text-transform.component.html',
  styleUrls: ['./text-transform.component.css']
})
export class TextTransformComponent implements OnInit {
  isTruncate:boolean = true;

  prices: number[] = [100, 28, 43, 714, 65];

  sales: number[] = [12, 54, 11, 10, 78, 19, 65, 38, 72];

  sentences: string[] = [
    "That was quite the spectacle wasn't it?",
    "Her performance was inconsistently erratic during the earlier part of her vocation.",
    "This is ambrosial!",
    "On occasion the land is seismic in Florida.",
    "That was a fascinating documentary that we visually examined the other day.",
  ];
  constructor() { }
  ngOnInit(): void { }
  
  changeTruncate(){
    this.isTruncate = !this.isTruncate;
  }
}
