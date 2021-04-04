import { Component, OnInit } from '@angular/core';
import {MatSnackBar,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {NotifyService} from '../../Services/notify.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-main-page',
  templateUrl: './student-main-page.component.html',
  styleUrls: ['./student-main-page.component.css']
})
export class StudentMainPageComponent implements OnInit {
timeOut = 3500;
 notifyData:any;
 horizontalPosition: MatSnackBarHorizontalPosition = 'right';
 verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(private service:NotifyService,private route:Router,private _snackBar:MatSnackBar) {
    
   }

  ngOnInit(): void {
    const data = this.service.GetPost();
    data.subscribe((responsedata)=>{
      this.notifyData = responsedata.data;
      
      for(let i=0;i<this.notifyData.length;i++){
       setTimeout(()=>{
        this._snackBar.open(this.notifyData[i].Updates,"Close",{
          duration:this.timeOut,
          horizontalPosition:this.horizontalPosition,
          verticalPosition:this.verticalPosition,
          
        })
       },i*(this.timeOut+500))
         
      }
     
    })
  }
  Studupdate(){
    this.route.navigateByUrl('/studupdate');
  }
  StudResult(){
    this.route.navigateByUrl('/studresult')
  }
  Logout(){
    alert("Logout");
    console.log("Logout");
    this.route.navigateByUrl('/login');
  }
}
