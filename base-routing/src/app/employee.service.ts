import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { iEmployee } from './modules/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  // private _url: string = 'https://jsonplaceholder.typicode.com/users';
  private _url: string = 'assets/data/employee.json';
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<iEmployee[]> {
    return this.http.get<iEmployee[]>(this._url).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  // More info & Http interceptor use-cases
  // https://angular.io/guide/http

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
