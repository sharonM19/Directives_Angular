import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue;'

  @HostBinding('style.backgroundColor') backgroundColor : string ;

  constructor(private eleRef: ElementRef ,private renderer: Renderer2) { }

   ngOnInit(){
     this.backgroundColor = this.defaultColor;
     //this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','blue');
   }

   @HostListener('mouseenter') mouseOver(eventData : Event){
    //this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','blue');
    this.backgroundColor = this.highlightColor;
   }

   @HostListener('mouseleave') mouseLeave(eventData : Event){
    //this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','transparent');
    this.backgroundColor = this.defaultColor;
   }
}
