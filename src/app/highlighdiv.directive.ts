import { Directive,ElementRef,OnInit,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlighdiv]'
})
export class HighlighdivDirective implements OnInit {

  
  constructor(private elemntref:ElementRef,private rendere:Renderer2) { }

  ngOnInit(){
    //this.elemntref.nativeElement.style.backgroundColor="green"

    this.rendere.setStyle( this.elemntref.nativeElement,"background-color","green");
  }

}
