import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DataTablesModule } from 'angular-datatables';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MainComponent } from './main/main.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { AlertsComponent } from './alerts/alerts.component';
import { SettingsComponent } from './settings/settings.component';
import { TimeSloteComponent } from './time-slote/time-slote.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PtmModalComponent } from './ptm-modal/ptm-modal.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';



const appRoutes: Routes = [
  {path: '', component: MainBodyComponent},
  {path: 'addteacher', component: AddteacherComponent},
  {path: 'employeeList', component: EmployeeListComponent},
  {path: 'alerts', component: AlertsComponent},
  {path: 'attendanceReport', component: AttendanceReportComponent},
  {path: 'timeSlote', component: TimeSloteComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'addStudent', component: AddStudentComponent},
  {path: 'studentList', component: StudentListComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    ForgotComponent,
    MainComponent,
    MainBodyComponent,
    AddteacherComponent,
    AlertsComponent,
    SettingsComponent,
    TimeSloteComponent,
    AttendanceReportComponent,
    EmployeeListComponent,
    PageHeaderComponent,
    PtmModalComponent,
    AddStudentComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(
      appRoutes,
    ),
    MDBBootstrapModule.forRoot(),
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
