import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  name:string = "";
  title:string = "";
  
  @Output() newNameEvent = new EventEmitter<string>();

  constructor(){
    
  }
  ngOnInit(): void {
    this.title = "Click on me !";
  }
  setValue = () => {
    this.name = "proud of you !";
  }
  changeName = (value: string) => {
    this.newNameEvent.emit(value)
  }
}
