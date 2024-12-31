
import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2 } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Directive({
  selector: '[invalidInput]'
})
export class InvalidInput{

  @Input() invalidInput:AbstractControl |null = null;
  constructor(private el:ElementRef<HTMLInputElement> , private renderer:Renderer2)
  {

  }

  ngOnInit(): void {




    this.invalidInput?.statusChanges.subscribe(()=>{
      if(this.invalidInput?.invalid){
        this.renderer.addClass(this.el.nativeElement , 'invalid-input');
      }else{
        this.renderer.removeClass(this.el.nativeElement , 'invalid-input');

      }
    })


  }
}
