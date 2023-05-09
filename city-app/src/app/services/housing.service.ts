import { Injectable } from '@angular/core';
import { IHousingLocation } from '../models/housinglocation';
import { Observable, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  private model = 'locations';

  constructor(private http: HttpClient) {}

  getAllHousingLocations(): Observable<IHousingLocation[]> {
    return this.http.get<IHousingLocation[]>(this.getUrl());
  }

  getHousingLocationById(id: number): Observable<IHousingLocation | undefined> {
    return this.getAllHousingLocations().pipe(
      map((el) => el.find((elem) => elem.id === id))
    );
  }

  submitAplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application recieved: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`
    );
  }

  getFilteredLocationList(text: string): Observable<IHousingLocation[]> {
    return this.getAllHousingLocations().pipe(
      map((el) =>
        el.filter((elem) =>
          elem.city.toLowerCase().includes(text.toLowerCase())
        )
      )
    );
  }

  private getUrl() {
    return `${BASE_URL}${this.model}/`;
  }
}
