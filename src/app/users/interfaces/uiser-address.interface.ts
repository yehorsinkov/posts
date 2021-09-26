import { UserGeo } from "./user-goe.interface";

export interface userAddress {
      street: string;
      suite: string;
      city: string; 
      zipcode: string; 
      geo: UserGeo
}