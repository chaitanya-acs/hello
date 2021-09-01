export interface Complaint{
    productModelNumber:string;
    complaintId:number;
    complaintName:string;
   status: ComplaintStatus ;
}
enum ComplaintStatus{
OPEN,
RESOLVE_ONLINE,
RESOLVE_AT_HOME,
RESOLVED,
CLOSED
}