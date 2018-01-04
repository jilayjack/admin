import { Routes,RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { CourseComponent } from './course/course.component';
import { SubjectComponent } from './subject/subject.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddEventComponent } from './add-event/add-event.component';
import { AddNewsfeedComponent } from './add-newsfeed/add-newsfeed.component';
import { LoginComponent } from './login/login.component';
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
const routing:Routes=[
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'events',component:EventsComponent},
    {path:'gallary',component:GallaryComponent},
    {path:'newsfeed',component:NewsfeedComponent},
    {path:'course',component:CourseComponent},
    {path:'subject',component:SubjectComponent},
    {path:'add-student',component:AddStudentComponent},
    {path:'add-course',component:AddCourseComponent},
    {path:'add-subject',component:AddSubjectComponent},
    {path:'add-event',component:AddEventComponent},
    {path:'add-newsfeed',component:AddNewsfeedComponent},
    {path:'login',component:LoginComponent},
    {path:'update-course/:c_id',component:UpdateCourseComponent},
    {path:'update-subject/:sub_id',component:UpdateSubjectComponent},
    {path:'update-event/:e_id',component:UpdateEventComponent},
{path:'update-newsfeed/:n_id',component:UpdateNewsfeedComponent},
{path:'mail',component:MailComponent},
{path:'faculty',component:FacultyComponent},
{path:'add-faculty',component:AddFacultyComponent},
{path:'update-faculty/:f_id',component:UpdateFacultyComponent},
{path:'dashboard',component:DashboardComponent},
{path:'viewmore/:v_id',component:ViewmoreComponent},
{path:'update-student/:s_id',component:UpdateStudentComponent}


    
    
    
    
    
];

export const routingArray=RouterModule.forRoot(routing);

