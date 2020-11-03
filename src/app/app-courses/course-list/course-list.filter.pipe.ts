import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../models/course';

@Pipe({
  name: 'CourseListFilter',
})
export class CourseListFilter implements PipeTransform {
  transform(courseItems: Course[], filter: string): Course[] {
    if (!filter) {
      return courseItems;
    }
    return courseItems.filter((x) => x.Title.toLowerCase().indexOf(filter.toLowerCase()) >= 0);
  }
}
