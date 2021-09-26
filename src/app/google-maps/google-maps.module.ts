import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsComponent } from './google-maps.component';
import { GoogleMapsRoutingModule } from './google-maps-routing.module';

@NgModule({
  declarations: [
    GoogleMapsComponent
  ],
  imports: [
    CommonModule,
    GoogleMapsRoutingModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class GoogleMapsModule { }
