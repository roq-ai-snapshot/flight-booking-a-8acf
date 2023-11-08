import { BookingInterface } from 'interfaces/booking';
import { GetQueryInterface } from 'interfaces';

export interface FlightInterface {
  id?: string;
  airline: string;
  flight_number: string;
  departure_airport: string;
  arrival_airport: string;
  departure_time: any;
  arrival_time: any;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];

  _count?: {
    booking?: number;
  };
}

export interface FlightGetQueryInterface extends GetQueryInterface {
  id?: string;
  airline?: string;
  flight_number?: string;
  departure_airport?: string;
  arrival_airport?: string;
}
