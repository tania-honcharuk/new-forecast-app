import { AppState } from './../../store/app.state';
import { AddLocationAction } from './state/locations.actions';
import { Observable } from 'rxjs';
import { Location } from '../../models/locations.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})

export class LocationComponent implements OnInit {
  locationItems$!: Observable<Array<Location>>;
  locationForm!: FormGroup;
  locations!: Observable<Location[]>;
  newLocationItem: Location = { id: '', city: '' };

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.locationItems$ = this.store.select(store => store.locations);

    this.locationForm = new FormGroup({
      city: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.newLocationItem.id = uuid();
    this.newLocationItem.city = this.locationForm.value.city;

    this.store.dispatch(new AddLocationAction(this.newLocationItem));

    this.newLocationItem = { id: '', city: '' }
    this.locationForm.reset('');
  }
}
