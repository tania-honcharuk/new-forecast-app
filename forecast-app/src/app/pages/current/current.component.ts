import { AppState } from './../../store/app.state';
import { WeatherData } from '../../models/weatherData.model';
import { ForecastService } from '../../services/forecast.service';
import { getLocations, getLocationById, getLocationByCity } from '../location/state/locations.selector';
import { Store } from '@ngrx/store';
import { Location } from '../../models/locations.model';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { deleteLocation } from '../location/state/locations.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  locations!: Observable<Location[]>;
  location: any;
  weatherDetails: WeatherData = new WeatherData();
  locationSubscription!: Subscription;
  test = 'Ohio'

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private forecastService: ForecastService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.locations = this.store.select(getLocations);
    console.log(888, this.store.select(getLocations.toString))
    //let city = store.state.locations.
    this.route.paramMap.subscribe((params) => {
      const city = params.get('city');
      this.locationSubscription = this.store
        .select(getLocationByCity, { city })
        .subscribe((data) => {
          this.location = data;
          console.log(1232, this.location)
        });
    });
    // this.forecastService.LoadCurrentWeather(this.location).subscribe(
    //   res => {
    //     this.weatherDetails.cityName = res.name;
    //     this.weatherDetails.description = res.weather[0].description;
    //     this.weatherDetails.currentTemperature = Math.round(res.main.temp);
    //     this.weatherDetails.icon = "http://openweathermap.org/img/wn/" + res.weather[0].icon + ".png";
    //     this.weatherDetails.maxTemperature = Math.round(res.main.temp_max);
    //     this.weatherDetails.minTemperature = Math.round(res.main.temp_min);
    //   });
  }



  onDeleteLocation(id: string) {
    this.store.dispatch(deleteLocation({ id }));
  }

  onDisplayForecast() {
    console.log(2134)
    this.router.navigateByUrl(`/forecast/${this.test}`);
  }

  onDisplayClimate() {
    console.log(23456)
    this.router.navigateByUrl(`/climate/${this.test}`);
  }
}
