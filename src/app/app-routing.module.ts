import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsTimetableComponent} from './components/students-timetable/students-timetable.component';

const routes: Routes = [
  {path: '', redirectTo: '/studentsTimetable', pathMatch: 'full'},
  {path: 'studentsTimetable', component: StudentsTimetableComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
