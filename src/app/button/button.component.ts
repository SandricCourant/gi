import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  users: any;
  name: string = "";
  title: string = "";
  id: string = "";

  @Output() newNameEvent = new EventEmitter<string>();

  constructor(private route: ActivatedRoute, private dataService : DataService) {
    this.title = "Click on me !";
  }
  ngOnInit(): void {
    // this.name= this.route.snapshot.paramMap.get('name') || "Pas de name";
    // this.id = this.route.snapshot.paramMap.get('id') || "Pas d'ID";
    this.dataService.getUsersByNationality("fr").subscribe((data: any) => {
      this.users = data.results;
      console.log(data.results);
    });
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.name = params['name'];
    })
  }
  setValue = () => {
    this.name = "proud of you !";
  }
  changeName = (value: string) => {
    this.newNameEvent.emit(value)
  }
}
