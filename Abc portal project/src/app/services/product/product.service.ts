
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategoryName ,Product} from 'src/app/entities/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService{
  baseURL = 'http://localhost:8080/products/updateProductWarranty';
  baseURL1 = 'http://localhost:8080/products/getproduct/complaints';
  baseURL2 = 'http://localhost:8080/products/getproduct/engineers/domain';

productCategoryName=ProductCategoryName;

  constructor(private http: HttpClient) { }

 
updateProductWarrenty(modelNumber:string,years: number):Observable<any> {
  return this.http.put(`${this.baseURL}/${modelNumber}/${years}`,null,{responseType:'text'})
}
getproductcomplaints(productCategoryName:ProductCategoryName):Observable<any>{
return this.http.get(`${this.baseURL1}/${productCategoryName}`);
}
getEngineersByProduct(productCategoryName:ProductCategoryName):Observable<any>{
  return this.http.get(`${this.baseURL2}/${productCategoryName}`);

}

}