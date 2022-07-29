import { getLocations } from './state/locations.selector';
import { Observable } from 'rxjs';
import { addLocation } from './state/locations.actions';
import { Location } from '../../models/locations.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})

export class LocationComponent implements OnInit {
  locationForm!: FormGroup;
  value!: string;
  locations!: Observable<Location[]>;
  location!: string;
  testid!: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.locationForm = new FormGroup({
      city: new FormControl(null),
    });
    this.locations = this.store.select(getLocations)
  }

  onSubmit() {
    const location: Location = {
      city: this.locationForm.value.city,
      id: '',
    };
    this.store.dispatch(addLocation({ location }));
  }

}
