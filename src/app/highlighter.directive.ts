import { Directive, Input, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[highlighter]'
})
export class HighlighterDirective implements OnInit {
  @Input('highlighter') newColor: string = "";

  constructor(private element: ElementRef) { 
  }
  ngOnInit(): void {
    this.element.nativeElement.style.background = this.newColor;
  }
}
