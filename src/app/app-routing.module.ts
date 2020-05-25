import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsTimetableComponent} from './components/students-timetable/students-timetable.component';
import {LecturersTimetableComponent} from './components/lecturers-timetable/lecturers-timetable.component';
import {RoomAvailabilityComponent} from './components/room-availability/room-availability.component';
import {SuggestChangeComponent} from './components/suggest-change/suggest-change.component';
import {SubscribeChangeComponent} from './components/subscribe-change/subscribe-change.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './helpers/AuthGuard';
import {UploadTimetableComponent} from './components/upload-timetable/upload-timetable.component';
import {AddOptionForCategoryComponent} from './components/add-option-for-category/add-option-for-category.component';

const routes: Routes = [
  {path: '', redirectTo: 'studentsTimetable', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'studentsTimetable', component: StudentsTimetableComponent, canActivate: [AuthGuard]},
  {path: 'lecturersTimetable', component: LecturersTimetableComponent, canActivate: [AuthGuard]},
  {path: 'roomsAvailability', component: RoomAvailabilityComponent, canActivate: [AuthGuard]},
  {path: 'suggestChange', component: SuggestChangeComponent, canActivate: [AuthGuard]},
  {path: 'subscribeChange', component: SubscribeChangeComponent, canActivate: [AuthGuard]},
  {path: 'uploadTimetable', component: UploadTimetableComponent},
  {path: 'addOptionForCategory', component: AddOptionForCategoryComponent},
  { path: '**', redirectTo: '' }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
