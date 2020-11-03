import { User } from './user';

export interface Course {
  Id: number;
  Title: string;
  CreationDate: Date;
  Duration: number;
  IsTopRated: boolean;
  Description: string;
  Authors: User[];
  SelectedAuthors: User[];
}
