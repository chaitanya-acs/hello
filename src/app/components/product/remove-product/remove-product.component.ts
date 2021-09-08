import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategoryName } from 'src/app/entities/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent implements OnInit {
  productCategoryName:string[]=[ProductCategoryName[ProductCategoryName.WashingMachine],ProductCategoryName[ProductCategoryName.TV],ProductCategoryName[ProductCategoryName.AC],ProductCategoryName[ProductCategoryName.MobilePhone]];
  messageOne: string = null;
  productCategory:ProductCategoryName;
  msgClassOne: string=null;
  constructor(private service: ProductService,
    private route: ActivatedRoute,  // required to extract route parameters
    private router: Router) { }

    ngOnInit() {
      this.productCategory=null
    }
    removeProduct(){
      this.service.removeProducts(this.productCategory).subscribe(
        (response)=>{
          this.messageOne = response;//getting success response from service
          this.msgClassOne= 'alert alert-success'
         },
         (fail)=>{
          this.messageOne= JSON.parse(fail.error).errorMessage;//getting fail response from service 
          this.msgClassOne = 'alert alert-danger'
         }
      )
    }
    //method usedto refresh the page
    refreshPage(){
      this.productCategory=null;
      this.messageOne=null;
     
    }

}
