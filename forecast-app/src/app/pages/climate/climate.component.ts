import { TestData } from './../../models/climate.model';
import { SharingService } from './../../services/sharing.service';
import { Router } from '@angular/router';
import { ClimateDetails } from './../../models/climateDetails.model';
import { ClimateData } from './../../models/climateData.model';
import { ForecastService } from './../../services/forecast.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface dataTest {
  date: string,
  temperature: number
}

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.scss']
})

export class ClimateComponent implements OnInit, AfterViewInit {
  city!: string;
  climateData: ClimateData = new ClimateData();
  displayedColumns: string[] = [
    'date',
    'temperature',
    'min',
    'max',
    'wind',
    'pressure',
    'humidity',
    'clouds'
  ];
  details!: TestData;
  dataSource = new MatTableDataSource<TestData>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private sharingService: SharingService,
    private forecastService: ForecastService,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.city = this.sharingService.getData()
    this.forecastService.LoadForecastWeather(this.city).subscribe(
      res => {
        this.climateData.cityName = res.city.name;

        for (let i = 0; i < res.list.length; i++) {
          let details = new ClimateDetails();
          details.date = res.list[i].dt_txt;
          details.currentTemperature = Math.round(res.list[i].main.temp);
          details.maxTemperature = Math.round(res.list[i].main.temp_max);
          details.minTemperature = Math.round(res.list[i].main.temp_min);
          details.pressure = res.list[i].main.sea_level;
          details.humidity = res.list[i].main.humidity;
          details.clouds = res.list[i].clouds.all;
          details.wind = res.list[i].wind.speed;
          this.climateData.details.push(details);
        }
        this.dataSource.data = this.climateData.details;
      }
    )
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  backToLocation() {
    this.router.navigateByUrl(`/current`);
  }

}
