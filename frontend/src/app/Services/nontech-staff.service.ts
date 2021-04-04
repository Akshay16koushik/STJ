import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class NontechStaffService {
readonly ROOT_URL: string;
private staffData:object;
  constructor(private http:HttpClient) {
  this.ROOT_URL ="http://localhost:3000";
  }

register(id:string,password:string,confirmpassword:string){
  const data ={password:password,confirmpassword:confirmpassword}
  return this.http.put<{message:string,data:object}>(`${this.ROOT_URL}/nontechstaffdet/register/${id}`,data);
}
LOG(id:string,password:string){
  const data ={userid:id,password:password};
  return this.http.post<{message:string,token:string}>(`${this.ROOT_URL}/nontechstaffdet/login`,data);
}
ADD(name:string,age:string,sex:string,designation:string,address:string,phno:string){
  let token = localStorage.getItem('token');
  const data ={staffName:name,staffAge:age,staffSex:sex,staffDesignation:designation,staffAddress:address,staffPhno:phno,token};
  return this.http.post<{message:string}>(`${this.ROOT_URL}/nontechstaffdet/add`,data);
}
Viewdata(){
  const data ={Token:localStorage.getItem('token')}
  return this.http.post(`${this.ROOT_URL}/nontechstaffdet/fornotech`,data);
}
Updatenontech(id:String,name:String,age:String,sex:String,designation:String,address:String,phno:String){
  const data={staffName:name,staffAge:age,staffSex:sex,staffDesignation:designation,staffAddress:address,staffPhno:phno};
  return this.http.put<{message:string}>(`${this.ROOT_URL}/nontechstaffdet/edit/${id}`,data);
}
Deletenontech(id:String){
  return this.http.delete<{message:String}>(`${this.ROOT_URL}/nontechstaffdet/delete/${id}`);
}
setData(data:Object){
  this.staffData = data;
}
getData(){
  return this.staffData;
}
CheckUser(tok:string){
  const data = {token:tok}
return this.http.post<{message:String,data:String}>(`${this.ROOT_URL}/nontechstaffdet/staffid`,data);
}
}

