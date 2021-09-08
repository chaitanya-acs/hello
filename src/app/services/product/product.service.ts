// Performs HTTP requests. This service is available as an injectable class, with methods to perform HTTP requests.
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
// A representation of any set of values over any amount of time. This is the most basic building block of RxJS.
import { Observable } from 'rxjs';
import { ProductCategoryName ,Product} from 'src/app/entities/Product';

//Decorator that marks a class as available to be provided and injected as a dependency.
@Injectable({
  providedIn: 'root'
})
export class ProductService{
  baseURL = 'http://localhost:8080/products/updateProductWarranty';
  baseURL1 = 'http://localhost:8080/products/getproduct/complaints';
  baseURL2 = 'http://localhost:8080/products/getproduct/engineers/domain';
baseURL3='http://localhost:8080/products/removeProducts';
productCategoryName=ProductCategoryName;

  constructor(private http: HttpClient) { }

 //This method is used to update the product warrenty using put request
updateProductWarrenty(modelNumber:string,years: number):Observable<any> {
  return this.http.put(`${this.baseURL}/${modelNumber}/${years}`,null,{responseType:'text'})
}
//This method is used to get product compaints using get request
getproductcomplaints(productCategoryName:ProductCategoryName):Observable<any>{
return this.http.get(`${this.baseURL1}/${productCategoryName}`);
}
//This method is used to get engieers by product using get request
getEngineersByProduct(productCategoryName:ProductCategoryName):Observable<any>{
  return this.http.get(`${this.baseURL2}/${productCategoryName}`);

}
removeProducts(productCategoryName:ProductCategoryName):Observable<any>{
  return this.http.delete(`${this.baseURL3}/${productCategoryName}`,{responseType:'text'})
}
}