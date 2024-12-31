import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'weightInKg'
})
export class weightPipe implements PipeTransform{

  transform(value:string):string{

    return value + 'Kg';
  }

}
