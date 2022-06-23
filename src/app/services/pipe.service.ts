import { Pipe, PipeTransform } from "@angular/core";
import { orderBy } from 'lodash';
// C:\Users\Admin\Desktop\BTL LTNC\MVC\Duphong\_frontend\Angular_app\node_modules\lodash\lodash.js
@Pipe({
 name: "orderBy"
})
export class OrderByPipe implements PipeTransform {
 transform(array: any, sortBy: any, order?: any): any[] {
 const sortOrder = order ? order : 'asc'; // setting default ascending order

  return orderBy(array, [sortBy], [sortOrder]);
  }
}