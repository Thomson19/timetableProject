import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsTimetableComponent} from './components/students-timetable/students-timetable.component';
import {LecturersTimetableComponent} from './components/lecturers-timetable/lecturers-timetable.component';
import {RoomAvailabilityComponent} from './components/room-availability/room-availability.component';
import {SuggestChangeComponent} from './components/suggest-change/suggest-change.component';
import {SubscribeChangeComponent} from './components/subscribe-change/subscribe-change.component';

const routes: Routes = [
  {path: '', redirectTo: 'studentsTimetable', pathMatch: 'full'},
  {path: 'studentsTimetable', component: StudentsTimetableComponent},
  {path: 'lecturersTimetable', component: LecturersTimetableComponent},
  {path: 'roomsAvailability', component: RoomAvailabilityComponent},
  {path: 'suggestChange', component: SuggestChangeComponent},
  {path: 'subscribeChange', component: SubscribeChangeComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
