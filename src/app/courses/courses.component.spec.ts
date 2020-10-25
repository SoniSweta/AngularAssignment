import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseService } from '../services/course.service';

import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let courseService: CourseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [CourseService],
      declarations: [CoursesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    courseService = TestBed.inject(CourseService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add course', () => {
    component.addNewCourse();
    expect(component.isAddingNewCourse).toBeTruthy();
  });

  it('should edit course', () => {
    component.editCourse(1);
    expect(component.isAddingNewCourse).toBeTruthy();
  });

  it('should delete course', () => {
    spyOn(window, 'confirm').and.callFake(function () {
      return true;
    });
    component.deleteCourse(1);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      var checkDeleted = courseService.getCourse(1);
      expect(checkDeleted).toBeNull();
    });
  });

  it('should save new course', () => {
    var courses = courseService.getCourses().length;
    var course = courseService.getCourse(1);
    course.Id = 0;
    component.saveChanges(course);
    var newCourses = courseService.getCourses().length;
    expect(newCourses).toBeGreaterThan(courses);
  });

  it('should edit course', () => {
    var course = courseService.getCourse(1);
    var newTitle = 'New Title';
    course.Title = newTitle;
    component.saveChanges(course);
    var course = courseService.getCourse(1);
    expect(course.Title).toEqual(newTitle);
  });

  it('Cancel save-edit course', () => {
    component.cancelSaveEdit();
    expect(component.isAddingNewCourse).toBeFalsy();
  });
});
