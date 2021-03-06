import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {map, mergeMap, switchMap} from 'rxjs/operators';
import {Change} from "../models/Change";

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

  constructor(private http: HttpClient, private authService: AuthenticationService) {
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

  getListOfChanges(): Observable<any> {
    return this.http.get<any[]>(this.url +  'suggestions');
  }

  uploadNewPlan(typeId: number, type: string, content: any): Observable<any> {
    return this.http.post<any>(this.url + 'plans', {
      typeId: typeId,
      type: type,
      content: content
    }, httpOptions);
  }

  getGroupImage(typeId: number): Observable<any> {
    return this.http.get<any>(this.url + 'plans/groups/' + typeId);
  }

  getLecturerImage(typeId: number): Observable<any> {
    return this.http.get<any>(this.url + 'plans/teachers/' + typeId);
  }

  getRoomImage(typeId: number): Observable<any> {
    return this.http.get<any>(this.url + 'plans/classRooms/' + typeId);
  }

  get404Image() {
    return 'data:image/png;base64,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';
  }

  subscribeChange(typeId: number, type: string, userId: number): Observable<any> {
    return this.http.post<any>(this.url + 'subscriptions', {
      userId: userId,
      typeId: typeId,
      type: type
    }, httpOptions);
  }

  addGroup(name: string): Observable<any> {
    return this.http.post<any>(this.url + 'groups', {
      name: name
    }, httpOptions);
  }

  addTeacher(firstName: string, lastName: string) {
    return this.http.post<any>(this.url + 'teachers', {
      firstName: firstName,
      lastName: lastName
    }, httpOptions);
  }

  addClassRoom(name: string): Observable<any> {
    return this.http.post<any>(this.url + 'classRooms', {
      name: name
    }, httpOptions);
  }

  suggestChange(groupId: number, description: string) {
    let submitterId = this.authService.currentUserValue.accountId;
    return this.getGroupImage(groupId).pipe(
      switchMap(data => {
        return this.http.post<any>(this.url + 'suggestions', {
          submitterId: submitterId,
          planId: data.id,
          description: description
        }, httpOptions);
      })
    );
  }

  acceptChange(change: Change) {
    return this.http.put<any>(this.url + 'suggestions/' + change.id, {
      id: change.id,
      suggestionState: "Accepted"
    }, httpOptions);
  }

  deleteChange(change: Change) {
    return this.http.delete<any>(this.url + 'suggestions/' + change.id);
  }
}
