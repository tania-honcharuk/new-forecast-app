import { SharingService } from './../../services/sharing.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ForecastData } from '../../models/ForecastData.model';
import { ForecastService } from './../../services/forecast.service';
import { ForecastDetails } from '../../models/ForecastDetails.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  forecastData!: ForecastData;
  city!: string;

  constructor(
    private forecastService: ForecastService,
    private router: Router,
    private sharingService: SharingService,
  ) { }

  ngOnInit(): void {
    this.city = this.sharingService.getData();
    console.log(this.city, 999);
    this.forecastService.LoadForecastWeather(this.city).subscribe(
      res => {
        this.forecastData = new ForecastData();
        this.forecastData.name = res.city.name;
        for (let i = 0; i < res.list.length; i += 8) {
          let details = new ForecastDetails();
          details.date = res.list[i].dt_txt;
          details.maxTemperature = Math.round(res.list[i].main.temp_max);
          details.minTemperature = Math.round(res.list[i].main.temp_min);
          details.description = res.list[i].weather[0].description;
          details.icon = "http://openweathermap.org/img/wn/" + res.list[i].weather[0].icon + "@2x.png";

          this.forecastData.details.push(details);
        }
      }
    )
  }

  backToLocation() {
    this.router.navigateByUrl(`/current`);
  }
}
