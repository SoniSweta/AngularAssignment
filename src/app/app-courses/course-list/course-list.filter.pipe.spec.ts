import { Course } from '../models/course';
import { CourseListFilter } from './course-list.filter.pipe';

describe('CourseListFilter', () => {
  it('create an instance', () => {
    const pipe = new CourseListFilter();
    expect(pipe).toBeTruthy();
  });

  it('should search', () => {
    let courseItems: Course[] = [
      {
        Id: 1,
        Title: 'Video Course 1. Name Tag',
        Duration: 90,
        IsTopRated: true,
        Description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        CreationDate: new Date(2020, 10, 22),
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
      {
        Id: 3,
        Title: 'Video Course 3. Name Tag',
        Duration: 70,
        IsTopRated: false,
        Description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        CreationDate: new Date(2020, 9, 28),
        Authors: [],
        SelectedAuthors: [],
      },
      {
        Id: 4,
        Title: 'Video Course 4. Name Tag',
        Duration: 28,
        IsTopRated: false,
        Description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        CreationDate: new Date(2020, 8, 22),
        Authors: [],
        SelectedAuthors: [],
      },
      {
        Id: 5,
        Title: 'Video Course 5. Name Tag',
        Duration: 28,
        IsTopRated: false,
        Description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        CreationDate: new Date(2020, 8, 1),
        Authors: [],
        SelectedAuthors: [],
      },
      {
        Id: 6,
        Title: 'Video Course 6. Name Tag',
        Duration: 28,
        IsTopRated: false,
        Description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        CreationDate: new Date(2020, 8, 2),
        Authors: [],
        SelectedAuthors: [],
      },
      {
        Id: 7,
        Title: 'Video Course 7. Name Tag',
        Duration: 28,
        IsTopRated: false,
        Description:
          "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
        CreationDate: new Date(2020, 8, 5),
        Authors: [],
        SelectedAuthors: [],
      },
    ];
    let filter: string = 'Video Course 6. Name Tag';
    const pipe = new CourseListFilter();
    let courseItemsFiltered = pipe.transform(courseItems, filter);
    expect(courseItemsFiltered.length).toBeTruthy(1);
  });
});
