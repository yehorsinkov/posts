import { userAddress } from "./uiser-address.interface";
import { UserCompany } from "./user-company.interface";

export interface User {
    id: number;
    email: string;
    name: string;
    phone: string; 
    username:string;
    website: string;
    company: UserCompany;
    address: userAddress;
}