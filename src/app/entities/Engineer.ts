export interface Engineer{
    engineerId:number;
    password:string;
    engineerName:string;
    domain:EngineerDomain;

}

export enum EngineerDomain  {
    WashingMachine,
	TV,
	AC,
	MobilePhone
}