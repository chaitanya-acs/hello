//component Supplies configuration metadata for an Angular component. Component decorator and metadata.
import { Component, OnInit } from '@angular/core';
// Provides access to information about a route associated with a component that is loaded in an outlet. 
// Use to traverse the RouterState tree and extract information from nodes.
import { ActivatedRoute, Router } from '@angular/router';  //router is a service that provides navigation and URL manipulation capabilities.
import { ProductService } from 'src/app/services/product/product.service';
//Decorator that marks a class as an Angular component and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
@Component({
  selector: 'app-update-warrenty',//The CSS selector that identifies this directive in a template and triggers instantiation of the directive.
  //The relative path or absolute URL of a template file for an Angular component. If provided, do not supply an inline template using template.
  templateUrl: './update-warrenty.component.html',
  //One or more relative paths or absolute URLs for files containing CSS stylesheets to use in this component.
  styleUrls: ['./update-warrenty.component.css']
})

//oninit: A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
export class UpdateWarrentyComponent implements OnInit {

  message:string=null;
  msgClass: string=null;
 modelNo:string;
 year:number
  constructor(private service: ProductService,
    private route: ActivatedRoute,  // required to extract route parameters
    private router: Router) { }
   // A callback method that is invoked immediately after the default change detector has checked the directive's data-bound properties for the first time, and before any of the view or content children have been checked.
   // It is invoked only once when the directive is instantiated.
    ngOnInit(){}
 //method is used to perform operations like getting the response from server using service.
  update() {

    this.service.updateProductWarrenty(this.modelNo,this.year).subscribe(
  
      (response)=>{
       this.message = response;//getting success response from service
       this.msgClass = 'alert alert-success'
      },
      (fail)=>{
       this.message = JSON.parse(fail.error).errorMessage;//getting fail response from service 
       this.msgClass = 'alert alert-danger'
      }
    )
 }
 
}




