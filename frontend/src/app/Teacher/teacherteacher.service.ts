import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TeacherteacherService {
readonly ROOT_URL;
uniqueId:String;
  constructor(private http:HttpClient) {
    this.ROOT_URL ="http://localhost:3000"
   }
   GetProfile(teacherUniqId:String){
     const data ={teacherUniqId:teacherUniqId}
     return this.http.post<{message:String,data:Object}>(`${this.ROOT_URL}/tecdet/fortech`,data);
   }
   setID(userid:String){
     this.uniqueId=userid;
   }
   getId(){
     return this.uniqueId;
   }
}
