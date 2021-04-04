import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StudentService} from '../student.service';
@Injectable({
  providedIn: 'root'
})
export class CbscMarksService {
readonly ROOTURL:String;
  constructor(private http:HttpClient,private service:StudentService) {
    this.ROOTURL="http://localhost:3000/cbscmarks/";
   }

   GetResult(exam:String){
    const regno = this.service.getReg();
    const data ={studentRegisterNumber:regno,exam:exam};
    return this.http.post<{message:String,data:Object}>(`${this.ROOTURL}student`,data);
   }
}
