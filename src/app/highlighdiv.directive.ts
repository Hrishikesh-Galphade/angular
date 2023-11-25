import { 
  Directive
  ,ElementRef
  ,OnInit
  ,Renderer2
  ,HostListener,
  HostBinding
  ,Input 
} from '@angular/core';

@Directive({
  selector: '[appHighlighdiv]'
})
export class HighlighdivDirective implements OnInit {

  @Input() defaultColor = "green";
  @Input() mouseEnterColor = "yellow";
  @Input() mouseLeaveColor = "pink"

  @HostBinding("style.backgroundColor") backGroundColor= this.defaultColor;

  @HostBinding("style.color") textColor="white";

  @HostListener("mouseenter") onMouseEnter(){
    //this.rendere.setStyle( this.elemntref.nativeElement,"background-color","yellow");
    this.backGroundColor = this.mouseEnterColor;
  }

  @HostListener("mouseleave") onMouseLeave(){
    //this.rendere.setStyle( this.elemntref.nativeElement,"background-color","pink");
    this.backGroundColor = this.mouseLeaveColor;
  }

  constructor(private elemntref:ElementRef,private rendere:Renderer2) { }

  ngOnInit(){
    //this.elemntref.nativeElement.style.backgroundColor="green"
    this.backGroundColor = this.defaultColor;
   // this.rendere.setStyle( this.elemntref.nativeElement,"background-color","green");
  }

}
