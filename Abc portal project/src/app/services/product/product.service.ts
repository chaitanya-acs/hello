
import { HttpClient } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategoryName ,Product} from 'src/app/entities/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService{
  baseURL = 'http://localhost:8080/products';
  baseURL1 = 'http://localhost:8080/products/getproduct/complaints';
  baseURL2 = 'http://localhost:8080/products/getproduct/engineers/domain';
  baseURL3 = 'http://localhost:8080/products/getproduct';
productCategoryName=ProductCategoryName;

  constructor(private http: HttpClient) { }

 
updateProductWarrenty(modelNumber:string,years: number):Observable<any> {
  return this.http.put(`${this.baseURL}/${modelNumber}/${years}`,null);
}
getproductcomplaints(productCategoryName:ProductCategoryName):Observable<any>{
return this.http.get(`${this.baseURL1}/${productCategoryName}`);
}
getEngineersByProduct(productCategoryName:ProductCategoryName):Observable<any>{
  return this.http.get(`${this.baseURL2}/${productCategoryName}`);

}

}