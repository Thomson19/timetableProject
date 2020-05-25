import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StudentsTimetableComponent } from './components/students-timetable/students-timetable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { LecturersTimetableComponent } from './components/lecturers-timetable/lecturers-timetable.component';
import { RoomAvailabilityComponent } from './components/room-availability/room-availability.component';
import { SuggestChangeComponent } from './components/suggest-change/suggest-change.component';
import { SubscribeChangeComponent } from './components/subscribe-change/subscribe-change.component';
import { LoginComponent } from './components/login/login.component';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {JwtInterceptor} from './helpers/JwtInterceptor';
import {ErrorInterceptor} from './helpers/ErrorInterceptor';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { UploadTimetableComponent } from './components/upload-timetable/upload-timetable.component';
import { AddOptionForCategoryComponent } from './components/add-option-for-category/add-option-for-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StudentsTimetableComponent,
    LecturersTimetableComponent,
    RoomAvailabilityComponent,
    SuggestChangeComponent,
    SubscribeChangeComponent,
    LoginComponent,
    UploadTimetableComponent,
    AddOptionForCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
