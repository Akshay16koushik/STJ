import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NontechStaffRegComponent} from './Components/nontech-staff-reg/nontech-staff-reg.component';
import {NontechstaffloginComponent} from './Components/nontechstafflogin/nontechstafflogin.component';
import {NontechHomepageComponent} from './Components/nontech-homepage/nontech-homepage.component';
import {AddNontechStaffComponent} from './Components/add-nontech-staff/add-nontech-staff.component';
import {AddTeacherDetailsComponent} from './Components/add-teacher-details/add-teacher-details.component';
import {AddStudentComponent} from './Components/add-student/add-student.component';
import {ViewNontechstaffComponent} from './Components/view-nontechstaff/view-nontechstaff.component';
import {ViewNontechteacherComponent} from './Components/view-nontechteacher/view-nontechteacher.component';
import {ViewNontechStudentComponent} from './Components/view-nontech-student/view-nontech-student.component'
import {NotechEditNontechComponent} from './Components/notech-edit-nontech/notech-edit-nontech.component';
import {NotechEditStudentComponent} from './Components/notech-edit-student/notech-edit-student.component';
import {NotechEditTeacherComponent} from './Components/notech-edit-teacher/notech-edit-teacher.component';
import {HomeComponent} from './home/home.component';
import {StudentMainPageComponent} from './Student/student-main-page/student-main-page.component';
import {NotificationPostComponent} from './Components/notification-post/notification-post.component';
import {StudUpdateProfileComponent} from './Student/stud-update-profile/stud-update-profile.component';
import {StudentResultsPageComponent} from './Student/student-results-page/student-results-page.component';
import {HoemPageComponent} from './Teacher/hoem-page/hoem-page.component';
import {ProfileComponent} from './Teacher/profile/profile.component';
import {AttendanceComponent} from './Teacher/attendance/attendance.component'
const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'nontechstaffreg',component:NontechStaffRegComponent},
  {path:'login',component:NontechstaffloginComponent},
  {path:'nontechhomepage',component:NontechHomepageComponent},
  {path:'nontechstaffadd',component:AddNontechStaffComponent},
  {path:'nontechaddtech',component:AddTeacherDetailsComponent},
  {path:'nontechaddstd',component:AddStudentComponent},
  {path:'nontechviewnontech',component:ViewNontechstaffComponent},
  {path:'nontechviewteacher',component:ViewNontechteacherComponent},
  {path:'nontechviewstudent',component:ViewNontechStudentComponent},
  {path:'nontecheditnontech',component:NotechEditNontechComponent},
  {path:'nontecheditstudent',component:NotechEditStudentComponent},
  {path:'nontecheditteacher',component:NotechEditTeacherComponent},
  {path:'studentmain',component:StudentMainPageComponent},
  {path:'nontechupdatenotification',component:NotificationPostComponent},
  {path:'studupdate',component:StudUpdateProfileComponent},
  {path:'studresult',component:StudentResultsPageComponent},
  {path:'techerhome',component:HoemPageComponent},
  {path:'teacherprofile',component:ProfileComponent},
  {path:'uploadattendance',component:AttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
