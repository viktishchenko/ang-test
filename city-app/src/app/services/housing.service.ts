import { Injectable } from '@angular/core';
import { IHousingLocation } from '../models/housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  housingLocationList: IHousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://via.placeholder.com/640x360/f0f0f0/615dc8',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: 'https://via.placeholder.com/640x360/f0f0f0/615dc8',
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: 'https://via.placeholder.com/640x360/f0f0f0/615dc8',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: 'https://via.placeholder.com/640x360/f0f0f0/615dc8',
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: 'https://via.placeholder.com/640x360/f0f0f0/615dc8',
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://via.placeholder.com/640x360/f0f0f0/615dc8',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://via.placeholder.com/640x360/f0f0f0/615dc8',
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://via.placeholder.com/640x360/f0f0f0/615dc8',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: 'https://via.placeholder.com/640x360/f0f0f0/615dc8',
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: 'https://via.placeholder.com/640x360/f0f0f0/615dc8',
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];

  constructor() {}

  getAllHousingLocations(): IHousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): IHousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }

  submitAplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application recieved: firstName: ${firstName}, lastName: ${lastName}, email: ${email}`
    );
  }
}
