import { Component, OnInit, ViewChild } from '@angular/core';
import {NontechStaffService} from '../../Services/nontech-staff.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
 import {NotechEditNontechComponent} from '../notech-edit-nontech/notech-edit-nontech.component';
 import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
 import {Router} from '@angular/router';
 import {nontechViewModel} from '../../Model/nontechViewModel';
@Component({
  selector: 'app-view-nontechstaff',
  templateUrl: './view-nontechstaff.component.html',
  styleUrls: ['./view-nontechstaff.component.css']
})
export class ViewNontechstaffComponent implements OnInit {
  displayedColumns:string[]=['staffName','staffAge','staffSex','staffDesignation','staffAddress','staffPhno','edit','delete'];
  public dataSource = new MatTableDataSource<nontechViewModel>();
  NontechData:any;
  constructor(private service:NontechStaffService,private dialog:MatDialog,private route:Router) { }
@ViewChild(MatPaginator,{static:true})paginator:MatPaginator;
  ngOnInit(): void {
    this.service.Viewdata().subscribe((responsedata)=>{
      this.NontechData = responsedata;
      this.dataSource = new MatTableDataSource( this.NontechData);
      this.dataSource.paginator = this.paginator;
    });
  }
  onEdit(element){
 alert("Edit");
 this.service.setData(element);
 const dialogConfig = new MatDialogConfig();
 dialogConfig.disableClose=true;
 dialogConfig.autoFocus=true;
 dialogConfig.width="36%";
 this.dialog.open(NotechEditNontechComponent,dialogConfig);
  }
  onDelete(data){
    const ans = confirm("Are you sure ,Do you want to delete this record?");
    if(ans){
      let id = data['_id'];
      const dat = this.service.Deletenontech(id);
      dat.subscribe((responsedata)=>{
        if(responsedata.message === "Deleted"){
          alert(responsedata.message);
          window.location.reload();
        }
      }); 
    }
    
  }
}
