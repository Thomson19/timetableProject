import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

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

  uploadNewPlan(typeId: number, type: string, content: any): Observable<any> {
    return this.http.post<any>(this.url + 'plans', {
      typeId: typeId,
      type: type,
      content: content
    }, httpOptions);
  }

  getGroupImage(typeId: number): Observable<any> {
    return this.http.get<any>(this.url+'plans/groups/'+typeId);
  }

  getLecturerImage(typeId: number): Observable<any> {
    return this.http.get<any>(this.url+'plans/teachers/'+typeId);
  }

  getRoomImage(typeId: number): Observable<any> {
    return this.http.get<any>(this.url+'plans/classRooms/'+typeId);
  }

  subscribeChange(typeId: number, type: string, userId: number): Observable<any> {
    return this.http.post<any>(this.url + 'subscriptions', {
      userId: userId,
      typeId: typeId,
      type: type
    }, httpOptions);
  }
}
