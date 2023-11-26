import { Directive,Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCopyOfIf]'
})
export class CopyOfIfDirective {

  @Input() set appCopyOfIf(booleanValue:boolean) { 
      
    if(booleanValue)
    {
      this.containerRef.createEmbeddedView(this.templateRef);
    }
    else
    {
      this.containerRef.clear();
    }
  }

  constructor(private templateRef:TemplateRef<any>,private containerRef:ViewContainerRef) { }

}
