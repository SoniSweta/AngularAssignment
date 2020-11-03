import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CourseService } from 'src/app/services/course.service';

import { CourseItemDetailComponent } from './course-item-detail.component';

describe('CourseItemDetailComponent', () => {
  let component: CourseItemDetailComponent;
  let fixture: ComponentFixture<CourseItemDetailComponent>;
  let courseService: CourseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      providers: [CourseService],
      declarations: [CourseItemDetailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemDetailComponent);
    component = fixture.componentInstance;
    courseService = TestBed.inject(CourseService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should do nothing on onItemSelect', () => {
    component.courseDetail = courseService.getCourse(1);
    component.onItemSelect({});
    expect(component).toBeTruthy();
  });

  it('should do nothing on OnItemDeSelect', () => {
    component.courseDetail = courseService.getCourse(1);
    component.OnItemDeSelect({});
    expect(component).toBeTruthy();
  });

  it('should do nothing on onSelectAll', () => {
    component.courseDetail = courseService.getCourse(1);
    component.onSelectAll({});
    expect(component).toBeTruthy();
  });

  it('should do nothing on onDeSelectAll', () => {
    component.courseDetail = courseService.getCourse(1);
    component.onDeSelectAll({});
    expect(component).toBeTruthy();
  });

  it('should emit on onSave', () => {
    component.courseDetail = courseService.getCourse(1);
    spyOn(component.saveChangesEvent, 'emit');
    component.onSave();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.saveChangesEvent.emit).toHaveBeenCalled();
    });
  });

  it('should emit onCancel', () => {
    spyOn(component.cancelSaveEditEvent, 'emit');
    component.onCancel();
    expect(component.cancelSaveEditEvent.emit).toHaveBeenCalled();
  });
});
