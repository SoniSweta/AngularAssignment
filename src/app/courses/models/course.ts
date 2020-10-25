import { User } from './user';

export interface Course {
  Id: number;
  Title: string;
  CreationDate: Date;
  Duration: number;
  Description: string;
  Authors: User[];
  SelectedAuthors: User[];
}
