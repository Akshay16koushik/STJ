import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotifyService {
readonly ROOT_URL:String;
  constructor(private http:HttpClient) {
    this.ROOT_URL="http://localhost:3000/demo/";
   }
   UploadPost(updates:String){
     const data={Updates:updates}
     return this.http.post<{message:String}>(`${this.ROOT_URL}add`,data);
   }
   GetPost(){
     return this.http.get<{message:String,data:Object}>(`${this.ROOT_URL}`);
   }

}
