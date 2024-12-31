import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'bigDecimal'
})
export class BigDecimal implements PipeTransform{
  transform(value:number|null):string{
    if(!value){
      return '';
    }


    return Number(value).toLocaleString();
  }
}
