import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  url = 'http://46.41.149.141/timetable/';

  constructor(private http: HttpClient) {
  }

  getGroups(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'groups');
  }

  getLecturers(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'teachers');
  }

  getRooms(): Observable<any[]> {
    return this.http.get<any[]>(this.url + 'classRooms');
  }
}
