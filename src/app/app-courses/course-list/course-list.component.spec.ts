import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseService } from 'src/app/services/course.service';
import { NumberToMinutes } from 'src/app/services/numbertominutes.pipe';
import { CourseListComponent } from './course-list.component';
import { CourseListOrder } from './course-list.order.pipe';
import { SimpleChanges } from '@angular/core';
import { CourseListFilter } from './course-list.filter.pipe';
describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let courseService: CourseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [CourseService, NumberToMinutes],
      declarations: [
        CourseListComponent,
        NumberToMinutes,
        CourseListOrder,
        CourseListFilter,
      ],
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

  it('should init', () => {
    component.ngOnInit();
  });

  it('search course', () => {
    component.searchCourse();
  });

  it('should call ngOnChanges', () => {
    let changes: SimpleChanges = {
      courseItemsOverview: {
        firstChange: null,
        previousValue: null,
        isFirstChange: null,
        currentValue: courseService.getCourses(),
      },
    };
    component.ngOnChanges(changes);
  });

  it('should emit add event', () => {
    spyOn(component.addCourseEvent, 'emit');
    component.addNewCourse();
    expect(component.addCourseEvent.emit).toHaveBeenCalled();
  });

  it('should emit edit event', () => {
    spyOn(component.editCourseEvent, 'emit');
    component.editCourse(1);
    expect(component.editCourseEvent.emit).toHaveBeenCalled();
  });

  it('should emit delete event', () => {
    spyOn(component.deleteCourseEvent, 'emit');
    component.deleteCourse(1);
    expect(component.deleteCourseEvent.emit).toHaveBeenCalled();
  });
});
