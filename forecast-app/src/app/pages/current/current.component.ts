import { SharingService } from './../../services/sharing.service';
import { DeleteLocationAction } from './../location/state/locations.actions';
import { AppState } from './../../store/app.state';
import { WeatherData } from '../../models/weatherData.model';
import { ForecastService } from '../../services/forecast.service';
import { Store } from '@ngrx/store';
import { Location } from '../../models/locations.model';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  locationItems$!: Observable<Array<Location>>;
  weatherDetails: WeatherData = new WeatherData();
  locationSubscription!: Subscription;
  loc!: any;
  city!: any;

  constructor(
    private store: Store<AppState>,
    private forecastService: ForecastService,
    private router: Router,
    private sharingService: SharingService
  ) { }

  ngOnInit(): void {
    this.locationItems$ = this.store.select(store => store.locations);
    this.locationItems$.subscribe(
      locations => {
        locations.forEach(i => {

          this.forecastService.LoadCurrentWeather(i.city).subscribe(
            res => {
              this.weatherDetails.cityName = res.name;
              this.weatherDetails.description = res.weather[0].description;
              this.weatherDetails.currentTemperature = Math.round(res.main.temp);
              this.weatherDetails.icon = "http://openweathermap.org/img/wn/" + res.weather[0].icon + ".png";
              this.weatherDetails.maxTemperature = Math.round(res.main.temp_max);
              this.weatherDetails.minTemperature = Math.round(res.main.temp_min);
              console.log(this.weatherDetails, 8585)
            })
        })
      }
    )



  }

  onDeleteLocation(id: string) {
    this.store.dispatch(new DeleteLocationAction(id));
  }

  onDisplayForecast(city: string) {
    this.sharingService.setData(city);
    this.router.navigateByUrl(`/forecast/${city}`);
  }

  onDisplayClimate(city: string) {
    this.sharingService.setData(city);
    this.router.navigateByUrl(`/climate/${city}`);
  }
}
