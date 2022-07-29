import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  host = "https://api.openweathermap.org/data/2.5/";

  constructor(private http: HttpClient) { }

  LoadForecastWeather(city: string): Observable<any> {
    return this.http.get(`${this.host}forecast`, {
      params: {
        q: city,
        appid: '5a4b2d457ecbef9eb2a71e480b947604',
        units: 'metric'
      }
    })
  }

  LoadCurrentWeather(city: string): Observable<any> {
    return this.http.get(`${this.host}weather`, {
      params: {
        q: city,
        appid: '5a4b2d457ecbef9eb2a71e480b947604',
        units: 'metric'
      }
    })
  }

}
