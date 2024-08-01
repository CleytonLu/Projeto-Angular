import { Injectable } from '@angular/core';
import { HousingLocation } from '../types/housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  url = 'http://localhost:3000/locations';

  async getAllHousingLocation(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) || [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation> {
    const dataById = await fetch(`${this.url}/${id}`);
    return (await dataById.json()) || {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
