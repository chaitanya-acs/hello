//component Supplies configuration metadata for an Angular component. Component decorator and metadata.
//A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
import { Component, OnInit } from '@angular/core';
//ActivatedRoute Provides access to information about a route associated with a component that is loaded in an outlet.
//router Provides access to information about a route associated with a component that is loaded in an outlet.
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/entities/Complaint';
import { ProductCategoryName } from 'src/app/entities/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  //The CSS selector that identifies this directive in a template and triggers instantiation of the directive.
  selector: 'app-complaints-list',
  //The relative path or absolute URL of a template file for an Angular component. If provided, do not supply an inline template using template.
  templateUrl: './complaints-list.component.html',
 //The relative path or absolute URL of a template file for an Angular component. If provided, do not supply an inline template using template.
  styleUrls: ['./complaints-list.component.css']
})
export class ComplaintsListComponent implements OnInit {
  productCategoryName:string[]=[ProductCategoryName[ProductCategoryName.WashingMachine],ProductCategoryName[ProductCategoryName.TV],ProductCategoryName[ProductCategoryName.AC],ProductCategoryName[ProductCategoryName.MobilePhone]];
  filterTerm:string;
  complaints:Complaint[];
  message: string = null;
  productCategory:ProductCategoryName;
 
  constructor(private service: ProductService,
    private route: ActivatedRoute,  // required to extract route parameters
    private router: Router) { }
// A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, 
// and before any of the view or content children have been checked. 
  ngOnInit() {
    this.productCategory=null
  }
  complaintList(){
    this.service.getproductcomplaints(this.productCategory).subscribe(
      (response) => {
      this.complaints=response;//getting success response from service
    },
    (errorResponse) => {
      this.message = errorResponse.error.errorMessage//getting fail response from service
    }
    )
}
//method used to refresh the page
refreshPage(){
  this.productCategory=null;
  this.message=null;
  this.complaints=null;
}

}
