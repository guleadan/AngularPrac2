import { FormArrayName } from "@angular/forms"

export class Student{
    fname: string
    lname: string
    rollNo: string 
    email: string
    constructor(fname:string, lname: string, rollNo: string, email: string ){
        this.fname= fname;
        this.lname=lname;
        this.rollNo=rollNo;
        this.email=email;

    }
    
}