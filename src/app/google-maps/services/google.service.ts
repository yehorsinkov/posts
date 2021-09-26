import { Injectable } from '@angular/core';
import { AsyncSubject, ReplaySubject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { User } from 'src/app/users/interfaces/user.interface';
import { UserService } from 'src/app/users/services/user.service';

export interface Position {
  lat: number;
  lng: number;
}

export interface Label {
  color: string;
  text: string;
}

export interface Options {
  animation: google.maps.Animation.BOUNCE
}

export interface Marker {
  position: Position
  label: string;
  // options: Options;
  // title: string;
}

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  declare google: any;
  public markers$: ReplaySubject<Marker[]> = new ReplaySubject<Marker[]>(1);

  constructor(private userService: UserService) { }

  public getMapMarkers() {
    return this.userService.getAllUsers()
    .pipe(
      map((data: User[]) => this.getMarkers(data))
    );
  }

  public getMarkers$() {
    this.getMapMarkers().subscribe(data => this.markers$.next(data));
  }
  
  private getMarkers(data: User[]): Marker[] {
    return data.map(user => {
      return {
        position: {
          lat: +user.address.geo.lat,
          lng: +user.address.geo.lng,
        },
        label: user.address.city.slice(0, 1),
      }
    });
  }
}
