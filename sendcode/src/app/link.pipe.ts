import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'link'
})
export class LinkPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    value=value.replace(/digitallync/gi,"<a href='digitallync'>DigitalLync</a>");
    return value;
  }

}
