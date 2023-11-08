import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerServiceInterface {
  id?: string;
  user_id: string;
  service_type: string;
  service_description: string;
  start_time: any;
  end_time?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CustomerServiceGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  service_type?: string;
  service_description?: string;
}
