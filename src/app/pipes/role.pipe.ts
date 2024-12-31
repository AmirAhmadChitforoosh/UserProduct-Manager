import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'roleName'
})
export class RolePipe implements PipeTransform
{
  transform(value: number|null):string {
    if(!value){
      return '';
    }
    if(value == 1){
      return 'admin';
    }
    return 'normal';
  }
}
