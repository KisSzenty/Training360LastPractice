import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = 'http://localhost:3000/api/users';

  constructor(
    private http: HttpClient
  ) {

  }
  access(): void {
    this.http.get(this.url).subscribe(
      data => console.log(data)
    )
  }
  read(): Observable<any> {
    return this.http.get(this.url);
  }
  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${this.url}/${id}`);
  }
  create(member): Observable<any> {
    return this.http.post<User>(this.url, member);
  }
  update(member, id): Observable<any> {
    return this.http.put<User>(`${this.url}/${id}`, member)
  }
}