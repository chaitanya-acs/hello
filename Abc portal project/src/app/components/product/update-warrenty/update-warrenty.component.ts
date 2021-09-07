import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-update-warrenty',
  templateUrl: './update-warrenty.component.html',
  styleUrls: ['./update-warrenty.component.css']
})
export class UpdateWarrentyComponent implements OnInit {

  message:string=null;
  msgClass: string=null;
 modelNo:string;
 year:number
 
  


  constructor(private service: ProductService,
    private route: ActivatedRoute,  // required to extract route parameters
    private router: Router) { }
ngOnInit(){}
  



  update() {

    this.service.updateProductWarrenty(this.modelNo,this.year).subscribe(
  
      (response)=>{

       
       this.message = response;
       this.msgClass = 'alert alert-success'
       
      },
      (fail)=>{
        
        
       this.message = JSON.parse(fail.error).errorMessage;
     
       this.msgClass = 'alert alert-danger'
      }
    )
   
 }
 
}




