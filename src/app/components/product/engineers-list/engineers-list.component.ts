// component Supplies configuration metadata for an Angular component. Component decorator and metadata.
//Define an ngOnInit() method to handle any additional initialization tasks.
import { Component, OnInit } from '@angular/core';
//ActivatedRoute Provides access to information about a route associated with a component that is loaded in an outlet.
// Router is a service that provides navigation and URL manipulation capabilities.
import { ActivatedRoute, Router } from '@angular/router';
import { Engineer } from 'src/app/entities/Engineer';
import { ProductCategoryName } from 'src/app/entities/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  //The CSS selector that identifies this directive in a template and triggers instantiation of the directive.
  selector: 'app-engineers-list',
  //The relative path or absolute URL of a template file for an Angular component. 
  templateUrl: './engineers-list.component.html',
  //One or more relative paths or absolute URLs for files containing CSS stylesheets to use in this component.
  styleUrls: ['./engineers-list.component.css']
})
export class EngineersListComponent implements OnInit {
 

  constructor(private service: ProductService,
    //Provides access to information about a route associated with a component that is loaded in an outlet.
    private route: ActivatedRoute,  // required to extract route parameters
    //A service that provides navigation and URL manipulation capabilities.
    private router: Router) { }

filterTerm:string;
engineers:Engineer[];
message: string = null;
productCategory:ProductCategoryName;

productCategoryName:string[]=[ProductCategoryName[ProductCategoryName.WashingMachine],ProductCategoryName[ProductCategoryName.TV],ProductCategoryName[ProductCategoryName.AC],ProductCategoryName[ProductCategoryName.MobilePhone]];
// A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time,
//  and before any of the view or content children have been checked. 
ngOnInit() {
  this.productCategory=null
}
engineerList(){
  this.service.getEngineersByProduct(this.productCategory).subscribe(
    (response) => {
    this.engineers=response;//getting success response from service
  },
  (errorResponse) => {
    this.message = errorResponse.error.errorMessage //getting fail response from service
  }
  )
}
//method usedto refresh the page
refreshPage(){
  this.productCategory=null;
  this.message=null;
  this.engineers=null;
}
}
