import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  host = "https://api.openweathermap.org/data/2.5/";
  pro = "https://pro.openweathermap.org/data/2.5/";

  constructor(private http: HttpClient) { }

  LoadForecastWeather(city: string): Observable<any> {
    return this.http.get(`${this.host}forecast`, {
      params: {
        q: city,
        appid: '2567b6a423f8a4bdbb21355b06d655a4',
        units: 'metric'
      }
    })
  }

  LoadCurrentWeather(city: string): Observable<any> {
    return this.http.get(`${this.host}weather`, {
      params: {
        q: city,
        appid: 'a395f6600caf94b2b00514da75a2c89e',
        units: 'metric'
      }
    })
  }

}
