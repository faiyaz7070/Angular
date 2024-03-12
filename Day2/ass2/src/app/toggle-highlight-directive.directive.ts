import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleHighlightDirective]'
})
export class ToggleHighlightDirectiveDirective {
  private colors=['red','green'];
  private currentind=0;

  constructor(private el:ElementRef) { }

  @HostListener('click') onClick(){
    this.toggleBackgrounColor();
  }
private toggleBackgrounColor(){
  const color=this.colors[this.currentind];
  this.el.nativeElement.style.backgroundColor=color
  this.currentind=(this.currentind+1)%this.colors.length

}
}
