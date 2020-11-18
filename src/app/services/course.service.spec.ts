import { CourseService } from './course.service';

// Straight Jasmine testing without Angular's testing support
describe('CourseService', () => {
  let service: CourseService;
  var selectedAuthors = [{ Id: 3, FirstName: 'Brad', LastName: 'Pitt' }];
  var allAuthors = [
    { Id: 1, FirstName: 'Johnny', LastName: 'Depp' },
    { Id: 2, FirstName: 'Robert', LastName: 'Niro' },
    { Id: 3, FirstName: 'Brad', LastName: 'Pitt' },
    { Id: 4, FirstName: 'Angelina', LastName: 'Jolie' },
    { Id: 5, FirstName: 'Scarlet', LastName: 'Johnson' },
  ];
  var courseItemsOverview = [
    {
      Id: 1,
      Title: 'Video Course 1. Name Tag',
      Duration: 90,
      IsTopRated: true,
      Description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      CreationDate: new Date(2020, 10, 22),
      Authors: allAuthors,
      SelectedAuthors: selectedAuthors,
    },
    {
      Id: 2,
      Title: 'Video Course 2. Name Tag',
      Duration: 28,
      IsTopRated: false,
      Description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      CreationDate: new Date(2020, 9, 29),
      Authors: allAuthors,
      SelectedAuthors: selectedAuthors,
    },
    {
      Id: 3,
      Title: 'Video Course 3. Name Tag',
      Duration: 70,
      IsTopRated: false,
      Description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      CreationDate: new Date(2020, 9, 28),
      Authors: allAuthors,
      SelectedAuthors: selectedAuthors,
    },
    {
      Id: 4,
      Title: 'Video Course 4. Name Tag',
      Duration: 28,
      IsTopRated: false,
      Description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      CreationDate: new Date(2020, 8, 22),
      Authors: allAuthors,
      SelectedAuthors: selectedAuthors,
    },
    {
      Id: 5,
      Title: 'Video Course 5. Name Tag',
      Duration: 28,
      IsTopRated: false,
      Description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      CreationDate: new Date(2020, 8, 1),
      Authors: allAuthors,
      SelectedAuthors: selectedAuthors,
    },
    {
      Id: 6,
      Title: 'Video Course 6. Name Tag',
      Duration: 28,
      IsTopRated: false,
      Description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      CreationDate: new Date(2020, 8, 2),
      Authors: allAuthors,
      SelectedAuthors: selectedAuthors,
    },
    {
      Id: 7,
      Title: 'Video Course 7. Name Tag',
      Duration: 28,
      IsTopRated: false,
      Description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      CreationDate: new Date(2020, 8, 5),
      Authors: allAuthors,
      SelectedAuthors: selectedAuthors,
    },
  ];

  beforeEach(() => {
    service = new CourseService();
  });

  it('#getAllAuthors should return authors', () => {
    expect(service.getAllAuthors()).toEqual(allAuthors);
  });

  it('#getCourses should return courses', () => {
    expect(service.getCourses().length).toBeGreaterThan(0);
  });

  it('#getCourse should return course if present', () => {
    var testCourse = {
      Id: 1,
      Title: 'Video Course 1. Name Tag',
      Duration: 90,
      IsTopRated: true,
      Description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      CreationDate: new Date(2020, 10, 22),
      Authors: allAuthors,
      SelectedAuthors: selectedAuthors,
    };
    expect(service.getCourse(1)).toEqual(testCourse);
  });

  it('#getCourse should return null if not present', () => {
    expect(service.getCourse(11)).toBeNull();
  });

  it('#addCourse should add a new course', () => {
    var testCourse = {
      Id: 0,
      Title: 'Video Course 1. Name Tag',
      Duration: 28,
      IsTopRated: false,
      Description:
        "Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
      CreationDate: new Date(2020, 8, 22),
      Authors: allAuthors,
      SelectedAuthors: selectedAuthors,
    };
    var currentCourses = service.getCourses().length;
    var afterAdding = service.addCourse(testCourse).length;
    expect(afterAdding).toBeGreaterThan(currentCourses);
  });

  it('#updateCourse should update existing course', () => {
    var currentCourse = service.getCourse(1);
    currentCourse.Title = 'New test title';
    service.updateCourse(currentCourse);
    var updatedCourse = service.getCourse(1);
    expect(currentCourse.Title).toBe(updatedCourse.Title);
  });

  it('#delete should delete existing course', () => {
    service.deleteCourse(1);
    var nullCourse = service.getCourse(1);
    expect(nullCourse).toBeNull();
  });
});
