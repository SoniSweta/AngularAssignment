import { Course } from '../models/course';
import { CourseListOrder } from './course-list.order.pipe';

describe('CourseListOrder', () => {
  it('create an instance', () => {
    const pipe = new CourseListOrder();
    expect(pipe).toBeTruthy();
  });

  it('should order', () => {
    let courseItems: Course[] = [
      {
        Id: 1,
        Title: 'Video Course 1. Name Tag',
        Duration: 90,
        IsTopRated: true,
        Description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        CreationDate: new Date(2020, 7, 22),
        Authors: [],
        SelectedAuthors: [],
      },
      {
        Id: 2,
        Title: 'Video Course 2. Name Tag',
        Duration: 28,
        IsTopRated: false,
        Description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        CreationDate: new Date(2020, 9, 29),
        Authors: [],
        SelectedAuthors: [],
      },
    ];
    const pipe = new CourseListOrder();
    let courseItemsOrdered = pipe.transform(courseItems);
    expect(courseItemsOrdered[0].Id).toBeTruthy(2);
  });
});
