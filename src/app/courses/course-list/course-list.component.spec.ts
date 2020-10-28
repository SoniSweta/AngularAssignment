import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseService } from 'src/app/services/course.service';
import { NumberToMinutes } from 'src/app/services/numbertominutes.pipe';
import { CourseListComponent } from './course-list.component';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let courseService: CourseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [CourseService, NumberToMinutes],
      declarations: [CourseListComponent, NumberToMinutes],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    courseService = TestBed.inject(CourseService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display list', () => {
    component.courseItemsOverview = courseService.getCourses();
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let coursesOverviewItems = fixture.debugElement.query(
        By.css('.coursesOverview')
      );
      expect(coursesOverviewItems).toBeDefined();
    });
  });

  it('should not display list', () => {
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let coursesOverviewItems = fixture.debugElement.query(
        By.css('.coursesOverview')
      );
      expect(coursesOverviewItems).toBeNull();
    });
  });

  it('should emit edit event', () => {
    spyOn(component.editCourseEvent, 'emit');
    component.editCourse(1);
    expect(component.editCourseEvent.emit).toHaveBeenCalled();
  });

  // it('should show popup on emit delete event', () => {
  //   // spyOn(window, 'confirm');
  //   // component.deleteCourse(1);
  //   // expect(window.confirm).toHaveBeenCalledWith('Are you sure to delete?');
  // });

  it('should emit delete event', () => {
    // spyOn(component.deleteCourseEvent, 'emit');
    // spyOn(window, 'confirm').and.callFake(function () {
    //   return true;
    // });
    spyOn(component.deleteCourseEvent, 'emit');
    component.deleteCourse(1);
    expect(component.deleteCourseEvent.emit).toHaveBeenCalled();
    // fixture.whenStable().then(() => {
    //   expect(component.deleteCourseEvent.emit).toHaveBeenCalled();
    // });
  });
});
