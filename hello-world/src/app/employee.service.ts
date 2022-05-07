import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmployee } from './IEmployee';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/throw';
// import 'rxjs/add/operator/*';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private _url: string = '/assets/Data/employees.json';
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http
      .get<IEmployee[]>(this._url)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message);
  }
}
