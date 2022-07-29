import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';

import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    imports: [
        MatTableModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
        MatPaginatorModule,
        MatSortModule,
        MatStepperModule,
        MatDividerModule,
        MatSidenavModule
    ],
    exports: [
        MatTableModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCardModule,
        MatStepperModule,
        MatPaginatorModule,
        MatSortModule,
        MatDividerModule,
        MatSidenavModule
    ]
})
export class MaterialModule { }
