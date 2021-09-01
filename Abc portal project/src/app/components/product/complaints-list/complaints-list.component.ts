import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from 'src/app/entities/Complaint';
import { ProductCategoryName } from 'src/app/entities/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-complaints-list',
  templateUrl: './complaints-list.component.html',
  styleUrls: ['./complaints-list.component.css']
})
export class ComplaintsListComponent implements OnInit {


  productCategoryName:string[]=[ProductCategoryName[ProductCategoryName.WashingMachine],ProductCategoryName[ProductCategoryName.TV],ProductCategoryName[ProductCategoryName.AC],ProductCategoryName[ProductCategoryName.MobilePhone]];
  filterTerm:string;
  complaints:Complaint[];
  message: string = null;
  prodCat:ProductCategoryName;
 
  
  constructor(private service: ProductService,
    private route: ActivatedRoute,  // required to extract route parameters
    private router: Router) { }

  ngOnInit() {
    this.prodCat=null
  }
  complaintList(){
    this.service.getproductcomplaints(this.prodCat).subscribe(
      (response) => {
      this.complaints=response;
    
    },
    (errorResponse) => {
  
      this.message = errorResponse.error.errorMessage
  
     
    }
  
    )
}

refreshPage(){
 
  this.prodCat=null;
  this.message=null;
  this.complaints=null;
}

}
