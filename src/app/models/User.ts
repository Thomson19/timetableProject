import {Role} from './Role';

export class User {
  id: number;
  role: Role;
  token?: string;
}
