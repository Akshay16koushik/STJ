import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NontechStaffRegComponent } from './Components/nontech-staff-reg/nontech-staff-reg.component';
import {HttpClientModule} from '@angular/common/http';
import { NontechstaffloginComponent } from './Components/nontechstafflogin/nontechstafflogin.component';
import { NontechHomepageComponent } from './Components/nontech-homepage/nontech-homepage.component';
import { AddNontechStaffComponent } from './Components/add-nontech-staff/add-nontech-staff.component';
import { AddTeacherDetailsComponent } from './Components/add-teacher-details/add-teacher-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import { AddStudentComponent } from './Components/add-student/add-student.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ViewNontechstaffComponent } from './Components/view-nontechstaff/view-nontechstaff.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ViewNontechteacherComponent } from './Components/view-nontechteacher/view-nontechteacher.component';
import { ViewNontechStudentComponent } from './Components/view-nontech-student/view-nontech-student.component';
import {NotechEditNontechComponent} from './Components/notech-edit-nontech/notech-edit-nontech.component';
import {NotechEditTeacherComponent} from './Components/notech-edit-teacher/notech-edit-teacher.component';
import { NotechEditStudentComponent } from './Components/notech-edit-student/notech-edit-student.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import { StudentMainPageComponent } from './Student/student-main-page/student-main-page.component';
import { NotificationPostComponent } from './Components/notification-post/notification-post.component';
import { StudUpdateProfileComponent } from './Student/stud-update-profile/stud-update-profile.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { StudentResultsPageComponent } from './Student/student-results-page/student-results-page.component';
import { NgxBootstrapMultiselectModule } from 'ngx-bootstrap-multiselect';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HoemPageComponent } from './Teacher/hoem-page/hoem-page.component';
import { ProfileComponent } from './Teacher/profile/profile.component';
import { AttendanceComponent } from './Teacher/attendance/attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    NontechStaffRegComponent,
    NontechstaffloginComponent,
    NontechHomepageComponent,
    AddNontechStaffComponent,
    AddTeacherDetailsComponent,
    AddStudentComponent,
    ViewNontechstaffComponent,
    ViewNontechteacherComponent,
    ViewNontechStudentComponent,
    NotechEditNontechComponent,
    NotechEditTeacherComponent,
    NotechEditStudentComponent,
    HomeComponent,
    StudentMainPageComponent,
    NotificationPostComponent,
    StudUpdateProfileComponent,
    StudentResultsPageComponent,
    HoemPageComponent,
    ProfileComponent,
    AttendanceComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    MatRippleModule,
    MatExpansionModule,
    NgxBootstrapMultiselectModule,
    MatMenuModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
