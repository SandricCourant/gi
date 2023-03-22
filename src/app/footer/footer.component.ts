import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() copyrightYear:number = 0;
  @Input() copyrightName:String = '';
  copyright:string = '';

  constructor(){}
  ngOnInit(): void {
    // this.copyright = "@"+ this.copyrightYear + " " + this.copyrightName;
  }
  ngOnChanges():void{
    this.copyright = "@"+ this.copyrightYear + " " + this.copyrightName;
  }
}
