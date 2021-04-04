import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TeacherService {
readonly ROOT_URL;
private teacherData:object
  constructor(private http:HttpClient) {
    this.ROOT_URL="http://localhost:3000";
   }
  PostDet(name:string,sex:string,age:string,subject:string[],designation:string,address:string,phno:string,assignedClass:string[],board:String){
    const data ={teacherName:name,teacherSex:sex,teacherAge:age,teacherSubject:subject,teacherDesignation:designation,teacherAddress:address,teacherPhonenumber:phno,teacherAssignedClasses:assignedClass,teacherBoard:board};
    return this.http.post<{message:string}>(`${this.ROOT_URL}/tecdet/add`,data);
  }
Viewnontech(){
  return this.http.get<{message:string,data:object}>(`${this.ROOT_URL}/tecdet/fornontech`);
}
setData(data){
  this.teacherData = data;
}
Updatenontech(id:String,name:String,sex:string,age:String,address:String,phno:String,board:String){
const data ={teacherName:name,teacherSex:sex,teacherAge:age,teacherAddress:address,teacherPhonenumber:phno,teacherBoard:board};
return this.http.put<{message:string}>(`${this.ROOT_URL}/tecdet/update/${id}`,data);
}
Deletenontech(id:String){
  return this.http.delete<{message:String}>(`${this.ROOT_URL}/tecdet/delet/${id}`);
}
getData(){
  return this.teacherData;
}
login(userid:String,password:string){
  const data = {userid:userid,password:password}
  return this.http.post<{message:String}>(`${this.ROOT_URL}/teacherreg/login`,data);
}
}
