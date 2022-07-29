import { ClimateDetails } from './../../models/climateDetails.model';
import { ClimateData } from './../../models/climateData.model';
import { ForecastService } from './../../services/forecast.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.scss']
})
export class ClimateComponent implements OnInit {
  city: string = "Ohio";
  climateData!: ClimateData;
  // data = this.climateData.details;
  numbers!: any;
  displayedColumns: string[] = ['date', 'temperature', 'icon', 'min', 'max', 'wind', 'pressure', 'humidity', 'clouds'];
  dataSource!: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private forecastService: ForecastService,
  ) {
  }

  ngOnInit(): void {
    this.forecastService.LoadForecastWeather(this.city).subscribe(
      res => {
        this.climateData = new ClimateData();
        this.climateData.cityName = res.city.name;

        for (let i = 1; i < res.list.length; i += 2) {
          let details = new ClimateDetails();
          details.date = res.list[i].dt_txt;
          details.maxTemperature = Math.round(res.list[i].main.temp_max);
          details.minTemperature = Math.round(res.list[i].main.temp_min);
          details.currentTemperature = Math.round(res.list[i].main.temp)
          details.description = res.list[i].weather[0].description;
          details.icon = "http://openweathermap.org/img/wn/" + res.list[i].weather[0].icon + "@2x.png";
          details.pressure = res.list[i].main.sea_level;
          details.humidity = res.list[i].main.humidity;
          details.clouds = res.list[i].clouds.all;
          details.wind = res.list[i].wind.speed;
          this.climateData.details.push(details);

        }
        this.dataSource = this.climateData.details;
      }
    )
  }

  // ngAfterViewInit() {
  //   // this.data.paginator = this.paginator;
  //   // this.data.sort = this.sort;
  // }

}
