import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Engineer } from 'src/app/entities/Engineer';
import { ProductCategoryName } from 'src/app/entities/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-engineers-list',
  templateUrl: './engineers-list.component.html',
  styleUrls: ['./engineers-list.component.css']
})
export class EngineersListComponent implements OnInit {
 

  constructor(private service: ProductService,
    private route: ActivatedRoute,  // required to extract route parameters
    private router: Router) { }

filterTerm:string;
engineers:Engineer[];
message: string = null;
prodCat:ProductCategoryName;

productCategoryName:string[]=[ProductCategoryName[ProductCategoryName.WashingMachine],ProductCategoryName[ProductCategoryName.TV],ProductCategoryName[ProductCategoryName.AC],ProductCategoryName[ProductCategoryName.MobilePhone]];

ngOnInit() {
  this.prodCat=null
}



engineerList(){
  this.service.getEngineersByProduct(this.prodCat).subscribe(
    (response) => {
    this.engineers=response;
  
  },
  (errorResponse) => {

    this.message = errorResponse.error.errorMessage

   
  }

  )
}

refreshPage(){
  this.prodCat=null;
  this.message=null;
  this.engineers=null;
}

}
