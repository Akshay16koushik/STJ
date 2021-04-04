import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
readonly ROOT_URL;
private studentData:object;
private studentRegno:String;
  constructor(private http:HttpClient) {
this.ROOT_URL ="http://localhost:3000";
   }

addStud(studentRegisterNumber:string,studentName:string,studentFatherName:string,studentMotherName:string,studentAge:string,studentSex:string,studentBloodGroup:string,parentNumber:string,studentParmanentAddress:string,studentExistingAddress:string,studentClass:string,studentFee:string,studentBoard:string){
  const data={studentRegisterNumber,studentName,studentFatherName,studentMotherName,studentAge,studentSex,studentBloodGroup,parentNumber,studentParmanentAddress,studentExistingAddress,studentClass,studentFee,studentBoard}
  return this.http.post<{message:string}>(`${this.ROOT_URL}/stddet/add`,data)
}
Viewnontech(){
  return this.http.get<{message:string,data:object}>(`${this.ROOT_URL}/stddet/fornontech`);
}
Updatenontech(id:String,studentRegisterNumber:String,studentName:String,studentFatherName:String,studentMotherName:String,studentSex:String,studentBloodGroup:String,parentNumber:String,studentParmanentAddress:String,studentExistingAddress:String,studentFee:String,studentBoard:String,studentRemainingFee:String){
  const data={studentRegisterNumber,studentName,studentFatherName,studentMotherName,studentSex,studentBloodGroup,parentNumber,studentParmanentAddress,studentExistingAddress,studentFee,studentBoard,studentRemainingFee}
  return this.http.put<{message:string}>(`${this.ROOT_URL}/stddet/update/${id}`,data);
}
Deletenontech(id:String){
  return this.http.delete<{message:String}>(`${this.ROOT_URL}/stddet/delete/${id}`);
}
setData(data){
this.studentData = data;
}
getData(){
  return this.studentData;
}
login(userid:String,password:String){
  const data ={studentRegisterNumber:userid,studentPassword:password};
  return this.http.post<{message:String}>(`${this.ROOT_URL}/studentreg/login`,data);
}
logout(){
  localStorage.removeItem('token');
}
register(userid:String,password:String){
  const data ={studentRegisterNumber:userid,studentPassword:password}
  return this.http.post<{message:String}>(`${this.ROOT_URL}/studentreg/register`,data);
}
setReg(data){
  this.studentRegno=data;
}
getReg(){
  return this.studentRegno;
}
getDataByReg(){
  const data ={studentRegisterNumber:this.studentRegno}
  return this.http.post<{message:String,data:Object}>(`${this.ROOT_URL}/stddet/studupdate`,data);
}
}
