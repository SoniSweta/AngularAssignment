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

  it('should display title', () => {
    component.courseDetail = courseService.getCourse(1);
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let title = fixture.debugElement.query(By.css('.ctitle'));
      expect(title.nativeElement.value).toContain(component.courseDetail.Title);
    });
  });

  it('should display description', () => {
    component.courseDetail = courseService.getCourse(1);
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let title = fixture.debugElement.query(By.css('.description'));
      expect(title.nativeElement.value).toContain(
        component.courseDetail.Description
      );
    });
  });

  it('should display duration', () => {
    component.courseDetail = courseService.getCourse(1);
    component.ngOnInit();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      let title = fixture.debugElement.query(By.css('.duration'));
      expect(title.nativeElement.value).toContain(
        component.courseDetail.Duration
      );
    });
  });

  it('should do nothing on onItemSelect', () => {
    component.onItemSelect({});
  });

  it('should do nothing on OnItemDeSelect', () => {
    component.OnItemDeSelect({});
  });

  it('should do nothing on onSelectAll', () => {
    component.onSelectAll({});
  });

  it('should do nothing on onDeSelectAll', () => {
    component.onDeSelectAll({});
  });

  it('should emit on onSave', () => {
    component.courseDetail = courseService.getCourse(1);
    spyOn(component.saveChangesEvent, 'emit');
    component.onSave();
    expect(component.saveChangesEvent.emit).toHaveBeenCalled();
  });

  it('should emit onCancel', () => {
    component.courseDetail = courseService.getCourse(1);
    spyOn(component.cancelSaveEditEvent, 'emit');
    component.onCancel();
    expect(component.cancelSaveEditEvent.emit).toHaveBeenCalled();
  });
});
