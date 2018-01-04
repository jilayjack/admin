import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserDataService } from './events/admin-data.service';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { GallaryComponent } from './gallary/gallary.component';
import { SubjectComponent } from './subject/subject.component';
import { routingArray } from './app.routing';


import { DashboardDataService } from './dashboard/dashboard-data.service';
import { StudentDataService } from './home/student-data.service';
import { CourseDataService } from './course/course-data.service';
import { GallaryDataService } from './gallary/gallary-data.service';
import { NewsfeedDataService } from './newsfeed/newsfeed-data.service';
import { SubjectDataService } from './subject/subject-data.service';
import { FacultyDataService } from './faculty/faculty-data.service';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddNewsfeedComponent } from './add-newsfeed/add-newsfeed.component';
import { FormsModule } from '@angular/forms';
import { LoginDataService } from './login/login-data.service';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateSubjectComponent } from './update-subject/update-subject.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { UpdateNewsfeedComponent } from './update-newsfeed/update-newsfeed.component';
import { MailComponent } from './mail/mail.component';
import { FacultyComponent } from './faculty/faculty.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { UpdateFacultyComponent } from './update-faculty/update-faculty.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewmoreComponent } from './viewmore/viewmore.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    EventsComponent,
    HomeComponent,
    CourseComponent,
    LoginComponent,
    NewsfeedComponent,
    GallaryComponent,
    SubjectComponent,
    AddStudentComponent,
    AddCourseComponent,
    AddSubjectComponent,
    AddEventComponent,
    AddNewsfeedComponent,
    UpdateCourseComponent,
    UpdateSubjectComponent,
    UpdateEventComponent,
    UpdateNewsfeedComponent,
    MailComponent,
    FacultyComponent,
    AddFacultyComponent,
    UpdateFacultyComponent,
    DashboardComponent,
    ViewmoreComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routingArray,
    FormsModule
  ],
  providers: [UserDataService,StudentDataService,CourseDataService,GallaryDataService,NewsfeedDataService,SubjectDataService,LoginDataService,FacultyDataService,DashboardDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
