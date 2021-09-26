import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { styles } from './google-maps-styles';
import { GoogleService, Marker } from './services/google.service';
import MarkerClusterer from '@googlemaps/markerclustererplus';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.sass']
})
export class GoogleMapsComponent {
  @ViewChild('googleMaps', { static: true }) googleMaps: ElementRef;
  private markers: Marker[] = [];
  private map: google.maps.Map;
  private googleService$ = new Subject;

  constructor(private googleService: GoogleService) {
    this.googleService.getMapMarkers()
      .pipe(takeUntil(this.googleService$))
      .subscribe(data => {
        this.markers = data;
        this.loadGoogleMap();
      });
  }

  private loadGoogleMap(): void {
    new Loader({
      apiKey: 'AIzaSyCwxyLEpcS0YZBiPa8tZakAmbKQ5YwcPiQ'
    })
      .load().then(() => {
        this.map = this.getMap();
        const markers = this.markers.map(marker => new google.maps.Marker(marker));
        new MarkerClusterer(
          this.map,
          markers,
          {
            imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
          }
        );
      });
  }

  private getMap(): any {
    const map = new google.maps.Map(this.googleMaps.nativeElement, {
      center: { lat: -51.233334, lng: -30.783333 },
      zoom: 3,
      styles: styles
    });
    return map;
  }
}
