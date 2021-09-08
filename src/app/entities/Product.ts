export interface Product{
    modelNumber:string;
    productName:string;
    productCategoryName:ProductCategoryName;
    dateOfPurchase:Date;
    warrentyYears:number;
    warrentyDate:Date;
}
export enum ProductCategoryName{
    WashingMachine,
	TV,
	AC,
	MobilePhone
}